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
           <h1 className="mt-2 mb-6 text-4xl capitalize font-extrabold drop-shadow-2xl leading-none md:text-5xl lg:text-6xl dark:text-white">
                          Top Cryptocurrency list </h1>
              <div className='justify-center mb-4'>
              <button className='mr-2 bg-slate-500 text-white font-bold py-2 px-4 border-b-4 border-gray-700' onClick={() => window.location.reload(false)}> RELOAD </button>
              <button className='ml-2 bg-slate-500 font-bold py-2 px-4 border-b-4 border-gray-700' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}> 🌓 </button>
              </div>
              <CoinSearch />

              <footer className="text-center lg:text-left my-8" > 🏗️ by &nbsp;
              <Link href={{ pathname: "https://chiragneb.vercel.app" }} target="_blank" className="font-bold mb-8 underline">Chirag Neb</Link></footer>
              <div className='my-2 text-xs'>{new Date().getFullYear()}</div>
       </div>
    </>
  )
}
