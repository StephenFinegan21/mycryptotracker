import React from 'react'
import CryptoRow from './CryptoRow'

const CryptoTable = () => {
    return (
        <div className="crypto-grid">
                <table>
                    <tr>
                        <th>Logo</th>
                        <th>Name</th>
                        <th>Value</th>
                        <th>Profit/Loss</th>
                    </tr>
                    <CryptoRow />

                </table>


            </div>
    )
}

export default CryptoTable
