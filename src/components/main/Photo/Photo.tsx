import styles from './Photo.module.css'

type PhotoProps=React.ComponentProps<"button"> &{
    forChange:string
}

const Photo =(props:PhotoProps)=>{

    const{forChange}=props

    if(forChange==='default'){
        return  (
            <div className={styles.photoDefault}> </div>
        )
    } else if (forChange==='angry'){
        return (
            <div className={styles.photoAngry}> </div>
        )
    }
}

export default Photo