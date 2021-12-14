import React from 'react'
import { useFirestore } from '../hooks/useFirestore'
import { useState } from 'react';
//import Select from 'react-select'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { InputLabel } from '@mui/material';
import { FormControl } from '@mui/material';



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

    




      const [error, setError] = useState()
      
      //To be used if allowing users to add 'sell' records
      
      
      const handleSelect = (option) =>{
        setState({
            ...state,
            type: option.target.value
          });
          
      }



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
        setError('')
        if(state.type === 'Buy'){

            //pass in the (1) crypto id and the (2) data to be updated
            await updateRecord(crypto.id, {
            
            //Current state - which is the last data to be entered into form is added into the transactions array
                transactions: [...crypto.transactions, state],
                totalCoin: (parseFloat(crypto.totalCoin) + parseFloat(state.coins)).toFixed(5),
                totalCost: (parseFloat(crypto.totalCost) + parseFloat(state.cost)).toFixed(5),
            },console.log(crypto.totalCoin))
            await updateRecord(crypto.id, {
                //Current state - which is the last data to be entered into form is added into the transactions array
                transactions: [...crypto.transactions, state],
                costBasis: ((parseFloat(crypto.totalCost) + parseFloat(state.cost)) / (parseFloat(crypto.totalCoin) + parseFloat(state.coins))).toFixed(5),
                currentValue: ((parseFloat(crypto.totalCoin) + parseFloat(state.coins)) * crypto.currentPrice).toFixed(5),
               
                
                
            },console.log('two'))
            await updateRecord(crypto.id, {
            
                transactions: [...crypto.transactions, state],
                profitOrLoss: (((parseFloat(crypto.totalCoin) + parseFloat(state.coins)) * crypto.currentPrice) - (parseFloat(crypto.totalCost) + parseFloat(state.cost))).toFixed(5),
            })

    

        }
        else if(state.type === 'Sell'){
            if((parseFloat(crypto.totalCoin) - parseFloat(state.coins) < 0)){
                console.log('not enough coins')
                setError('not enough coins')
                    return
                }
            
            else{

            await updateRecord(crypto.id, {
            
                //Current state - which is the last data to be entered into form is added into the transactions array
                transactions: [...crypto.transactions, state],

                totalCoin: (parseFloat(crypto.totalCoin) - parseFloat(state.coins)).toFixed(5),
                totalCost: (parseFloat(crypto.totalCost) - parseFloat(state.cost)).toFixed(5)
                
                
                
                
            })

            await updateRecord(crypto.id, {
            
                //Current state - which is the last data to be entered into form is added into the transactions array
                transactions: [...crypto.transactions, state],

                
                costBasis: ((parseFloat(crypto.totalCost) - parseFloat(state.cost)) / (parseFloat(crypto.totalCoin) - parseFloat(state.coins))).toFixed(5),
                currentValue: ((parseFloat(crypto.totalCoin) - parseFloat(state.coins)) * crypto.currentPrice).toFixed(5),
               
                
                
            })
            await updateRecord(crypto.id, {
            
                transactions: [...crypto.transactions, state],
                profitOrLoss: ((((parseFloat(crypto.totalCoin) - parseFloat(state.coins))) * crypto.currentPrice) - (parseFloat(crypto.totalCost) - parseFloat(state.cost))).toFixed(4),

                
                
            })
            
        }
        
        }
        else{
            alert('Choose either a Buy or Sell Transaction type')
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
        <div className="transaction-form-container">
            <div className="transaction-form">
                <form onSubmit={handleSubmit}>
                    <div  className="form">
                    <div>
                    <LocalizationProvider 
                    dateAdapter={AdapterDateFns}
                    required
                            
                            name="date"
                            value={state.date}
                            onChange={handleChange}
                            >
                    </LocalizationProvider>

                        <input 
                            
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
                            min="0.00001"
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
                            min="0.00001"
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
                            min="0.00001"
                            step="0.00001"
                            value={state.cost}
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
                               sx={{height: '80px'}}
                                labelId="select-label"
                                id="select-label"
                                value={state.type}
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
