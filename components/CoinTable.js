import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import Coin from "./Coin";
import { coinPassed } from "./CoinSearch";

const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&price_change_percentage=1h,24h,7d&sparkline=true";

const CoinTable = () => {
    const [coins, setCoins] = useState([]);
    const passedCoinName = useContext(coinPassed);


    useEffect(() => {
        axios
          .get(url)
          .then((response) => {
            setCoins(response.data);
          })
          .catch((error) => {
            alert(error.message);
          });
      }, []);

        const filteredCoins = coins.filter(coin => 
            coin.name.toLowerCase().includes(passedCoinName.toLowerCase()) || 
            coin.symbol.toLowerCase().includes(passedCoinName.toLowerCase())
            );
        
        

            return (
                <>
                  <table className="table-auto border-separate border border-black-50" >
                  <thead>
                  <tr>
                    <th>Rank</th>
                    <th>-</th>
                    <th>Name</th>
                    <th>Ticker</th>
                    <th>Price (USD)</th>    
                    <th>1hr%</th>
                    <th>24hr%</th>
                    <th>7d%</th>
                    <th>Market Cap</th>
                    <th>Volume 24h</th>
                    <th>ATH ($)</th>
                    <th>7D Spark</th>
                  </tr>
                  </thead>
                    <tbody>
                    {filteredCoins.map((coin) => {
                      return <Coin 
                      key = {coin.id} 
                      name = {coin.name} 
                      image = {coin.image}
                      symbol = {coin.symbol}
                      price = {coin.current_price}
                      OneHr = {coin.price_change_percentage_1h_in_currency}
                      TwoFourHr={coin.price_change_percentage_24h_in_currency}
                      SevenDays={coin.price_change_percentage_7d_in_currency}
                      volume = {coin.total_volume}
                      marketCap = {coin.market_cap}
                      marketCapRank = {coin.market_cap_rank}
                      Ath = {coin.ath}
                      Spark = {coin.sparkline_in_7d.price}
                      />;
                    })}
                    </tbody>
                  </table>
             
                </>
              );
            };


export default CoinTable;
