import React from 'react'
import { useFirestore } from '../hooks/useFirestore'
import { useCollection } from ".././hooks/useCollection"
import { useAuthContext } from ".././hooks/useAuthContext"
import { useEffect } from 'react'

const TransactionRecord = ({ cryptoIndex, id, index, date, coins, price, cost, type}) => {

    const {user} = useAuthContext()
    const {documents} = useCollection(
        'cryptos',
        ["uid", "==", user.uid ])
    
    const { updateRecord  } = useFirestore('cryptos')
    //documents && console.log("price is " + (documents[cryptoIndex].currentPrice))

    const handleDelete = async (id, index) => {
        
        /* 
        Store the transaction to be deleted in 'valueToDelete'
        'index' is a prop passed into this component - holds the index position of each transactionrecord
        use splice to seperate the current index from rest of array
        */
        const valueToDelete = (documents[cryptoIndex].transactions.splice(index, 1)) 
        
        //New Array that will be shown once 'valueToDelete' is removed.
        const newArray = (documents[cryptoIndex].transactions.filter(n => {
            return n !== valueToDelete
        }))

       //if(valueToDelete[0].type === 'Buy'){
        updateRecord(id, {
            transactions: newArray,
            totalCoin: [parseFloat(documents[cryptoIndex].totalCoin) - parseFloat(valueToDelete[0].coins)],
            totalCost: [parseFloat(documents[cryptoIndex].totalCost) - parseFloat(valueToDelete[0].cost)],
        })
        updateRecord(id, {
            transactions: newArray,
            costBasis: (parseFloat(documents[cryptoIndex].totalCost) - parseFloat(valueToDelete[0].cost)) / (parseFloat(documents[cryptoIndex].totalCoin) - parseFloat(valueToDelete[0].coins)),
            currentValue: [(parseFloat(documents[cryptoIndex].totalCoin) - parseFloat(valueToDelete[0].coins)) * parseFloat(documents[cryptoIndex].currentValue)],
        })
        updateRecord(id, {
            transactions: newArray,
            profitOrLoss : ((parseFloat(documents[cryptoIndex].totalCoin) - parseFloat(valueToDelete[0].coins)) * (documents[cryptoIndex].currentPrice))     -      ((parseFloat(documents[cryptoIndex].totalCoin) - parseFloat(valueToDelete[0].coins)) * (documents[cryptoIndex].costBasis)) 
        }, console.log(
            isNaN((parseFloat(documents[cryptoIndex].totalCost) - parseFloat(valueToDelete[0].cost)) / 0 ),
        ))
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

       if(documents && isNaN(documents[cryptoIndex].costBasis)){
        updateRecord(id, {
            transactions: newArray,
            costBasis : 0 
        })
    }
    
    

    }



    return (
       <>
            <div className="transaction-row">
                <p>{date}</p>
                <p>{coins}</p>
                <p>€{price}</p>
                <p>€{cost}</p>
    
                <button onClick = {() => handleDelete(id, index)} className="delete-btn">X</button>
            </div>

        </>
        
    )
}

export default TransactionRecord
