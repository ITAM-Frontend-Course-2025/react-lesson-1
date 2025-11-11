import { useCounter } from "../hook/use-counter"
import { useTheme } from "../../theme/ui"
import styles from "../../../components/hat/ButtonHat/ButtonHat.module.css"

export const ShowResult=()=>{
    const {counter}=useCounter()
    const {toggleTheme}=useTheme()

    return(
        <button className={styles.hatButton} onClick={toggleTheme}>{counter}</button>
    )
}