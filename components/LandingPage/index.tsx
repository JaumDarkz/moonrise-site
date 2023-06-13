import Navbar from '../Navbar'
import Hero from './components/Hero'
import Apresentation from './components/Apresentation'
import Services from './components/Services'
import Footer from './components/Footer'

import styles from './styles.module.scss'

const LandingPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <Hero />
        <Apresentation />
        <Services />
        <Footer />
      </div>
    </>
  )
}

export default LandingPage