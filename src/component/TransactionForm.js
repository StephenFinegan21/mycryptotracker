import React from 'react'
import { useFirestore } from '../hooks/useFirestore'
import { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { InputLabel } from '@mui/material';
import { FormControl } from '@mui/material';

//Pass in the selected Cryptocurrency as props
const TransactionForm = ({ crypto }) => {
    
    
    const { updateRecord , response } = useFirestore('cryptos')  //UseFirestore hook - for updating the transaction array records
    const [transactionState, setTransactionState] = useState({   //Stores a new transaction as state and gets added to the current crypto values
        date: "",
        coins: "",
        price: "",
        cost: "",
        type: "",
      })
    const [error, setError] = useState()
    
    const handleSelect = (option) =>{                       
        setTransactionState({
            ...transactionState,
            type: option.target.value
          });
    }

    /* 
    *   handleChange runs when user enters new value into form
    *   state is updated - evt.target.name is used to find the relevant field to update, value is the information to be passed in.
    */    
      const handleChange = async (evt) =>{
        const value = evt.target.value;
        setTransactionState({
          ...transactionState,
          [evt.target.name]: value
        });
    }

    /*
    *   Handles adding 'buy' transaction types to a cryptocurrencies records
    *   new transaction values (transactionState) is appended onto the transaction array
    *   Crypto values are updated with values taken from the new transactionState
    */
      const buyTransaction = async () =>{
        await updateRecord(crypto.id, {     //updateRecord takes 2 args - id of the crypto to update , values to update
                transactions: [...crypto.transactions, transactionState],
                totalCoin: (parseFloat(crypto.totalCoin) + parseFloat(transactionState.coins)).toFixed(5),
                totalCost: (parseFloat(crypto.totalCost) + parseFloat(transactionState.cost)).toFixed(5),
                costBasis: ((parseFloat(crypto.totalCost) + parseFloat(transactionState.cost)) / (parseFloat(crypto.totalCoin) + parseFloat(transactionState.coins))).toFixed(5),
                currentValue: ((parseFloat(crypto.totalCoin) + parseFloat(transactionState.coins)) * crypto.currentPrice).toFixed(5),
                profitOrLoss: (((parseFloat(crypto.totalCoin) + parseFloat(transactionState.coins)) * crypto.currentPrice) - (parseFloat(crypto.totalCost) + parseFloat(transactionState.cost))).toFixed(5),
            })
      }

      //Works the same as the 'buyTransaction' function above, except reduces the values rather than increases.
      const sellTransaction = async () =>{
        await updateRecord(crypto.id, {
            
            transactions: [...crypto.transactions, transactionState],
            totalCoin: (parseFloat(crypto.totalCoin) - parseFloat(transactionState.coins)).toFixed(5),
            totalCost: (parseFloat(crypto.totalCost) - parseFloat(transactionState.cost)).toFixed(5),
            costBasis: ((parseFloat(crypto.totalCost) - parseFloat(transactionState.cost)) / (parseFloat(crypto.totalCoin) - parseFloat(transactionState.coins))).toFixed(5),
            currentValue: ((parseFloat(crypto.totalCoin) - parseFloat(transactionState.coins)) * crypto.currentPrice).toFixed(5),
            profitOrLoss: ((((parseFloat(crypto.totalCoin) - parseFloat(transactionState.coins))) * crypto.currentPrice) - (parseFloat(crypto.totalCost) - parseFloat(transactionState.cost))).toFixed(4),
        })
       
      }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        //Handle Buy Transactions
        if(transactionState.type === 'Buy'){
           buyTransaction()
        }

        //Handle Sell Transactions
        else if(transactionState.type === 'Sell'){
            if((parseFloat(crypto.totalCoin) - parseFloat(transactionState.coins) < 0)){
                console.log('not enough coins')
                setError('not enough coins')
                    return
                }
            else{
                 sellTransaction()
                 
                }
        }
        else{
            alert('Choose either a Buy or Sell Transaction type')
        }
       
        //Reset the state if no errors
       if(!response.error){
        setTransactionState({
                   date: "",
                   coins: "",
                   price: "",
                   cost: "",
                   type: "",
                 })} 
        }


    return (
        <>
        <div className="transaction-form-container">
            <div className="transaction-form">
                <form onSubmit={handleSubmit}>
                    <div  className="form">
                        <div>
                            <LocalizationProvider 
                                dateAdapter={AdapterDateFns}
                                required
                                name="date"
                                value={transactionState.date}
                                onChange={handleChange}>
                            </LocalizationProvider>
                            <input 
                                type="date"
                                name="date"
                                value={transactionState.date}
                                onChange={handleChange}
                            />  
                        </div> 
                        <div>
                            <input
                                required
                                placeholder="Coins"
                                type="number"
                                name="coins"
                                min="0.00001"
                                step="0.00001"
                                value={transactionState.coins}
                                onChange={handleChange}
                                />
                        </div>
                        <div>
                            <input
                                required
                                placeholder="Price"
                                type="number" 
                                name="price"
                                min="0.00001"
                                step="0.00001"
                                value={transactionState.price}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                required
                                placeholder="Cost"
                                type="number"
                                name="cost"
                                min="0.00001"
                                step="0.00001"
                                value={transactionState.cost}
                                onChange={handleChange}
                            />
                        </div>
                    
                        <div>
                            <FormControl fullWidth>
                            <InputLabel 
                            id="select-label"
                            sx={{marginTop: '8%'}}
                            >Type</InputLabel>
                            <Select
                               sx={{height: '60px'}}
                                labelId="select-label"
                                id="select-label"
                                value={transactionState.type}
                                label="Type"
                                onChange={(e) => handleSelect(e)}
                                >
                            <MenuItem value={'Buy'}>Buy</MenuItem>
                            <MenuItem value={'Sell'}>Sell</MenuItem>
          
                            </Select>
                            </FormControl>
                        </div>
                    </div> 
                        {error && <p>{error}</p>}
                    <div className="btn-container">
                        <button type="submit" className="submit-btn" >Add Transaction</button>
                    </div>
                </form>
            </div>
        </div>
    </>
    )
}

export default TransactionForm
