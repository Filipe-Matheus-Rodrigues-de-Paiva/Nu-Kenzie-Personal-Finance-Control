/* eslint-disable react/prop-types */
export default function TotalMoney ({ listTransactions }) {

    const sum = () => {
        return listTransactions.reduce((total, transaction) => {
            if (transaction.statusOutput === "Entrada") {
                return total + Number(transaction.brlValue)
            } else {
                return total - Number(transaction.brlValue)
            }
        }, 0)
    }

    if (listTransactions.length !== 0) {
        return (
            <div className="TotalMoney">
                <h1>Valor total: <span>{sum().toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span></h1>
                <small>O valor se refere ao saldo</small>
            </div>
        )
    } else {
        return
    }
}