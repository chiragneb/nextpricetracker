import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import Coin from "./Coin";
import { coinPassed } from "./CoinSearch";

const CoinTable = () => {
    const [coins, setCoins] = useState([]);
    const passedCoinName = useContext(coinPassed);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios
          .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&price_change_percentage=1h,24h,7d&sparkline=true`)
          .then((response) => {
            console.log(response.data);
            setCoins(response.data);
          })
          .catch((error) => {
            alert(error.message);
          });
      },  [page]);

      const filteredCoins = coins.filter(coin => 
           coin.name.toLowerCase().includes(passedCoinName.toLowerCase()) || 
            coin.symbol.toLowerCase().includes(passedCoinName.toLowerCase())
            );

            const handlePrevPage = () => {
              console.log(page);
              if (page > 1) {
                setPage(page - 1);
              }
            };
          
            const handleNextPage = () => {
              console.log(page);
              setPage(page + 1);
            };

            return (
                <>
                  <table className= "border-separate [border-spacing:0.75rem]">
                  <thead>
                  <tr>
                    <th className="underline">Rank</th>
                    <th className="underline">Icon</th>
                    <th className="underline">Name</th>
                    <th className="underline">Ticker</th>
                    <th className="underline">Price (USD)</th>    
                    <th className="underline">1hr%</th>
                    <th className="underline">24hr%</th>
                    <th className="underline">7d%</th>
                    <th className="underline">Market Cap</th>
                    <th className="underline">Volume 24h</th>
                    <th className="underline">ATH ($)</th>
                    <th className="underline">7D Price Graph</th>
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
                  <div className="mt-4">
                    <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700" onClick={handlePrevPage}>Prev</button>
                     <span className="mr-2 ml-2">{page}</span>
                    <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700" onClick={handleNextPage}>Next</button>
                  </div>
                </>
              );
            };


export default CoinTable;
