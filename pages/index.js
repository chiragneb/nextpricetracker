import Head from 'next/head'
import Link from 'next/link'
import CoinSearch from '../components/CoinSearch'
import {useTheme} from 'next-themes'

export default function Home() {
  const {theme, setTheme} = useTheme()
  return (
    <>
      <Head>
        <title>nextpricetracker</title>
      </Head>
       <div className="mb-2 grid h-screen place-items-center">
<<<<<<< HEAD
           <h1 className="my-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
                          Top 100 Cryptos! 💵 </h1>
              <button className='mb-6 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' onClick={() => window.location.reload(false)}>Click to reload!</button>
                 <CoinSearch />
              <footer className="bg-gray-200 text-center lg:text-left my-8" >Built with 🖤 by 
              <Link href={{ pathname: "https:chiragneb.vercel.app" }} target="_blank" className="font-bold underline mb-8"> Chirag Neb</Link></footer>
=======

           <h1 className="my-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl dark:text-white">
                          Top 100 Cryptos! 💵 </h1>
              <div className='justify-center mb-4'>
              <button className='mr-2 bg-slate-500 text-white font-bold py-2 px-4 border-b-4 border-gray-700' onClick={() => window.location.reload(false)}>refresh ♺</button>
              <button className='ml-2 bg-slate-500 text-white font-bold py-2 px-4 border-b-4 border-gray-700' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}> 🌓 </button>
              </div>
              <CoinSearch />

              <footer className="text-center lg:text-left my-8" > 🏗️ by &nbsp;
              <Link href={{ pathname: "https:chiragneb.vercel.app" }} target="_blank" className="font-bold mb-8 underline">Chirag Neb</Link></footer>
              <div className='my-6 text-xs'>™️ 2023</div>
>>>>>>> darkmode
       </div>
    </>
  )
}
