import Head from 'next/head'

import LandingPage from '@/components/LandingPage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Moonrise</title>
        <meta name="description" content="Moonrise official website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingPage />
    </>
  )
}
