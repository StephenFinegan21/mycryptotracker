import React from 'react'
import { useFirestore } from '../hooks/useFirestore'
import { useCollection } from ".././hooks/useCollection"
import { useAuthContext } from ".././hooks/useAuthContext"

const TransactionRecord = ({ cryptoIndex, id, index, date, coins, price, cost, type}) => {

    const {user} = useAuthContext()
    const {documents, error} = useCollection(
        'cryptos',
        ["uid", "==", user.uid ])
    
    const { updateRecord , response } = useFirestore('cryptos')

    const handleDelete = async (id, index) => {

        /* 
        Store the transaction to be deleted in 'valueToDelete'
        'index' is a prop passed into this component - holds the index position of each transactionrecord
        use splice to seperate the current index from rest of array
        */
        const valueToDelete = (documents[cryptoIndex].transactions.splice(index, 1)) 
        
        //New Array that will be shown once 'valueToDelete' is removed.
        const newArray = (documents[cryptoIndex].transactions.filter(n => {
            return n != valueToDelete
        }))

       //if(valueToDelete[0].type === 'Buy'){
        updateRecord(id, {
            
            transactions: newArray,
            totalCoin: [parseInt(documents[cryptoIndex].totalCoin) - parseInt(valueToDelete[0].coins)],
            totalCost: [parseInt(documents[cryptoIndex].totalCost) - parseInt(valueToDelete[0].cost)],
            costBasis: [(parseInt(documents[cryptoIndex].totalCost) - parseInt(valueToDelete[0].cost)) / (parseInt(documents[cryptoIndex].totalCoin) - parseInt(valueToDelete[0].coins))],
            currentValue: [(parseInt(documents[cryptoIndex].totalCoin) - parseInt(valueToDelete[0].coins)) * parseInt(documents[cryptoIndex].currentValue)],
            profitOrLoss: [(parseInt(documents[cryptoIndex].totalCoin) - parseInt(valueToDelete[0].coins)) * parseInt(documents[cryptoIndex].currentValue)] - ([(parseInt(documents[cryptoIndex].totalCost) - parseInt(valueToDelete[0].cost)) / (parseInt(documents[cryptoIndex].totalCoin) - parseInt(valueToDelete[0].coins))] )
        })
       //}
       /*
       else if(valueToDelete[0].type === 'Sell'){
        updateRecord(id, {
            
            transactions: newArray,
            totalCoin: [parseInt(documents[cryptoIndex].totalCoin) + parseInt(newValue[0].coins)],
            totalCost: [parseInt(documents[cryptoIndex].totalCost) + parseInt(newValue[0].cost)],
            costBasis: [(parseInt(documents[cryptoIndex].totalCost) + parseInt(newValue[0].cost)) / (parseInt(documents[cryptoIndex].totalCoin) + parseInt(newValue[0].coins))],
            currentValue: [(parseInt(documents[cryptoIndex].totalCoin) + parseInt(newValue[0].coins)) * parseInt(documents[cryptoIndex].currentValue)]
        })
       }
       */
    }

    

    return (
       <>
            <div className="transaction-row">
                <p>{date}</p>
                <p>{coins}</p>
                <p>€{cost}</p>
                <p>{price}</p>
                <p>{type}</p>
                <button onClick = {() => handleDelete(id, index)}>X</button>
            </div>

        </>
        
    )
}

export default TransactionRecord
