import fetch from 'isomorphic-unfetch';
import { useTheme } from 'next-themes';
import Image from 'next/image';


const CoinPage = ({coin}) => {
    const {theme, setTheme} = useTheme()
    return (
        <div className='my-10'>
            <button className='ml-2 bg-slate-500 font-bold py-2 px-4 border-b-4 border-gray-700' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}> 🌓 </button>
            <div className='font-bold text-center text-3xl my-4'>{coin.name}</div>
            <div className='font-bold text-center text-3xl mb-2'>{coin.symbol}</div>
            <div className='grid justify-items-center mb-2'><Image src={coin.image.large} width={300} height={300} alt={coin.name} /></div>
             <div className='text-center mb-2'>Block time: {coin.block_time_in_minutes} mins</div>
             <div className='text-center mb-2'>Algo: {coin.hashing_algorithm}</div>
             <div className='text-center mb-2 text-2xl'>Price in USDT: ${coin.tickers[0].last}</div>
             <div className='text-center mb-2 text-2xl'>Price in BTC: {coin.tickers[0].converted_last.btc}</div>

        </div>
    );
};
 
export default CoinPage;

export async function getServerSideProps(context) {
    const { id } = context.query;
    try {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        const data = await res.json();
        return {
            props: {
                coin: data
            }
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                coin: {}
            }
        }
    }
}
