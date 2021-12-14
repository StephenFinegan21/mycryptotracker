import {useState, React} from 'react'
import { useFirestore } from '../hooks/useFirestore'
import { useCollection } from ".././hooks/useCollection"
import { useAuthContext } from ".././hooks/useAuthContext"
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';


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
        const valueToDelete = (documents[cryptoIndex].transactions[index]) 
        console.log(valueToDelete)
        

        
        
        //New Array that will be shown once 'valueToDelete' is removed.
        const newArray = (documents[cryptoIndex].transactions.filter(n => {
            return n !== valueToDelete
        }))

       

            

       if(valueToDelete.type === 'Buy'){
        if(( parseFloat(documents[cryptoIndex].totalCoin) - parseFloat(valueToDelete.coins)) < 0){
            alert('Not enough coins remaining')
            
            
            
            //console.log(valueToDelete)
            return
            }
            else{
        updateRecord(id, {
            transactions: newArray,
            totalCoin: (parseFloat(documents[cryptoIndex].totalCoin) - parseFloat(valueToDelete.coins)).toFixed(5),
            totalCost: (parseFloat(documents[cryptoIndex].totalCost) - parseFloat(valueToDelete.cost)).toFixed(5) < 0? 0: ((parseFloat(documents[cryptoIndex].totalCost) - parseFloat(valueToDelete.cost)).toFixed(5)),
        })
        updateRecord(id, {
            transactions: newArray,
            costBasis: ((parseFloat(documents[cryptoIndex].totalCost) - parseFloat(valueToDelete.cost)) / (parseFloat(documents[cryptoIndex].totalCoin) - parseFloat(valueToDelete.coins))).toFixed(5),
            currentValue: ((parseFloat(documents[cryptoIndex].totalCoin) - parseFloat(valueToDelete.coins)) * parseFloat(documents[cryptoIndex].currentPrice)).toFixed(5),
        })
        updateRecord(id, {
            transactions: newArray,
            profitOrLoss : (((parseFloat(documents[cryptoIndex].totalCoin) - parseFloat(valueToDelete.coins)) * (documents[cryptoIndex].currentPrice))     -      ((parseFloat(documents[cryptoIndex].totalCoin) - parseFloat(valueToDelete.coins)) * (documents[cryptoIndex].costBasis))).toFixed(5),
        })
       }
    }
       
       else if(valueToDelete.type === 'Sell'){
           
           
           

           
        updateRecord(id, {
            transactions: newArray,
            totalCoin: (parseFloat(documents[cryptoIndex].totalCoin) + parseFloat(valueToDelete.coins)).toFixed(5) ,
            totalCost: (parseFloat(documents[cryptoIndex].totalCost) + parseFloat(valueToDelete.cost)).toFixed(5)
        })
        updateRecord(id, {
            transactions: newArray,
            costBasis: ((parseFloat(documents[cryptoIndex].totalCost)) / (parseFloat(documents[cryptoIndex].totalCoin))).toFixed(5), 
            currentValue: ((parseFloat(documents[cryptoIndex].totalCoin)) * parseFloat(documents[cryptoIndex].currentPrice)).toFixed(5)
        })
        updateRecord(id, {
            transactions: newArray,
            profitOrLoss : (((parseFloat(documents[cryptoIndex].totalCoin)) * (documents[cryptoIndex].currentPrice))     -      ((parseFloat(documents[cryptoIndex].totalCoin)) * (documents[cryptoIndex].costBasis))).toFixed(5)  
        })
        } 
       
    

       
}



    return (
       <>
            <div className="transaction-row">
                <p>{date}</p>
                <p className={type === 'Buy' ? 'plus':'minus'}>{coins}</p>
                <p>€{price}</p>
                <p>€{cost}</p>
                <p className={type === 'Buy' ? 'plus':'minus'}>{type}</p>
                
                
                <button onClick = {() => handleDelete(id, index)} className="delete-btn"><ClearIcon/></button>
            </div>
            
        </>
        
    )
}

export default TransactionRecord
