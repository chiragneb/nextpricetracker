import Head from 'next/head'
import CoinTable from './components/CoinTable'


export default function Home() {
  return (
    <>
      <Head>
        <title>nextpricetracker</title>
      </Head>

      <h1> Crypto Price tracker! </h1>
      <CoinTable />
      
    </>
  )
}
