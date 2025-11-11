import { useCounter } from "../hook/use-counter";
import styles from '../../../components/hat/ButtonHat/ButtonHat.module.css'

export const CounterToggleDown=()=>{
    const {toggleCounterDown}=useCounter()

    return (
        <button className={styles.hatButton} onClick={toggleCounterDown}>GANG!</button>
    )
}