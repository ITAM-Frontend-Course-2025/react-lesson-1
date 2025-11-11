import styles from './Contacts.module.css'; 

export default function Contacts() {
    return (
        <section id = "contacts">
            <div className = {styles.contactsContainer}>
                <h1 className = {styles.contactsTitle}>Contacts</h1>
                <div className = {styles.infoContainer}>
                    <h3 className = {styles.info}>tg channel: <a href="https://t.me/mlkv_d3">Dashulka0303</a></h3>
                    <h3 className = {styles.info}>tg: <a href="https://t.me/mlkvd_3">mlkv_d3</a></h3>
                    <h3 className = {styles.info}>email: malkova.dariya@yandex.ru</h3>
                </div>
            </div>
        </section>
    )
}