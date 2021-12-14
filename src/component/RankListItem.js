import React from 'react'
import millify from 'millify'



const RankListItem = ( { name, logo, price, vol, change, cap, ath }) => {
    return (
        <>
        <div className="list-item">
        <img src={logo} className="image" alt="logo"></img>
        <p>{name}</p>
        
        <p>{millify(cap)}</p>
        <p>{millify(vol)}</p>
        <p>{millify(ath)}</p>
        <p className={change > -1 ? 'plus':'minus'}>{millify(change)}</p>
        <p>{millify(price)}</p>
        
        
        </div>
       
      </>
    )
}

export default RankListItem
