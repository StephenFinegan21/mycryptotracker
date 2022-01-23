import React from 'react'


const Metric = ({ type, title }) => {
    
    if(type === undefined || !isFinite(type)){
        console.log(type)
        type = 0
    }

    const setStyling = (title, type) =>{
       
        if(title === 'Profit/Loss' && type > 0){
            return 'plus'
        }
        else if(title === 'Profit/Loss' && type < 0){
            return 'minus'
        }
        else{
            return 'null'
        }
}
//console.log(type + title)

const formatValues = (type, title) =>{
    let includeEuro = false
    let round = false

    

    if(type % 1 === 0){
        round = true
        
    }
    if(title !== 'Total Coins'){
        includeEuro = true
    }
    if(includeEuro && round) {
        return '€ ' + Math.round(type)}
    else if(includeEuro) {
        return '€ ' + type}
    else if(round){
        return Math.round(type)}
    else return type
   
}
    
    return (
        <div className="metric">
            <h4>{title}</h4>
            <p className={setStyling(title, type)}id={title.replaceAll(' ', '')}>{formatValues(type)}</p>
        </div>
    )
}

export default Metric
