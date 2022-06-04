import type { NextPage } from 'next'
import FifthSection from '../components/FifthSection'
import FirstSection from '../components/FirstSection'
import Footer from '../components/Footer'
import FooterSeparator from '../components/FooterSeparator'
import ForthSection from '../components/ForthSection'
import Header from '../components/Header'
import Router from '../components/Router'
import SecondSection from '../components/SecondSection'
import ThirdSection from '../components/ThirdSection'

const Home: NextPage = () => {
  return (
    <>
      <Header/>
      <main>
        <FirstSection/>
        <Router hash="manifesto" Component={SecondSection}/>
        <Router hash="metodologia" Component={ThirdSection}/>
        <Router hash="servico" Component={ForthSection}/>
        <FifthSection/>
        <FooterSeparator/>
        <Footer/>
      </main>
    </>
  )
}

export default Home
