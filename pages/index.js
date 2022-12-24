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
      <CoinSearch />
      <footer className="my-4" >Built with 🖤 by <Link href={{ pathname: "https:chiragneb.vercel.app" }} target="_blank" className='font-bold'>Chirag Neb</Link></footer>
      </div>
      
    </>
  )
}
