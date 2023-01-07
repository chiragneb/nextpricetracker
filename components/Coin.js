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
            <td className="text-center ">{marketCapRank}</td>
            <td><img src={image} alt="cryptoCoin" className="object-center object-contain h-7 h-5 ml-2 rounded-full" /></td>
            <td className="text-center font-bold">{name}</td>
            <td className="text-center">{symbol.toUpperCase()}</td>
            <td className="text-center">{price.toLocaleString("en-US", {style:"currency", currency:"USD", maximumFractionDigits: 7})}</td>
            {
                (OneHr < 0) ?
                (<td className= "text-center text-red-600" >{OneHr?.toFixed(2)}%</td>) : 
                (<td className= "text-center text-green-600" >+{OneHr?.toFixed(2)}%</td>)
            }
            {
                (TwoFourHr < 0) ?
                (<td className= "text-center text-red-600" >{TwoFourHr?.toFixed(2)}%</td>) : 
                (<td className= "text-center text-green-600" >+{TwoFourHr?.toFixed(2)}%</td>)
            }
            {
                (SevenDays < 0) ?
                (<td className= "text-center text-red-600" >{SevenDays?.toFixed(2)}%</td>) : 
                (<td className= "text-center text-green-600" >+{SevenDays?.toFixed(2)}%</td>)
            }
            
            <td className="text-center">{marketCap.toLocaleString("en-US", {style:"currency", currency:"USD", minimumFractionDigits: 0})}</td>
            <td className="text-center">{volume.toLocaleString("en-US", {style:"currency", currency:"USD", minimumFractionDigits: 0})}</td>
            <td className="text-center">{Ath.toLocaleString("en-US", {style:"currency", currency:"USD", minimumFractionDigits: 0})}</td>
            <td className="text-center">{<Sparklines data={Spark} width={100} height={70}><SparklinesLine /></Sparklines>}</td>
            </tr>
            </>
    )
}

export default Coin;