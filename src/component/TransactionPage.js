import {useState} from 'react'
import { useLocation} from 'react-router-dom'
import { useCollection } from ".././hooks/useCollection"
import { useAuthContext } from ".././hooks/useAuthContext"
import TransactionForm from './TransactionForm'
import Metric from './Metric'
import TransactionRecord from './TransactionRecord'



const TransactionPage = () => {

    const location = useLocation().pathname.split('/')
    const locationId = location[location.length-1]
    
   

    const {user} = useAuthContext()

    const {documents, error} = useCollection(
        'cryptos',
        ["uid", "==", user.uid ])
    
    const [currentCrypto, setCurrentCrypto] = useState()
  //  const [loading, setLoading] = useState(false);
    
  const index = documents && documents.findIndex( (element) => element.id === locationId);
  //console.log(documents && documents[index].transactions)
    

  
    return (
        
        
        
       
            <>  
             {documents && 
             <>
                <div className="metric-container">
                <Metric type = {documents[index].cryptoName } title="Name" />
                <Metric type = {documents[index].totalCoin} title="Total Coins"/>
                <Metric type = {documents[index].totalCost} title="Total Cost"/>
                <Metric type = {documents[index].costBasis} title="Cost Basis"/>
                <Metric type = {documents[index].currentPrice} title="Current Price"/>
                <Metric type = {documents[index].currentValue} title="Current Value"/>
                <Metric type = {documents[index].profitOrloss} title="Profit/Loss"/>
                </div>
                <div className="transaction-grid">
             
                {
                   documents[index].transactions.map(m =>
                    <TransactionRecord 
                    date = {m.date} 
                    coins = {m.coins}
                    price = {m.coins}
                    cost = {m.coins}
                    type = {m.type}
                    />
                   )
                }
                {documents && <TransactionForm id = {documents[index]} /> }
                
                </div>
            </>
            
            }
            
            
            
            
            </>
     


            
           
            
            
        
        

        

          
       
    )
    }

   
  
  
      
    


export default TransactionPage
