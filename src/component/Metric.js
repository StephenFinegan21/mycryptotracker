import React from 'react'

const Metric = ({ type, title }) => {
    return (
        <div className="metric">
            <h4>{title}</h4>
            <p>{type}</p>
        </div>
    )
}

export default Metric
