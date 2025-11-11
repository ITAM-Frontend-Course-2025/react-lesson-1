
import styles from './About.module.css';

export default function About() {
    return(
        <section id = "about">
            <div className = {styles.aboutContainer}>
                <img src = "public/autumn.jpg" alt="моё фото" className={styles.myPhoto}/>
                <div className={styles.aboutText}>
                    <h1 className={styles.aboutTitle}>About me</h1>
            
                    <p className={styles.introduction}>Всем привет, меня зовут Малькова Дарья! Я начинающий frontend-разработчик, увлекаюсь дизайном больше года.</p>
                    <div className={styles.shortInfo}>
                        <h3 className={styles.shortInfoItem}>Возраст: 19 лет</h3>
                        <h3 className={styles.shortInfoItem}>Дата рождения: 03.03.2006</h3>
                        <h3 className={styles.shortInfoItem}>Образование: НИТУ МИСИС, направление "Прикладная информатика", 2 курс</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}