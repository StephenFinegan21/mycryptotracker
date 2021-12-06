import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RankListItem from '../component/RankListItem';


//API data
import { useGetCryptosQuery } from '../services/cryptoApi';



const Rankings = () => {

  
    
   
   
    const { data, isFetching } = useGetCryptosQuery();
 
  
    
    if (isFetching) return "Loading"; //Wait until data finishes loading
     console.log(data)   
    return (
    <>
    <div className="rank-container">
    <h2 >Cryptocurrencies</h2>
     <div className="list-item">
                
                        <p></p>
                        <p>Name</p>
                        <p>Market Cap</p>
                        <p>Current Price</p>
                    
       </div>  
      
         
        {data.map((coin) => (
          <RankListItem ListItem 
          key ={coin.id}
          name ={coin.name} 
          logo ={coin.image}
          cap={coin.market_cap}
          price={coin.current_price}>
        </RankListItem>
        ))}
        </div>
     </>
  );
};

export default Rankings
