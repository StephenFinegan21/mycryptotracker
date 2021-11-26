import React from 'react'
import { useFirestore } from '../hooks/useFirestore'
import { useState, useEffect } from 'react'

const TransactionForm = ({ id }) => {
    
    const { updateRecord , response } = useFirestore('cryptos')

    const [state, setState] = useState({
        date: "",
        coins: "",
        price: "",
        cost: "",
        type: "",
      })

      const handleChange = async (evt) =>{
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
      }


    const handleSubmit = async (e) => {
      
         

        e.preventDefault()
    
                 
        

        await updateRecord(id.id, {
            transactions: [...id.transactions, state]
        })
        if(!response.error){

        
        setState({
            date: "",
            coins: "",
            price: "",
            cost: "",
            type: "",
          })
        }
    
    }

    
        

    return (
        <>
        <div className="form-container">
            <div className="transaction-form">
                <form onSubmit={handleSubmit}>
                
                <input
                    required
                    placeholder="Date"
                    type="date"
                    name="date"
                    value={state.date}
                    onChange={handleChange}
                />
                
              
                <input
                    required
                    placeholder="Coins"
                    type="number"
                    name="coins"
                    value={state.coins}
                    onChange={handleChange}
                />
               
                <input
                    required
                    placeholder="Price"
                    type="number" min="1" step="any"
                    name="price"
                    value={state.price}
                    onChange={handleChange}
                />
               
                
                <input
                    required
                    placeholder="Cost"
                    type="text"
                    name="cost"
                    value={state.cost}
                    onChange={handleChange}
                />
               
                
                <input
                    required
                    placeholder="Type"
                    type="text"
                    name="type"
                    value={state.type}
                    onChange={handleChange}
                />
              
                
                
        
            <input type="submit" />
            </form>
        </div>
        </div>
          


        </>
    )
}

export default TransactionForm
