import type { NextPage } from 'next'
import FirstSection from '../components/FirstSection'
import Header from '../components/Header'
import SecondSection from '../components/SecondSection'

const Home: NextPage = () => {
  return (
    <>
      <Header/>
      <main>
        <FirstSection/>
        <SecondSection/>
      </main>
    </>
  )
}

export default Home
