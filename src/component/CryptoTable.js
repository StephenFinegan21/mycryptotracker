import React from 'react'
import CryptoRow from './CryptoRow'
import CryptoForm from './CryptoForm'
import { useAuthContext } from ".././hooks/useAuthContext"
import { useCollection } from ".././hooks/useCollection"



const CryptoTable = () => {
     const {user} = useAuthContext()    //Current signed in user

     //Gets the 'cryptos' data that belongs to the current signed in user
     const {documents, error} = useCollection(
         'cryptos',
         ["uid", "==", user.uid ])

        //Capitalise
         const userName = user.displayName.charAt(0).toUpperCase() + user.displayName.slice(1);
        
    return (
        <>
        
        <div className="crypto-grid">
        <h1 style={{textAlign:'left', paddingLeft:'70px'}}>{userName}'s Dashboard</h1>
                  
                    {error && <p>error</p>}
                    {documents && documents.map((crypto) => ( 
                    <CryptoRow 
                        key={crypto.id}
                        cryptoName = {crypto.cryptoName}
                        cryptoId = {crypto.id}
                        cryptoValue = {crypto.currentValue}
                        cryptoProfit = {crypto.profitOrLoss}
                        logo = {crypto.logo}
                    />))}
                
                <CryptoForm 
                
                userId = {user.uid}
                docs = {documents}/>
        </div>
    </>
    )
}

export default CryptoTable
