import React from 'react'
import CryptoRow from './CryptoRow'
import CryptoForm from './CryptoForm'

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
                <CryptoForm />


            </div>
    )
}

export default CryptoTable
