export default function Card ({status, transaction, removeEntry, value}) {
    const styleIncome = {
        borderLeft: '5px solid #03B898',
    }

    const styleExpense = {
        borderLeft: '5px solid #E9ECEF',
    }

    if (status == 'Entrada') {
        return (
        <li className="card" style={styleIncome}>
            <h1 id="title">Mês de Dezembro</h1>
            <small id="EntryStatus">{status} - {transaction.description}</small>
            <small id="amount">R$ {value}</small>
            <button className="deleteButton" onClick={() => removeEntry(transaction.id)}>Excluir</button>
        </li>
        )
    } else {
        return (
        <li className="card" style={styleExpense}>
            <h1 id="title">Mês de Dezembro</h1>
            <small id="EntryStatus">{status} - {transaction.description}</small>
            <small id="amount">R$ {value}</small>
            <button className="deleteButton" onClick={() => removeEntry(transaction.id)}>Excluir</button>
        </li>
        )
    }
}