import React from 'react'
import { useState, useEffect } from 'react'
import { useFirestore } from '../hooks/useFirestore'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Select from 'react-select'

const CryptoForm = ({ userId, docs }) => {

    const [cryptoName, setCryptoName] = useState('')        //For setting name of Crypto
    const [currentPrice, setCurrentPrice] = useState(0)        //For setting name of Crypto
    const [logo, setLogo] = useState(0)        //For setting name of Crypto
    const { addRecord , response } = useFirestore('cryptos')//access the hook that will allow to adda a new Crypto

    const { data } = useGetCryptosQuery(); //Gets Cryptodata from coinGecko API
    const cryptoList = []
     
    //Sets the cryptos that a user can add to their portfolio - list taken from coingecko api
     data && data.map(n => 
        cryptoList.push({value: n.name, label: n.name, currentPrice: n.current_price, logo: n.image}),
    )
    //Cryptos that have already been added by the user
    const existingCoins = (docs && docs.map(c => c.cryptoName))
   
    //Customstyle for react Select (Dropdown menu for picking crypto)
     const customStyles = {
        container:(provided, state) => ({
            ...provided,
            paddingTop: '2%',
            width : '60%',
            margin:'auto',
        }),
        option:(provided, state) => ({
            ...provided,
            width : '60%',
            margin:'auto',
            
        }),
        control:(provided, state) => ({
            ...provided,
            width : '60%',
            margin:'auto',
            placeholder:"test"
        }),
     }

     //Sets the current state for name, logo and CurrentPrice 
    const handleSelect = async (option) =>{
       setCryptoName(option.value)
        setCurrentPrice(option.currentPrice)
        setLogo(option.logo)
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        //Stops the function procedding if no crypto selected or if it is already added
        if(cryptoName === '' || existingCoins.includes(cryptoName)){
            return
        }

    /*  calls the useFirestore custom hook and creates a new record
        name, logo currentPrice and userid have all been set and are assigned to the new object
        everything else initialised at 0 
    */
        addRecord({
            cryptoName,
            logo: logo,
            uid: userId,
            totalCoin: 0,
            totalCost: 0,
            costBasis: 0,
            currentPrice: currentPrice,
            currentValue: 0,
            profitOrloss: 0,
            transactions: [
            //Initially the transaction arrray is empty
            ]},
            )
         }

    //If the crypto is added succesfully, reset the value to blank
    useEffect(() => {
        //console.log(response)
            setCryptoName('')
            setCurrentPrice('')
            setLogo('')
             
         }, [response])

        return (
        <>

            {data && 
            <div className="crypto-form-container">
            <form onSubmit = {handleSubmit}>
                
                <h3>Add a Crypto</h3>
                <Select
                    required
                    options={cryptoList}
                    onChange={(o) => handleSelect(o)}
                    styles={customStyles}
                />
                <input type="submit" className="submit-btn"/>
               
            </form>

            </div>
            }
         </>

    )
}

export default CryptoForm
