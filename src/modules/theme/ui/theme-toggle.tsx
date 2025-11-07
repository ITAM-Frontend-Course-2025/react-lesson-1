import { useTheme } from '../hook/use-theme.ts'
import styles from '../../../components/hat/ButtonHat/ButtonHat.module.css'

export const ThemeToggle = () => {
    const {toggleTheme } = useTheme()

    return (
        <button className={styles.hatButton} onClick={toggleTheme}>BANG!</button>
    )
}