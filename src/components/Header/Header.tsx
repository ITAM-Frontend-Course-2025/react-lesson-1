
import styles from './Header.module.css';

export default function Header() {
    const scrollToSection = (sectionID : string) => {
        const element = document.getElementById(sectionID)
        if (element){
            element.scrollIntoView({behavior:'smooth'})
        }
    }
    return(
        <header className = {styles.header}>
            <h1 className = {styles.headerName}>Dashulka0303</h1>
            <nav className = {styles.headerMenu}>
                <div className = {styles.menuItem}
                onClick={() => scrollToSection('about')}>
                    About me
                </div>
                <div className = {styles.menuItem}
                onClick={() => scrollToSection('favorite')}>
                    Favorite
                </div>
                <div className = {styles.menuItem}
                onClick={() => scrollToSection('contacts')}>
                    Contacts
                </div>
            </nav>
        </header>
    )
}