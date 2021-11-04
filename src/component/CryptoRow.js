import React from 'react'
import bitcoin from '../assets/bitcoin-img.png';
import eth from '../assets/eth-img.png';

const CryptoRow = () => {
    return (
       <>
        <tr>
            <td><img src={bitcoin} className="crypto-logo"></img></td>
            <td>Bitcoin</td>
            <td>€100</td>
            <td>+40</td>
        </tr>
        <tr>
            <td><img src={eth} className="crypto-logo"></img></td>
            <td>Bitcoin</td>
            <td>€100</td>
            <td>+40</td>
        </tr>


       </>
    )
}

export default CryptoRow
