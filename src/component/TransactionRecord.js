import React from 'react'

const TransactionRecord = ({date, coins, price, cost, type}) => {
    return (
       <>
            <div className="transaction-row">
                <p>{date}</p>
                <p>{coins}</p>
                <p>{cost}</p>
                <p>{price}</p>
                <p>{type}</p>
            </div>

        </>
        
    )
}

export default TransactionRecord
