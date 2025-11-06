type ButtonHatProps=React.ComponentProps<"button"> &{
    text:string
}

const ButtonHat=(props:ButtonHatProps)=>{

    const {text,...rest}=props

    return (
        <button className="hat__button">{text}</button>
    )
}

export default ButtonHat