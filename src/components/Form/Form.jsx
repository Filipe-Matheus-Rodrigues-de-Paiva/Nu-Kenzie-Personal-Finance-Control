import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Form ({ listTransactions, setListTransactions }) {

    const [formData, setFormData] = useState({
        description: '',
        brlValue: '',
        statusOutput: ''
    })
    
    const addTransaction = (formData) => {
        const newTransaction = {...formData, id: uuidv4() }
        setListTransactions([...listTransactions, newTransaction])
        toast.success('Lançamento adicionado!',  {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (formData.brlValue == '' || formData.description == '' || formData.statusOutput == '') {
            return toast('Preencha todos os campos para efetuar lançamento')
        }

        addTransaction(formData)

        setFormData({
            description: '',
            brlValue: '',
            statusOutput: 'Entrada'
        })
    }


    return (
        <>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
            <div className="input__description">
                <label htmlFor="descrição">Descrição</label>
                <input type={"text"} name="descrição" placeholder="Digite aqui sua descrição" value={formData.description} onChange={(event) => setFormData({...formData, description: event.target.value})}/>
                <p>Ex: Compra de roupas</p>
            </div>
            <div className="input__value">
                <label htmlFor="valorReais">Valor (R$)</label>
                <input type={"number"} value={formData.brlValue} name="valorReais" onChange={(event) => setFormData({...formData, brlValue: event.target.value})} placeholder="Digite aqui o valor"/>
            </div>
            <div className="input__select">
                <label htmlFor="status">Tipo de Valor</label>
                <select name="status"  value={formData.statusOutput} onChange={(event) => setFormData({...formData, statusOutput: event.target.value})}>
                    <option disabled>Tipo de valor</option>
                    <option value="Entrada">Entrada</option>
                    <option value="Despesa">Saída</option>
                </select>
            </div>
            <button type="submit">Inserir valor</button>
        </form>
        </>
    )
}