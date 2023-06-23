import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import TotalMoney from './components/TotalMoney/TotalMoney'
import List from './components/List/List'

function App() {
  const [listTransactions, setListTransactions] = useState([])

  return (
    <>
    <Header />
    <main>
      <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>
      <TotalMoney listTransactions={listTransactions}/>
      <div className='financial__summary'>
        <p>Resumo financeiro</p>
        {listTransactions.length == 0 ? (
          <h1>Você ainda não possui nenhum lançamento</h1>
        ) : (
          <List listTransactions={listTransactions} setListTransactions={setListTransactions}/>
        )}
      </div>
    </main>
    </>
  )
}

export default App