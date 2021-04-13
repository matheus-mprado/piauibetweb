import Link from 'next/link'
import styles from './styles.module.scss'

export function Navbar() {
    return (
        <nav className={styles.container}>
            <div className={styles.content}>
                <Link href="/">
                    <a> <img src="/piauibet copiar.svg" alt="logo" /> </a>
                </Link>
                

                <div>
                    <div>
                        <Link href="#">
                            <a> Apostas </a>
                        </Link>

                        <Link href="#">
                            <a> Como funciona </a>
                        </Link>

                        <Link href="#">
                            <a> Políticas de Aposta </a>
                        </Link>
                    </div>

                    <div> <p>
                        <img src="/login.svg" />
                   LOGIN</p>
                    </div>


                    <button>
                        APOSTAR
                    </button>
                </div>
            </div>

        </nav>
    )
}