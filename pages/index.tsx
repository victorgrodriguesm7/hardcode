import type { NextPage } from 'next'
import FirstSection from '../components/FirstSection'
import ForthSection from '../components/ForthSection'
import Header from '../components/Header'
import SecondSection from '../components/SecondSection'
import ThirdSection from '../components/ThirdSection'

const Home: NextPage = () => {
  return (
    <>
      <Header/>
      <main>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <ForthSection/>
      </main>
    </>
  )
}

export default Home
