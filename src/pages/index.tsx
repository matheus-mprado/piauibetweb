import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        Início | Piaui Sport Bet
      </Head>

      <header className={styles.container}>
        <div className={styles.content}>
          <main>

            <div className={styles.frag}>
              <img src="/frag.svg" alt="bandeira" />
              <p>
                <span>
                  12.457.685
                </span>
                 APOSTAS REALIZADAS EM JOGOS
              </p>
            </div>

            <h1>Aposte, em<br /> qualquer jogo!</h1>

            <h4>TODAS AS LIGAS DISPONÍVEIS</h4>

            <p>
              Fique de olho nos jogos, e nas estatísticas <br /> <span>e aumente suas chances de ganhar!</span>
            </p>

            <a href="https://www.instagram.com/piauisport/">
              <button>
                <img src="/instagram.svg" alt="instagram" />
                ACESSE NOSSAS REDES
              </button>
            </a>

          </main>

          <img className={styles.primaryImg} src="/primary.svg" alt="primary" />
        </div>

        <div className={styles.footerHeader}>
          <div className={styles.avatarDiv}>
            <div className={styles.avatar}>
              <img src="/shield.svg" alt="segurança" />
              <p>UTILIZADO E COMPROVADO POR DIVERSOS APOSTADORES</p>
            </div>
            <img className={styles.avatarImg} src="/avatares.svg" alt="avatares" />
            <img className={styles.avatarImg2} src="/avatares2.svg" alt="avatares" />
          </div>

          <div>
            <p>TODA QUARTA E SABADO ESTATÍSTICAS DE JOGOS</p>
            <span>Caso tenha dúvidas entre em contato com nossa equipe</span>
            <Link href="#">
              <a><img src="/whatsapp.svg" alt="whatsapp" /> <span>86 9 9402-0048</span> </a>
            </Link>
          </div>

        </div>
      </header>
    </>

  )
}
