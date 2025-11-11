import React from 'react'
import styles from './ExtraInfo.module.css';

const Exstra: React.FC = () => {
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

export default Exstra;