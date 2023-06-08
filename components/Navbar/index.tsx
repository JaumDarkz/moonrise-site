import Image from 'next/image'
import { useState } from 'react'

import styles from './styles.module.scss'

import logo from '@/public/assets/logo.svg'

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const [isHovered1, setIsHovered1] = useState(false)

  const handleMouseEnter1 = () => {
    setIsHovered1(true)
  }

  const handleMouseLeave1 = () => {
    setIsHovered1(false)
  }

  const [isHovered2, setIsHovered2] = useState(false)

  const handleMouseEnter2 = () => {
    setIsHovered2(true)
  }

  const handleMouseLeave2 = () => {
    setIsHovered2(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} alt='Logo' />
      </div>

      <div className={styles.rightContainer}>
        <div className={styles.navContainer}>
          <div
            className={styles.nav}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            About Us
            <div
              className={`${styles.arrow} ${isHovered ? styles.rotated : ''}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className={styles.stick}></div>
              <div className={styles.stick}></div>
            </div>
          </div>

          <div
            className={styles.nav}
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          >
            Success Cases
            <div
              className={`${styles.arrow} ${isHovered1 ? styles.rotated : ''}`}
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            >
              <div className={styles.stick}></div>
              <div className={styles.stick}></div>
            </div>
          </div>

          <div
            className={styles.nav}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            Solutions
            <div
              className={`${styles.arrow} ${isHovered2 ? styles.rotated : ''}`}
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              <div className={styles.stick}></div>
              <div className={styles.stick}></div>
            </div>
          </div>
        </div>

        <div className={styles.ctaContainer}>Get Started</div>
      </div>
    </div>
  )
}

export default Navbar
