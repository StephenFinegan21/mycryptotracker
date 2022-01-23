import React from 'react'

import { useFirestore } from '../hooks/useFirestore'
import { Link } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';


const CryptoRow = ({ cryptoName, cryptoId, cryptoValue, cryptoProfit, logo }) => {
const {deleteRecord } = useFirestore('cryptos')
    
    return (
       <>
       <div className="crypto-row">
            <div className="logo-container">
                <img src={logo} className="crypto-logo" alt="crypto logo"></img>
            </div>
            <p><Link to={`transactions/${cryptoId}`}>
                    {cryptoName}
                </Link>
            </p>
                <p>{cryptoValue}</p>
                <p className={cryptoProfit >= 0 ? 'plus':'minus'}>{cryptoProfit ? cryptoProfit : 0}</p>
                <button className="delete-btn" onClick={() => deleteRecord(cryptoId)}><ClearIcon /></button>
            
        </div>
        </>
    )
}

export default CryptoRow
