import React from "react";
import SkillsPercentage from '../skillsPercentage/skillsPercentage'
import style from './skills.module.css'
import mishaSrc from '../assets/Misha.png'
import carpetSrc from '../assets/carpet2.png'

export default function Skills(){
 return(
  <section className={style.skills}>
   <div className="container">
    <h2 className={style.textH2}>Не скиллы, <br /> а признаки мастерства</h2>
    <img src={carpetSrc} alt="Carpet" className={style.carpet2} />
    <SkillsPercentage />
    <img src={mishaSrc} alt="Misha" className={style.Misha} />
   </div>
  </section>
 )
}