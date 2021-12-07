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

    const { data } = useGetCryptosQuery();

    
     const cryptoList = []
     
     data && data.map(n => 
        cryptoList.push({value: n.name, label: n.name, currentPrice: n.current_price, logo: n.image}),
         
     )

    const existingCoins = (docs && docs.map(c => c.cryptoName))
   
   
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

    
      

    const handleSelect = async (option) =>{
       
       setCryptoName(option.value)
        setCurrentPrice(option.currentPrice)
        setLogo(option.logo)
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(cryptoName === '' || existingCoins.includes(cryptoName)){
            return
        }
        
       

        
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
        console.log(response)
             
                 
                 setCryptoName('')
                 setCurrentPrice('')
                setLogo('')
             
         }, [response])

        

    return (
        <>

            {data && 
            <div>
            <form onSubmit = {handleSubmit}>
            <input type="submit" className="add-crypto-btn" />
                <Select
                    required
                    options={cryptoList}
                    onChange={(o) => handleSelect(o)}
                    styles={customStyles}
                   
                    
                     
                />
                
            </form>

            </div>
            }
         </>

    )
}

export default CryptoForm
