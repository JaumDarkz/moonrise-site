import Image from 'next/image'

import styles from './styles.module.scss'

import github from '@/public/assets/social/github.svg'
import instagram from '@/public/assets/social/instagram.svg'
import twitter from '@/public/assets/social/twitter.svg'
import linkedin from '@/public/assets/social/linkedin.svg'


const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.social}>
          <Image src={github} alt='github' style={{cursor: 'pointer'}} />
          <Image src={instagram} alt='instagram' style={{cursor: 'pointer'}} />
          <Image src={twitter} alt='twitter' style={{cursor: 'pointer'}} />
          <Image src={linkedin} alt='linkedin' style={{cursor: 'pointer'}} />
        </div>

        <div className={styles.copyright}>
          © 2023 MOONRISE. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer