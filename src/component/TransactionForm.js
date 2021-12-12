import React from 'react'
import { useFirestore } from '../hooks/useFirestore'
import { useState } from 'react'


//Pass in the selected Cryptocurrency as props
const TransactionForm = ({ crypto }) => {
    
    //UseFirestore hook - for updating the transaction array records
    const { updateRecord , response } = useFirestore('cryptos') 

    //State that will be used to update the transaction entries
    const [state, setState] = useState({
        date: "",
        coins: "",
        price: "",
        cost: "",
        type: "",
      })

      //To be used if allowing users to add 'sell' records
      /*
      const transactionTypes = [
          {value: 'Buy', label: 'buy'},
          {value: 'Sell', label: 'sell'}
      ] 
      const handleSelect = async (option) =>{
        setState({
          ...state,
          type: option
        });
      }*/



      /* handleChange runs when user enters new value into form
      *  state is updated - evt.target.name is used to find the relevant field to update, value is the information to be passed in.
      */    
      const handleChange = async (evt) =>{
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
      }

    const handleSubmit = async (e) => {
        e.preventDefault()
        //if(state.type === 'Buy'){

            //pass in the (1) crypto id and the (2) data to be updated
            await updateRecord(crypto.id, {
            
                //Current state - which is the last data to be entered into form is added into the transactions array
                transactions: [...crypto.transactions, state],

                totalCoin: [parseFloat(crypto.totalCoin) + parseFloat(state.coins)],
                totalCost: [parseFloat(crypto.totalCost) + parseFloat(state.cost)],
                
                
                
                
            },console.log('one'))

            await updateRecord(crypto.id, {
            
                //Current state - which is the last data to be entered into form is added into the transactions array
                transactions: [...crypto.transactions, state],

                
                costBasis: [(parseFloat(crypto.totalCost) + parseFloat(state.cost)) / (parseFloat(crypto.totalCoin) + parseFloat(state.coins))],
                currentValue: [(parseFloat(crypto.totalCoin) + parseFloat(state.coins)) * crypto.currentPrice],
               
                
                
            },console.log('two'))
            await updateRecord(crypto.id, {
            
                transactions: [...crypto.transactions, state],
                profitOrLoss: ((parseFloat(crypto.totalCoin) + parseFloat(state.coins)) * crypto.currentPrice) - (parseFloat(crypto.totalCost) + parseFloat(state.cost))

                
                
            })

    

        //}
        /*else if(state.type === 'Sell'){
            await updateRecord(crypto.id, {
            
                transactions: [...crypto.transactions, state],
                totalCoin: [parseInt(crypto.totalCoin) - parseInt(state.coins)],
                
                costBasis: [(parseInt(crypto.totalCost) - parseInt(state.cost)) / (parseInt(crypto.totalCoin) - parseInt(state.coins))],
                currentPrice: 10,
                currentValue: [(parseInt(crypto.totalCoin) - parseInt(state.coins)) * crypto.currentPrice],
            })
        */


       //Reset the state if no errors
       
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
                <form onSubmit={handleSubmit} className="form">
                    <div>
                        <input 
                            required
                            type="date"
                            name="date"
                            value={state.date}
                            onChange={handleChange}
                        />  
                    </div> 
                    <div>
                        <input
                            required
                            placeholder="Coins"
                            type="number"
                            name="coins"
                            min="0.00000"
                            step="0.00001"
                            value={state.coins}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            required
                            placeholder="Price"
                            type="number" 
                            name="price"
                            min="0.00000"
                            step="0.00001"
                            value={state.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            required
                            placeholder="Cost"
                            type="number"
                            name="cost"
                            min="0.00000"
                            step="0.00001"
                            value={state.cost}
                            onChange={handleChange}
                        />
                    </div>
                    {/*
                    <div>
                        <Select
                        options={transactionTypes}
                        onChange={(o) => handleSelect(o.value)}  />
                    </div>
                    */}
              
                <input type="submit" />
           </form>
        </div>
    </div>
    </>
    )
}

export default TransactionForm
