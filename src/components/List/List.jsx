/* eslint-disable react/prop-types */
import { toast } from "react-toastify"
import Card from "../Card/Card"

export default function List ({ listTransactions, setListTransactions }) {

    const removeEntry = (transactionId) => {
        const remainingTransactions = listTransactions.filter((transaction) => transaction.id !== transactionId)
        setListTransactions(remainingTransactions)
        toast('Lançamento excluido com sucesso!')
    }

    return (
        <ul className="CardList">
            {listTransactions.map((transaction) => {
                return <Card status={transaction.statusOutput}
                key={transaction.id}
                transaction={transaction}
                removeEntry={removeEntry}
                value={transaction.brlValue}
                />
            })}
        </ul>
    )
}