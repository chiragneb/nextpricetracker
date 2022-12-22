import React from 'react';
import styles from './Coin.module.css';

const Coin = ({ name, image, symbol, price, volume, priceChange, marketCap, marketCapRank, Ath}) => {
    return (
        <>
            <tr className="coinRow">
            <td data-label="Coin"><img src={image} alt="cryptoCoin" class={styles.coinImage}></img></td>
            <td data-label="Name">{name}</td>
            <td data-label="Symbol">{symbol.toUpperCase()}</td>
            <td data-label="Price">${price.toLocaleString()}</td>
            {
                (priceChange < 0) ?
                (<td data-label="Price Change Percentage" className={styles.loss}>{priceChange.toFixed(2)}%</td>) : 
                (<td data-label="Price Change Percentage" className={styles.gain}>+{priceChange.toFixed(2)}%</td>)
            }
            <td data-label="Market Cap Rank">{marketCapRank}</td>
            <td data-label="Market Cap">{marketCap.toLocaleString()}</td>
            <td data-label="Volume">{volume.toLocaleString()}</td>
            <td data-label="Ath">{Ath.toLocaleString}</td>
            </tr>
            </>
    )
}

export default Coin;