import React from "react";
import styles from './aboutMe.module.css'
import stamp from '../assets/stamp.png'
import me from '../assets/Me.jpg'

export default function AboutMe() {
 return(
  <section className={styles.about_me}>
   <div className="container">
    <img src={stamp} alt="Stamp" className={styles.stamp} />
    <div className={styles.numbers}>0610 020250</div>
    <div className={styles.about_me__flex}>
     <img src={me} alt="Me" />
     <div className={styles.about_me__text}>
      <h2 className={styles.textH2}>Мушкина Виктория</h2>
      <p className={styles.textP}>
       Пол: <span>Frontend-разработчик</span> <br /> Дата (пере)рождения:
       <span>13.09.2025</span> <br /> Место рождения:
       <span>НИТУ МИСИС, <br /> “Вайбатон”</span>
      </p>
     </div>
    </div>
    <div className={styles.about_me__bottom}>
     misisdeveloper&lt;&lt;mushkina&lt;&lt;viktoria&lt;&lt;viktorovna&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;
     <br />
     itatmisisfrontendcourses2025&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;100620051309211
    </div>
   </div>
  </section>)
}