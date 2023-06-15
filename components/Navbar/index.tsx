import Image from 'next/image'
import { useState } from 'react'

import styles from './styles.module.scss'

import logo from '@/public/assets/logo.svg'
import person from '@/public/assets/icons/person.svg'

const Navbar = () => {
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
          <div className={styles.navColumn} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
            <div className={styles.nav}>
              Solutions
              <div className={`${styles.arrow} ${isHovered1 ? styles.rotated : ''}`}>
                <div className={styles.stick}></div>
                <div className={styles.stick}></div>
              </div>
            </div>

            { isHovered1 &&
              <>
              <div className={styles.invisible} />

              <div className={styles.dropdownContainer}>
                <div className={styles.option}>
                  <div className={styles.icon}>
                    <Image src={person} alt='Icon' width={35} />
                  </div>

                  <div className={styles.info}>
                    <div className={styles.title}>
                      Automation
                    </div>
                    <div className={styles.text}>
                      lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                    </div>
                  </div>
                </div>

                <div className={styles.option}>
                  <div className={styles.icon}>
                    <Image src={person} alt='Icon' width={35} />
                  </div>

                  <div className={styles.info}>
                    <div className={styles.title}>
                      Automation
                    </div>
                    <div className={styles.text}>
                      lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                    </div>
                  </div>
                </div>

                <div className={styles.option}>
                  <div className={styles.icon}>
                    <Image src={person} alt='Icon' width={35} />
                  </div>

                  <div className={styles.info}>
                    <div className={styles.title}>
                      Automation
                    </div>
                    <div className={styles.text}>
                      lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                    </div>
                  </div>
                </div>

                <div className={styles.option}>
                  <div className={styles.icon}>
                    <Image src={person} alt='Icon' width={35} />
                  </div>

                  <div className={styles.info}>
                    <div className={styles.title}>
                      Automation
                    </div>
                    <div className={styles.text}>
                      lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                    </div>
                  </div>
                </div>

                <div className={styles.option}>
                  <div className={styles.icon}>
                    <Image src={person} alt='Icon' width={35} />
                  </div>

                  <div className={styles.info}>
                    <div className={styles.title}>
                      Applications
                    </div>
                    <div className={styles.text}>
                      lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                    </div>
                  </div>
                </div>

                <div className={styles.option}>
                  <div className={styles.icon}>
                    <Image src={person} alt='Icon' width={35} />
                  </div>

                  <div className={styles.info}>
                    <div className={styles.title}>
                      Websites
                    </div>
                    <div className={styles.text}>
                      lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                    </div>
                  </div>
                </div>
              </div>
              </>
            }
          </div>

          <div className={styles.navColumn} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
            <div className={styles.nav}>
              Success Cases
              <div
                className={`${styles.arrow} ${isHovered2 ? styles.rotated : ''}`}
              >
                <div className={styles.stick}></div>
                <div className={styles.stick}></div>
              </div>
            </div>
            {isHovered2 &&
            <>
            <div className={styles.invisible} />

              <div className={styles.dropdownContainer}>
                <div className={styles.option}>
                  <div className={styles.icon}>
                    <Image src={person} alt='Icon' width={35} />
                  </div>

                  <div className={styles.info}>
                    <div className={styles.title}>
                      Automation
                    </div>
                    <div className={styles.text}>
                      lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                    </div>
                  </div>
                </div>
              </div>
              </>
            }
          </div>
        </div>

        <div className={styles.ctaContainer}>Get Started</div>
      </div>
    </div>
  )
}

export default Navbar
