import React from 'react'
import bitcoin from '../assets/bitcoin-img.png';
import eth from '../assets/eth-img.png';
import { useFirestore } from '../hooks/useFirestore'
import { Link } from 'react-router-dom'

const CryptoRow = ({ cryptoName, cryptoId, cryptoValue, cryptoProfit }) => {
    const {deleteRecord } = useFirestore('cryptos')
    console.log(cryptoProfit)
    return (
       <>
        <tr>
            <td><img src={bitcoin} className="crypto-logo"></img></td>
            <td>{cryptoName} 
            <Link   to={`transactions/${cryptoId}`}   
                    style={{ textDecoration: 'none' }}


                    >go</Link></td>
            <td>{cryptoValue}</td>
            <td>{cryptoProfit}</td>
            <td><button onClick={() => deleteRecord(cryptoId)}>X</button></td>
            
        </tr>


       </>
    )
}

export default CryptoRow
