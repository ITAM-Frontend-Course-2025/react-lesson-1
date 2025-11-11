import styles from './Button.module.css'

type ButtonProps = React.ComponentProps<"button"> 

function Button(props: ButtonProps) {
    
    const {...rest } = props

    return <button {...rest} className={styles.button}>Save changes</button>
}

export default Button