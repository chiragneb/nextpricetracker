/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Sparklines , SparklinesLine} from 'react-sparklines';

const Coin = ({ 
    marketCapRank, 
    name, 
    image, 
    symbol, 
    price, 
    volume, 
    OneHr, 
    TwoFourHr, 
    SevenDays, 
    marketCap, 
    Ath,
    Spark,
}) => {
    return (
        <>
        <tr>
            <td className="text-center border ">{marketCapRank}</td>
            <td className="border"><img src={image} alt="cryptoCoin" className="object-center object-contain h-6 w-6 rounded-full ml-1" /></td>
            <td className="text-center font-bold border">{name}</td>
            <td className="text-center border">{symbol.toUpperCase()}</td>
            <td className="text-center border">{price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
            {
                (OneHr < 0) ?
                (<td className= "text-center text-red-600 border" >{OneHr.toFixed(2)}%</td>) : 
                (<td className= "text-center text-green-600 border" >+{OneHr.toFixed(2)}%</td>)
            }
            {
                (TwoFourHr < 0) ?
                (<td className= "text-center text-red-600 border" >{TwoFourHr.toFixed(2)}%</td>) : 
                (<td className= "text-center text-green-600 border" >+{TwoFourHr.toFixed(2)}%</td>)
            }
            {
                (SevenDays < 0) ?
                (<td className= "text-center text-red-600 border" >{SevenDays.toFixed(2)}%</td>) : 
                (<td className= "text-center text-green-600 border" >+{SevenDays.toFixed(2)}%</td>)
            }
            
            <td className="text-center border">{marketCap.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
            <td className="text-center border">{volume.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
            <td className="text-center border">{Ath.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
            <td className="text-center border">{<Sparklines data={Spark}><SparklinesLine /></Sparklines>}</td>
            </tr>
            </>
    )
}

export default Coin;