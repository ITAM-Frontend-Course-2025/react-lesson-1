import styles from './Favorite.module.css'; 

export default function Favorite() {
    return (
        <section id="favorite">
            <div className={styles.favoriteContainer}>
                <h1 className={styles.favoriteTitle}>Favorite</h1>
                <div className={styles.topContainer}>
                    <div className={styles.card}>
                        <h3 className={styles.h3Card}>Топ-3 фильма/сериала</h3>
                        <ul className={styles.ulCard}>
                            <li className={styles.liCard}>Молодёжка</li>
                            <li className={styles.liCard}>Бегущий в лабиринте</li>
                            <li className={styles.liCard}>Очень странные дела</li>
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.h3Card}>Топ-3 шоу</h3>
                        <ul className={styles.ulCard}>
                            <li className={styles.liCard}>Битва экстрасенсов</li>
                            <li className={styles.liCard}>Exile Show</li>
                            <li className={styles.liCard}>Натальная карта</li>
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.h3Card}>Топ-3 хобби</h3>
                        <ul className={styles.ulCard}>
                            <li className={styles.liCard}>Музыка(гитара, фортепиано)</li>
                            <li className={styles.liCard}>Танцы</li>
                            <li className={styles.liCard}>Волейбол/баскетбол</li>
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.h3Card}>Топ-3 достижения в университете</h3>
                        <ul className={styles.ulCard}>
                            <li className={styles.liCard}>Креатон</li>
                            <li className={styles.liCard}>Новый Уровень(весенний и летний интенсивы)</li>
                            <li className={styles.liCard}>Вайбатон</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.favoriteImages}>
                <img src="public/film.jpg" alt="фильм" />
                <img src="public/natal chart.jpg" alt="шоу" />
                <img src="public/dance.jpg" alt="хобби" />
                <img src="public/new level.jpg" alt="достижение" />
            </div>
        </section>
    );
};
