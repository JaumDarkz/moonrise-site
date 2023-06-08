import Navbar from '../Navbar'
import Hero from './components/Hero'
import Apresentation from './components/Apresentation'

import styles from './styles.module.scss'

const LandingPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <Hero />
        <Apresentation />
      </div>
    </>
  )
}

export default LandingPage