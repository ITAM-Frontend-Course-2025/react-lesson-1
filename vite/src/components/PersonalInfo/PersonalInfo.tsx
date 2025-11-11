import React from 'react'
import styles from './PersonalInfo.module.css'

const PersonalInfo: React.FC = () => {
  return (
    <div className={styles.personalInfo}>
      <h3 className={styles.infoText}>
        <br />Меня зовут: Таня <br />Альтернатива: Мегамелочь (потому что я мега и мелочь. Логично.)<br />
        Родилась: 29.12.2005 в Ярославле,<br /> 10 лет прожила в Челябинской области, <br /> сейчас: в Москве
        <br />Знак зодиака: Козерог
      </h3>
    </div>
  )
}

export default PersonalInfo