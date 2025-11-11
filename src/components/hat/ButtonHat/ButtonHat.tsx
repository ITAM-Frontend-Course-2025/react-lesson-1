import styles from './ButtonHat.module.css'

type ButtonHatProps=React.ComponentProps<"button"> &{
    text:string
}

const ButtonHat=(props:ButtonHatProps)=>{

    const {text,...rest}=props

    return (
        <button className={styles.hatButton} {...rest} >{text}</button>
    )
}

export default ButtonHat