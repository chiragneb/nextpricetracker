import Head from 'next/head'
import CoinTable from './components/CoinTable'


export default function Home() {
  return (
    <>
      <Head>
        <title>Hello World!</title>
      </Head>
      <CoinTable />
      <h1> Crypto Price tracker! </h1>
    </>
  )
}
