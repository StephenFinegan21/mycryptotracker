import React from 'react'
import bitcoin from '../assets/bitcoin-img.png';
import eth from '../assets/eth-img.png';
import { useFirestore } from '../hooks/useFirestore'

const CryptoRow = ({ cryptoName, cryptoId }) => {
    const {deleteRecord } = useFirestore('cryptos')
    
    return (
       <>
        <tr>
            <td><img src={bitcoin} className="crypto-logo"></img></td>
            <td>{cryptoName}</td>
            <td>€100</td>
            <td>+40</td>
            <td><button onClick={() => deleteRecord(cryptoId)}>X</button></td>
            
        </tr>


       </>
    )
}

export default CryptoRow
