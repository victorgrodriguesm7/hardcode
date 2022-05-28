import type { NextPage } from 'next'
import FirstSection from '../components/FirstSection'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Header/>
      <main>
        <FirstSection/>
      </main>
    </>
  )
}

export default Home
