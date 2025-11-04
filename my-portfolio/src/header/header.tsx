import React from "react";
import styles from './header.module.css'
import carpetSrc from "../assets/carpet.png"

export default function Header() {
 return (
  <header className={styles.header}>
   <div className="container">
    <img src={carpetSrc} alt="Carpet" />
    <h1 className={styles.textH1}>Портфолио</h1>
    <p>Начинающего веб-разработчика</p>
   </div> 
  </header>
 )
}