import Navbar from '../Navbar'
import Hero from './components/Hero'

import styles from './styles.module.scss'

const LandingPage = () => {
  return (
    <>

    <div className={styles.container}>
    <Navbar />
    <Hero />
    </div>
    </>
  )
}

export default LandingPage