import React from 'react'
import { useState, useEffect } from 'react'
import { useFirestore } from '../hooks/useFirestore'

const CryptoForm = ({ userId }) => {

    const [cryptoName, setCryptoName] = useState('')        //For setting name of Crypto
    const { addRecord , response } = useFirestore('cryptos')//access the hook that will allow to adda a new Crypto

    const handleSubmit = (e) => {
        e.preventDefault()
        addRecord({
            cryptoName,
            uid: userId,
            totalCoin: 0,
            totalCost: 0,
            costBasis: 0,
            currentPrice: 0,
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
            <div>
                <form onSubmit = {handleSubmit}>
                    <input type="text" required onChange={(e) => setCryptoName(e.target.value)} value={cryptoName} />
                </form>
            </div>
         </>
    )
}

export default CryptoForm
