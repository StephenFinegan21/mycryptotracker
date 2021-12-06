import React from 'react'
import millify from 'millify'

const RankListItem = ( { name, cap, logo, price }) => {
    return (
        <>
        <div className="list-item">
        <img src={logo} className="image" alt="logo"></img>
        <p>{name}</p>
        <p>{millify(cap)}</p>
        <p>€{price}</p>
        </div>
      </>
    )
}

export default RankListItem
