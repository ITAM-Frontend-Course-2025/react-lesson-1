type PhotoProps=React.ComponentProps<"img">& {
    changeClass:string,
}

const Photo =(props:PhotoProps)=>{

    const {changeClass,...rest}=props

    return(
        <div className={`column__photo${changeClass}`}> </div>
    )
}

export default Photo