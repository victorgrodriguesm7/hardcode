import type { NextPage } from 'next'
import FirstSection from '../components/FirstSection'
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
      </main>
    </>
  )
}

export default Home
