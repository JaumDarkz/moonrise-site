import Image from 'next/image'

import styles from './styles.module.scss'

import folder from '@/public/assets/icons/folder.svg'

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
            <Image src={folder} alt='Service' width={50} />
          </div>

          <div className={styles.text}>
            Lorem Lorem Loremm Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          </div>
        </div>

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
            <Image src={folder} alt='Service' width={50} />
          </div>

          <div className={styles.text}>
            Lorem Lorem Loremm Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          </div>
        </div>

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
            <Image src={folder} alt='Service' width={50} />
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