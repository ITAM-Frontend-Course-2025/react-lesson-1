import React from "react";
import styles from './skillsPercentage.module.css'
import per30Src from '../assets/30per.svg'
import per95Src from '../assets/95per.svg'
import per70Src from '../assets/70per.svg'
import per100Src from '../assets/100per.svg'

export default function SkillsPercentage(){
 return(
  <div className={styles.skills__grid}>
   <div className={styles.skillsGridItem}>
    <p>Рукотворный Мудрец (AI)</p>
    <div className={styles.percent}>30%</div>
    <img src={per30Src} alt="30%" />
   </div>
   <div className={styles.skillsGridItem}>
    <p>Сговорчивость (soft skills)</p>
    <div className={styles.percent}>95%</div>
    <img src={per95Src} alt="95%" />
   </div>
   <div className={styles.skillsGridItem}>
    <p>Пиксельный Тиран (перфекционизм)</p>
    <div className={styles.percent}>70%</div>
    <img src={per70Src} alt="70%" />
   </div>
   <div className={styles.skillsGridItem}>
    <p>Совестливость (ответственность)</p>
    <div className={styles.percent}>100%</div>
    <img src={per100Src} alt="100%" />
   </div>
  </div>
 )
}