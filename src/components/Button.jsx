const Button =(props)=>{

    const{onClickSaveChanges}=props

    return(
        <>
            <button className="column__button" onClick={onClickSaveChanges}>Save changes</button>
        </>
    )
}

export default Button