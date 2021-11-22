import {useState} from 'react'
import { useLocation} from 'react-router-dom'
import { useCollection } from ".././hooks/useCollection"
import { useAuthContext } from ".././hooks/useAuthContext"



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
  
    
    return (
        
        
        <div>
            
        
         <p>{documents && documents[index].cryptoName}</p>
         <p>{documents && documents[index].totalCost}</p>
         <p>{documents && documents[index].costBasis}</p>
         <p>{documents && documents[index].currentPrice}</p>
         <p>{documents && documents[index].currentValue}</p>
         <p>{documents && documents[index].profitOrloss}</p>

          
        </div>
    )
    }
    


export default TransactionPage
