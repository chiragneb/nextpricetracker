import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
//import "./CoinTable.css";
import Coin from "../components/Coin";
//import { coinPassed } from "../CoinSearch/CoinSearch";


const CoinTable = () => {
    const [coins, setCoins] = useState([]);
  //  const passedCoinName = useContext(coinPassed);

    useEffect(() => {
        axios
          .get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false"
          )
          .then((response) => {
            setCoins(response.data);
          })
          .catch((error) => {
            alert(error.message);
          });
      }, []);

        const filteredCoins = coins.filter(coin => 
            coin.name.toLowerCase()//.includes(passedCoinName.toLowerCase()) //|| 
        //    coin.symbol.toLowerCase().includes(passedCoinName.toLowerCase())
            );

            return (
                <>
                <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400" >
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">Coin</th>
                    <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">Name</th>
                    <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">Ticker</th>
                    <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">Price (USD)</th>    
                    <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">Price Change Percentage</th>
                    <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">Market Cap Rank</th>
                    <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">Market Cap (USD)</th>
                    <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">Volume (USD)</th>
                    <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">All time High (USD)</th>
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
                      priceChange = {coin.price_change_percentage_24h}
                      volume = {coin.total_volume}
                      marketCap = {coin.market_cap}
                      marketCapRank = {coin.market_cap_rank}
                      Ath = {coin.ath}
                      />;
                    })}
                    </tbody>
                  </table>
                  </div>
                </>
              );
            };

export default CoinTable;
