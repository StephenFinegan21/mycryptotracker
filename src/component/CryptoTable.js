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

    return (
        <div className="crypto-grid">
                <table>
                    <tr>
                        <th>Logo</th>
                        <th>Name</th>
                        <th>Value</th>
                        <th>Profit/Loss</th>
                    </tr>
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
                </table>
                <CryptoForm 
                userId = {user.uid}
                docs = {documents}/>
        </div>
    )
}

export default CryptoTable
