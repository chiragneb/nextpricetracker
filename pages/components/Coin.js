/* eslint-disable @next/next/no-img-element */
import React from 'react';
//import styles from './Coin.module.css';

const Coin = ({ name, image, symbol, price, volume, priceChange, marketCap, marketCapRank, Ath}) => {
    return (
        <>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
           <td data-label="Coin" class="py-4 px-6"><img src={image} alt="cryptoCoin" class="h-10 w-10 rounded-full"></img></td>
            <td data-label="Name" class="py-4 px-6">{name}</td>
            <td data-label="Symbol" class="py-4 px-6">{symbol.toUpperCase()}</td>
            <td data-label="Price" class="py-4 px-6">${price.toLocaleString()}</td>
            {
                (priceChange < 0) ?
                (<td data-label="Price Change Percentage" class="py-4 px-6 text-red-600">{priceChange.toFixed(2)}%</td>) : 
                (<td data-label="Price Change Percentage" class="py-4 px-6 text-green-600">+{priceChange.toFixed(2)}%</td>)
            }
            <td data-label="Market Cap Rank" class="py-4 px-6">{marketCapRank}</td>
            <td data-label="Market Cap" class="py-4 px-6">{marketCap.toLocaleString()}</td>
            <td data-label="Volume" class="py-4 px-6">{volume.toLocaleString()}</td>
            <td data-label="Ath" class="py-4 px-6">{Ath.toLocaleString()}</td>
            </tr>
            </>
    )
}

export default Coin;