import Head from 'next/head'

import Link from 'next/link'
import CoinSearch from '../components/CoinSearch'


export default function Home() {
  return (
    <>
      <Head>
        <title>nextpricetracker</title>
      </Head>
      <div className="mb-2 grid h-screen place-items-center">
      <h1 className="my-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-black"> Top 100 Cryptos! 💵 </h1>
      <button className='mb-6 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' onClick={() => window.location.reload(false)}>Click to reload!</button>
      <CoinSearch />
      <footer className="bg-gray-200 text-center lg:text-left my-8" >Built with 🖤 by <Link href={{ pathname: "https:chiragneb.vercel.app" }} target="_blank" className="font-bold underline mb-8">Chirag Neb</Link></footer>
      </div>
    </>
  )

}
