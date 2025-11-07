import styles from './Field.module.css'

type FieldProps=React.ComponentProps<"input">& {
    label:string,
}

function Field (props:FieldProps) {

    const {label,...rest } = props

    return (
        <div className={styles.field}>
        <label className={styles.label} htmlFor="change-name">
            {label}
        </label>
        <input
            className={styles.input}
            type="text"
            id="change-name"
            placeholder=" "
            {...rest}
        />
        </div>
  )
}

export default Field



