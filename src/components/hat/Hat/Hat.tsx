import { ThemeToggle } from '../../../modules/theme/ui/theme-toggle.tsx'
import ButtonHat from "../ButtonHat/ButtonHat.tsx"
import styles from './Hat.module.css'

const Hat=()=>{

    return(
        <div className={styles.hatRow}>
            <ButtonHat text="GANG!"/>
            <ButtonHat text="blb yf [eq!"/>
            <ThemeToggle/>
        </div>
    )
}

export default Hat