import React from 'react'
import { useState, useEffect } from 'react'
import { useFirestore } from '../hooks/useFirestore'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Select from 'react-select'

const CryptoForm = ({ userId }) => {

    
    const [cryptoName, setCryptoName] = useState('')        //For setting name of Crypto
    const [currentPrice, setCurrentPrice] = useState(0)        //For setting name of Crypto
    const { addRecord , response } = useFirestore('cryptos')//access the hook that will allow to adda a new Crypto

    const { data, isFetching } = useGetCryptosQuery();

    
     const cryptoList = []
     
     data && data.map(n => 
        
           cryptoList.push({value: n.name, label: n.name, currentPrice: n.current_price}),
         
     )
     //console.log(cryptoList)

    
      //To be used if allowing users to add 'sell' records

    const handleSelect = async (option) =>{
       
       setCryptoName(option.value)
        setCurrentPrice(option.currentPrice)
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        addRecord({
            cryptoName,
            uid: userId,
            totalCoin: 0,
            totalCost: 0,
            costBasis: 0,
            currentPrice: currentPrice,
            currentValue: 0,
            profitOrloss: 0,
            transactions: [
            //Initially the transaction arrray is empty
            ]},
            )
         }

    //If the crypto is added succesfully, reset the value to blank
    useEffect(() => {
             if(response.success){
                 setCryptoName('')
             }
         }, [response.success])

        

    return (
        <>

            {data && 
            <div>
            <form onSubmit = {handleSubmit}>
                <Select
                    options={cryptoList}
                    onChange={(o) => handleSelect(o)} 
                />
                <input type="submit" />
            </form>

            </div>
            }
         </>

    )
}

export default CryptoForm
