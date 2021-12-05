import React from 'react'
import { Switch, Route } from 'react-router-dom'


//API data
import { useGetCryptosQuery } from '../services/cryptoApi';



const Rankings = () => {
   
    const { data, isFetching } = useGetCryptosQuery();
  
    
    if (isFetching) return "Loading"; //Wait until data finishes loading
     console.log(data)   
    return (
    <>
    <div className="container">
        <p>Rankings</p>
    </div>   
    </>
  );
};

export default Rankings
