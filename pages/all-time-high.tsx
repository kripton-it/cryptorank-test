import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/ATH.module.css'

interface IAllTimeHighProps {
  athPrice: number
  price: number
} 

const AllTimeHigh: NextPage<IAllTimeHighProps> = ({ athPrice, price }) => {
  const fromAth = (1 - price / athPrice) * 100
  const toAth = (athPrice / price - 1) * 100
  return (
    <div className={styles.container}>
      <Head>
        <title>Cryptorank Test App - ATH Task</title>
        <meta name="description" content="All Time High" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='main'>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Price</th>
              <th>All Time High Price</th>
              <th>From ATH</th>
              <th>To ATH</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{price.toFixed(2)}</td>
              <td>{athPrice.toFixed(2)}</td>
              <td>{`${fromAth.toFixed(2)} %`}</td>
              <td>{`${toAth.toFixed(2)} %`}</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  )
}

export default AllTimeHigh

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`https://tstapi.cryptorank.io/v0/coins/bitcoin`)
  const { data } = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      athPrice: data.athPrice.USD,
      price: data.price.USD
    }
  }
}
