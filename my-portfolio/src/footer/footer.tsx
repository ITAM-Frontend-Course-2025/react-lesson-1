import React from "react";
import styles from './footer.module.css'
export default function Footer(){
 return(
 <footer className={styles.footer}>
  <div className="container">
   <div className={styles.line}> </div>
    <div className={styles.footer__flex}>
     <div>Developed by: <a href="https://t.me/ViktoriaM06"> Viktoria Mushkina</a></div>
     <div>Designed by: <a href="https://t.me/voshodn"> Xlystova Anastasia</a></div>
    </div>
  </div>
 </footer>
)
}