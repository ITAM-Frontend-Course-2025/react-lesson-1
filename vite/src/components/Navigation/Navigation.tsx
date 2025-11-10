import React from 'react'
import styles from './Navigation.module.css'

const Navigation: React.FC = () => {
  const menuItems = [
    'Крутая',
    'Маленькая',
    'Умная',
    'Megameloch',
    'Забивная',
    'Микроволновка',
    'Мелочь',
    'Tanchik'
  ]

  return (
    <nav className={styles.navigation}>
      {menuItems.map((item, index) => (
        <div key={index} className={styles.navItem}>
          {item}
        </div>
      ))}
    </nav>
  )
}

export default Navigation