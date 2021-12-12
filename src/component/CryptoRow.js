import React from 'react'

import { useFirestore } from '../hooks/useFirestore'
import { Link } from 'react-router-dom'

const CryptoRow = ({ cryptoName, cryptoId, cryptoValue, cryptoProfit, logo }) => {
    const {deleteRecord } = useFirestore('cryptos')
    
    return (
       <>
       
        <tr>
            <td><img src={logo} className="crypto-logo" alt="crypto logo"></img></td>
            <td>
                <Link   to={`transactions/${cryptoId}`}   
                        style={{ textDecoration: 'none', margin:'auto', color:'#222D41' }}>
                        {cryptoName}</Link> </td>
            <td>{cryptoValue}</td>
            <td>{cryptoProfit}</td>
            <td><button className="delete-btn" onClick={() => deleteRecord(cryptoId)}>X</button></td>
            
        </tr>


       </>
    )
}

export default CryptoRow
