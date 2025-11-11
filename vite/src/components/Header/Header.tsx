import React from 'react'
import styles from './Header.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.adsText}>
        Здесь могла быть ваша реклама, но тут только я (Даже авиасейлс не заплатил за рекламу)
      </h1>
    </header>
  )
}

export default Header