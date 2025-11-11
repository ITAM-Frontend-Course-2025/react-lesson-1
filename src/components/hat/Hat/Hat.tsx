import { CounterToggleDown } from '../../../modules/counter/ui/counter-toggleDown.tsx'
import { CounterToggleUp } from '../../../modules/counter/ui/counter-toggleUp.tsx'
import { ShowResult } from '../../../modules/counter/ui/counter-showresult.tsx'
import styles from './Hat.module.css'

const Hat=()=>{

    return(
        <div className={styles.hatRow}>
            <CounterToggleDown/>
            <ShowResult />
            <CounterToggleUp/>
        </div>
    )
}

export default Hat