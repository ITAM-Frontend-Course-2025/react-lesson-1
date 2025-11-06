type FieldProps=React.ComponentProps<"input">& {
    label:string,
}

function Field (props:FieldProps) {

    const {label,...rest } = props

    return (
        <div className="column__field">
        <label className="field__label" htmlFor="change-name">
            {label}
        </label>
        <input
            className="field__input"
            type="text"
            id="change-name"
            placeholder=" "
            {...rest}
        />
        </div>
  )
}

export default Field



