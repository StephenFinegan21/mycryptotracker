import React from 'react'
import { useFirestore } from '../hooks/useFirestore'
import { useState, useEffect } from 'react'


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

                totalCoin: [parseInt(crypto.totalCoin) + parseInt(state.coins)],
                totalCost: [parseInt(crypto.totalCost) + parseInt(state.cost)],
                
                
                
                
            },console.log('one'))

            await updateRecord(crypto.id, {
            
                //Current state - which is the last data to be entered into form is added into the transactions array
                transactions: [...crypto.transactions, state],

                
                costBasis: [(parseInt(crypto.totalCost) + parseInt(state.cost)) / (parseInt(crypto.totalCoin) + parseInt(state.coins))],
                currentValue: [(parseInt(crypto.totalCoin) + parseInt(state.coins)) * crypto.currentPrice],
               
                
                
            },console.log('two'))
            await updateRecord(crypto.id, {
            
                transactions: [...crypto.transactions, state],
                profitOrLoss: ((parseInt(crypto.totalCoin) + parseInt(state.coins)) * crypto.currentPrice) - (parseInt(crypto.totalCost) + parseInt(state.cost))

                
                
            },console.log( 
                (parseInt(crypto.totalCost) + parseInt(state.cost)) - ((parseInt(crypto.totalCoin) + parseInt(state.coins)) * crypto.currentPrice)
                 ))

    

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


            if(crypto.profitOrLoss === NaN || crypto.costBasis === NaN ){
               await updateRecord(crypto.id, {
                    transactions: [...crypto.transactions, state],
                    costBasis: 0,
                    profitOrLoss: 0
        
                    
               })
            }
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
                            value={state.coins}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            required
                            placeholder="Price"
                            type="number" min="1" step="any"
                            name="price"
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
