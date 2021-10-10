import Link from 'next/link'
import { FC } from 'react'

import styles from '../styles/Header.module.css'

const Navbar: FC = () => {
  return (
    <header className={styles.header}>
        <Link href='/'>
            <a>Home</a>
        </Link>

        <Link href='/all-time-high'>
            <a>All Time High</a>
        </Link>
    </header>
  )
}

export default Navbar