import React from 'react'

const Metric = ({ type, title }) => {
    

    const setStyling = (name, value) =>{
        if(name === 'Profit/Loss' && value > 0){
            return 'plus'
        }
        else if(name === 'Profit/Loss' && value < 0){
            return 'minus'
        }
        else{
            return 'null'
        }
    }
    
    return (
        <div className="metric">
            <h4>{title}</h4>
            <p className={setStyling(title, type)}id={title.replaceAll(' ', '')}>{type}</p>
        </div>
    )
}

export default Metric
