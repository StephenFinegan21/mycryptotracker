import React from 'react'
import { useState } from 'react'

const CryptoForm = () => {
    const [cryptoName, setCryptoName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(cryptoName);
    }

    return (
        <>
            <div>
                <form onSubmit = {handleSubmit}>
                    
                    <input type="text" required onChange={(e) => setCryptoName(e.target.value)} value={cryptoName} />
                   
                </form>
            </div>
          


        </>
    )
}

export default CryptoForm
