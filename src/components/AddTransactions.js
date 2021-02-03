import React,{useState,useContext,useEffect} from 'react'
import {GlobalContext} from '../context/GlobalState'
import Error from './Error'

const AddTransactions = () => {
    const [text,setText] = useState('')
    const [amount,setAmount] = useState(0)
    const [error,setError] = useState(false)
    const {addTransactions} = useContext(GlobalContext)
    const submitHandler = e =>{
      e.preventDefault()
      if(text===''|| amount===0){
        setError(true)
      }
     else{ 
       const newTransaction = {
        id: new Date().getTime().toString(),
        text,
        amount:+amount
      }
      addTransactions(newTransaction)
      setText('')
      setAmount(0)
    }

    }
    useEffect(()=>{
      const timeout = setTimeout(()=>{
        setError(false)
      },3000)
      return ()=> clearTimeout(timeout)
      },[error])
    return (
        <>
        {error && <Error />}
          <h3>Add new transaction</h3>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text"  placeholder="Enter text..." value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" placeholder="Enter amount..." value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        </div>
        <button className="btn">Add transaction</button>
      </form>  
        </>
    )
}

export default AddTransactions
