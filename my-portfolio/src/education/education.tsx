import React from "react";
import styles from './education.module.css'
import serpSrc from '../assets/serp.png'

export default function Education(){
 return (
 <section className={styles.education}>
  <div className="container">
   <div className={styles.education__text}>
    <h3 className={styles.textH3}>Образование</h3>
    <p>НИТУ МИСИС, бакалавриат, направление “Прикладная информатика”, 2 курс.</p>
   </div>
   <blockquote className={styles.quote}>“Ученье — свет, <br /> <span> а неученье - тьма”</span></blockquote>
   <div className={styles.education__flex}>
    <div className={styles.education__text}>
     <h3 className={styles.textH3}>Увлечения</h3>
     <p>Занималась балльно-спортивными танцами 15 лет <br />
       Люблю собирать алмазные мозаики
       <br /> Планирую заняться вокалом</p>
     </div>
    <img src={serpSrc} alt="Serp" />
   </div>
  </div>
 </section>
 )
}