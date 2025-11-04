type ButtonProps = React.ComponentProps<"button"> 

function Button(props: ButtonProps) {
    
    const {...rest } = props

    return <button {...rest}>Save changes</button>
}

export default Button