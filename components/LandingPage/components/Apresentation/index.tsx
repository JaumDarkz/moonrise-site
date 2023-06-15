import Image from 'next/image'

import styles from './styles.module.scss'

import magnifier from '@/public/assets/icons/magnifier.svg'
import relatory from '@/public/assets/icons/relatory.svg'
import gear from '@/public/assets/icons/gear.svg'

const Apresentation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        <div className={styles.card1}>
          <div className={styles.iconContainer}>
            <Image src={magnifier} alt='Service' width={50} />
          </div>

          <div className={styles.text}>
            É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras
          </div>

          <div className={styles.lineContainer}>
            <div className={styles.line} />
          </div>
        </div>

        <div className={styles.card2}>
          <div className={styles.iconContainer}>
            <Image src={relatory} alt='Service' width={50} />
          </div>

          <div className={styles.text}>
            É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras
          </div>

          <div className={styles.lineContainer}>
            <div className={styles.line} />
          </div>
        </div>

        <div className={styles.card3}>
          <div className={styles.iconContainer}>
            <Image src={gear} alt='Service' width={50} />
          </div>

          <div className={styles.text}>
            É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras
          </div>

          <div className={styles.lineContainer}>
            <div className={styles.line} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Apresentation