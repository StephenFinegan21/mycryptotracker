
import { useLocation} from 'react-router-dom'
import { useCollection } from ".././hooks/useCollection"
import { useAuthContext } from ".././hooks/useAuthContext"
import TransactionForm from './TransactionForm'
import Metric from './Metric'
import TransactionRecord from './TransactionRecord'




const TransactionPage = () => {

    //The id of the Current Crypto that is in the Route
    const location = useLocation().pathname.split('/') 
    const locationId = location[location.length-1]

    let count = -1
    const {user} = useAuthContext()

    const {documents} = useCollection(
        'cryptos',
        ["uid", "==", user.uid ])
    
    /*
    position of the crypto the user selects is stored in the variable 'index'
    1. searches through the document that contains all the cryptos (documents)
    2. compares the id of each crypt in the array to the id that is in the current route path (locationId)
    3. If a match stores the index of the match in 'index */
    const index = documents && documents.findIndex( (element) => element.id === locationId);
    //console.log(documents && documents[index].transactions)

  
    return (<>  
             {documents && 
             <>
             <div className="metric-container">
                 <div className="crypto-name-container">
                    <h4>My {documents[index].cryptoName } </h4>
                    <img src = {documents[index].logo} className="image" alt="crypto logo" />
                </div>
                <div className="stat-container">
                    <Metric type = {documents[index].totalCoin} title="Total Coins"/>
                    <Metric type = {documents[index].totalCost} title="Total Cost"/>
                    <Metric type = {isNaN(documents[index].costBasis) ? 0:documents[index].costBasis} title="Cost Basis"/>
                    <Metric type = {documents[index].currentPrice} title="Current Price"/>
                    <Metric type = {documents[index].currentValue} title="Current Value"/>
                    <Metric type = {documents[index].profitOrLoss} title="Profit/Loss"/>
                </div>
            </div>
            <div className="container">
                <div className="transaction-grid">
                    <h3>Transaction History</h3>
                    <div className="transaction-row">
                        <p >Purchase Date</p>
                        <p >Coins Purchased</p>
                        <p >Purchase Price</p>
                        <p >Total Cost</p>
                        <p >Transaction Type</p>
                    </div>
            
                {
                documents[index].transactions.map(m =>
                    <TransactionRecord 
                        cryptoIndex ={index}
                        id={documents[index].id}
                        index = {count += 1}
                        date = {m.date} 
                        coins = {m.coins}
                        cost = {m.cost}
                        price = {m.price}
                        type={m.type}
                        
                    />)
                }
                {documents && <TransactionForm crypto = {documents[index]} /> }
                </div>
            </div>
            </>
            }
        </>
     


            
           
            
            
        
        

        

          
       
    )
    }

   
  
  
      
    


export default TransactionPage
