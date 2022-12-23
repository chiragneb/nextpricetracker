import Head from 'next/head'
import CoinTable from '../components/CoinTable'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>nextpricetracker</title>
      </Head>
      <div className="mb-2 grid h-screen place-items-center">
      <h1 className="text-3xl font-bold underline my-8"> Crypto Price tracker! 💵 </h1>
      <CoinTable />
      <footer className="my-4" >Built with 🖤 by <Link href={{ pathname: "https:chiragneb.vercel.app" }} target="_blank" className='font-bold underline'>Chirag Neb</Link></footer>
      </div>
      
    </>
  )
}
