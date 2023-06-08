import Image from 'next/image'

import styles from './styles.module.scss'

import smalldetail from '@/public/assets/smalldetail.svg'
import bigdetail from '@/public/assets/bigdetail.svg'

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.description}>
        LET&apos;S TURN YOUR IDEA <br /><span>INTO A GROUNDBREAKING PRODUCT</span>
        </div>

        <div className={styles.button}>
          Get Started
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.smallDetail}>
          <Image src={smalldetail} alt='Details' />
        </div>

        <div className={styles.bigDetail}>
          <Image src={bigdetail} alt='Details' />
        </div>
      </div>
    </div>
  )
}

export default Hero