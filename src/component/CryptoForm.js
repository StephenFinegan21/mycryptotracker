import React from 'react'
import { useState, useEffect } from 'react'
import { useFirestore } from '../hooks/useFirestore'

const CryptoForm = ({ userId }) => {
    const [cryptoName, setCryptoName] = useState('')
    const { addRecord , response } = useFirestore('cryptos')

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
               
            ]
        
        },
            
            )
         }

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
