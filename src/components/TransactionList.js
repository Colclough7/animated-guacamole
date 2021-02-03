import React,{useContext} from 'react'
import Transaction from './Transaction'
import {GlobalContext} from '../context/GlobalState'

const TransactionList = () => {
    const {transactions} = useContext(GlobalContext)
    return (
      <>
        {transactions.length > 0 ? 
        <>
        <h3>History</h3>
          <ul id="list" className="list">
              {transactions.map((transaction)=>(< Transaction key={transaction.id} transaction={transaction}/>))}
          </ul>
      </>
      :null}
     </>
    )
}

export default TransactionList

