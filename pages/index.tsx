import type { NextPage } from 'next'
import FifthSection from '../components/FifthSection'
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
        <FifthSection/>
      </main>
    </>
  )
}

export default Home
