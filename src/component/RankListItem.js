import React from 'react'
import millify from 'millify'

/*
{metric === 'total_volume' ? <p>€ {vol} </p> :null}
        {metric === 'price_change_24h' ? <p>€ {price} </p> :null}
        {metric === 'market_cap' ? <p>€ {cap} </p> :null}
        {metric === 'ath' ? <p>€ {ath} </p> :null}
        </div>*/

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
