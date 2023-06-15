import Image from 'next/image'

import styles from './styles.module.scss'

import folder from '@/public/assets/icons/folder.svg'
import paper from '@/public/assets/icons/paper.svg'
import mail from '@/public/assets/icons/mail.svg'
import person from '@/public/assets/icons/person.svg'
import eye from '@/public/assets/icons/eye.svg'
import money from '@/public/assets/icons/money.svg'

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <Image src={folder} alt='Service' width={50} />
          </div>

          <div className={styles.text}>
            Lorem Lorem Loremm Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <Image src={paper} alt='Service' width={50} />
          </div>

          <div className={styles.text}>
            Lorem Lorem Loremm Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <Image src={mail} alt='Service' width={50} />
          </div>

          <div className={styles.text}>
            Lorem Lorem Loremm Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <Image src={person} alt='Service' width={50} />
          </div>

          <div className={styles.text}>
            Lorem Lorem Loremm Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <Image src={eye} alt='Service' width={50} />
          </div>

          <div className={styles.text}>
            Lorem Lorem Loremm Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <Image src={money} alt='Service' width={50} />
          </div>

          <div className={styles.text}>
            Lorem Lorem Loremm Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services