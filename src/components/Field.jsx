const Field=(props)=>{  
    
    const {label,value,onChange}=props
    
    return(
        <>
        <div className="column__field">
            <label className="field__label"htmlFor="change-name">{label}</label>
            <input 
                className="field__input" 
                type="text" 
                id="change-name" 
                placeholder=" "
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
        </div>
        </>
    )
}

export default Field