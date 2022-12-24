/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Coin = ({ name, image, symbol, price, volume, OneHr, TwoFourHr, SevenDays, marketCap, marketCapRank, Ath}) => {
    return (
        <>
        <tr className="bg-gray-200">
           <td data-label="Coin" className="text-center"><img src={image} alt="cryptoCoin" className="object-fill h-10 w-10 rounded-full"></img></td>
            <td data-label="Name" className="text-center">{name}</td>
            <td data-label="Symbol" className="text-center">{symbol.toUpperCase()}</td>
            <td data-label="Price" className="text-center">${price.toLocaleString()}</td>
            {
                (OneHr < 0) ?
                (<td data-label="Price Change Percentage" className= "text-center text-red-600" >{OneHr.toFixed(2)}%</td>) : 
                (<td data-label="Price Change Percentage" className= "text-center text-green-600" >+{OneHr.toFixed(2)}%</td>)
            }
            {
                (TwoFourHr < 0) ?
                (<td data-label="Price Change Percentage" className= "text-center text-red-600" >{TwoFourHr.toFixed(2)}%</td>) : 
                (<td data-label="Price Change Percentage" className= "text-center text-green-600" >+{TwoFourHr.toFixed(2)}%</td>)
            }
            {
                (SevenDays < 0) ?
                (<td data-label="Price Change Percentage" className= "text-center text-red-600" >{SevenDays.toFixed(2)}%</td>) : 
                (<td data-label="Price Change Percentage" className= "text-center text-green-600" >+{SevenDays.toFixed(2)}%</td>)
            }
            <td data-label="Market Cap Rank" className="text-center">{marketCapRank}</td>
            <td data-label="Market Cap" className="text-center">{marketCap.toLocaleString()}</td>
            <td data-label="Volume" className="text-center">{volume.toLocaleString()}</td>
            <td data-label="Ath" className="text-center">${Ath.toLocaleString()}</td>
            </tr>
            </>
    )
}

export default Coin;