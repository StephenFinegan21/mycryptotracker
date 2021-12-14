import {React, useState} from 'react'
import RankListItem from '../component/RankListItem';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { InputLabel } from '@mui/material';
import { FormControl } from '@mui/material';


//API data
import { useGetCryptosQuery } from '../services/cryptoApi';



const Rankings = () => {

  const [currentMetric, setCurrentMetric] = useState('')

  const handleSelect = (e) => {
    setCurrentMetric(e)
  }
    
   
   
    const { data, isFetching } = useGetCryptosQuery();
 
  
    
    if (isFetching) return "Loading"; //Wait until data finishes loading
     
    
     let sorted = [...data]
     sorted = sorted.sort((a, b ) =>  b[currentMetric] - a[currentMetric])
      
      
    return (
    <>
    <div className="rank-container">
    <h2 >Crypto Markets</h2>
    <div className="ranking-select-container">
    <FormControl fullWidth>
                            <InputLabel 
                            id="select-label"
                            sx={{fontSize:16, fontWeight:400}}
                            >Sort By</InputLabel>
                            <Select
                               sx={{height: '40px'}}
                                labelId="select-label"
                                id="select-label"
                               onChange = {(e) => handleSelect(e.target.value)}
                                label="Type"
                               
                                >
                            <MenuItem value={'ath'}>Ath</MenuItem>
                            <MenuItem value={'current_price'}>price</MenuItem>
                            <MenuItem value={'total_volume'}>volume</MenuItem>
                            <MenuItem value={'price_change_24h'}>price change</MenuItem>
                            <MenuItem value={'market_cap'}>market cap</MenuItem>
          
                            </Select>
                        </FormControl>
                        </div> 
     <div className="list-item">
                
                        <p></p>
                        <p>Name</p>
                        <p>Market Cap</p>
                        <p>Total Volume</p>
                        <p>All time high</p>
                        <p>24h Price change</p>
                        <p>Current Price</p>
                    
       </div> 
       
       
        {sorted.map((coin) => (
          <RankListItem ListItem 
          key ={coin.id}
          name ={coin.name} 
          logo ={coin.image}
          ath={coin.ath}
          vol={coin.total_volume}
          change={coin.price_change_24h}
          cap={coin.market_cap}
          price={coin.current_price}
          >
        </RankListItem>
        ))}
        </div>
     </>
  );
};

export default Rankings
