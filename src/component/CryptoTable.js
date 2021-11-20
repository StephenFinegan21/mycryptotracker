import React from 'react'
import CryptoRow from './CryptoRow'
import CryptoForm from './CryptoForm'
import { useAuthContext } from ".././hooks/useAuthContext"
import { useCollection } from ".././hooks/useCollection"


const CryptoTable = () => {
     const {user} = useAuthContext()
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
                    
                    />))}
                </table>
                <CryptoForm userId = {user.uid}/>


            </div>
    )
}

export default CryptoTable
