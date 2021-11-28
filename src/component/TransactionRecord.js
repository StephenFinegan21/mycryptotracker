import React from 'react'
import { useFirestore } from '../hooks/useFirestore'
import { useCollection } from ".././hooks/useCollection"
import { useAuthContext } from ".././hooks/useAuthContext"

const TransactionRecord = ({ cryptoIndex, id, index, date, coins, price, cost, type}) => {

    const {user} = useAuthContext()
    const {documents, error} = useCollection(
        'cryptos',
        ["uid", "==", user.uid ])
    
   // const currentData = documents[cryptoIndex].cryptoName

  

    //const { updateRecord , response } = useFirestore('cryptos')
    const { updateRecord , response } = useFirestore('cryptos')

    const handleDelete = async (id, index) => {

        const newValue = (documents[cryptoIndex].transactions.splice(index, 1))
        

        const newArray = (documents[cryptoIndex].transactions.filter(n => {
            return n != newValue
        }))

        console.log(newArray)

        updateRecord(id, {
            
            transactions: newArray,
       
            
        })

        
    

       
    }

    //console.log(documents && documents[cryptoIndex].transactions)
/*
    documents && documents[cryptoIndex].filter(m => {
        console.log(m.id !== id)
    })
*/
    return (
       <>
            <div className="transaction-row">
                <p>{date}</p>
                <p>{coins}</p>
                <p>{cost}</p>
                <p>{price}</p>
                <p>{type}</p>
                <button onClick = {() => handleDelete(id, index)}>X</button>
            </div>

        </>
        
    )
}

export default TransactionRecord
