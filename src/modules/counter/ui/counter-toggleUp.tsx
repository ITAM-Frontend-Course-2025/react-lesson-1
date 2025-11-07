import { useCounter } from "../hook/use-counter";
import styles from '../../../components/hat/ButtonHat/ButtonHat.module.css'

export const CounterToggleUp=()=>{
    const {toggleCounterUp}=useCounter()

    return (
        <button className={styles.hatButton} onClick={toggleCounterUp}>BANG!</button>
    )
}