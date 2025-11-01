import { useState } from "react"
import Button from "./Button"
import Field from "./Field"
import Photo from "./Photo"
import Text from "./Text"

const Banner=()=>{

    const[label, setLabel]=useState('Maksim Fediarin')
    const [inputValue, setInputValue] = useState('')

    const saveChanges=()=>{
        if (inputValue){
            setLabel(inputValue)
            setInputValue('')
            console.log(`новое значение label:${inputValue}`)
        } else { alert('не тыкай просто так')}
    }

    return (
        <div className="banner">
            <div className="banner__row">
                <div className="row__column">
                    <Photo/>
                    <Field 
                        label={label}
                        value={inputValue}
                        onChange={setInputValue}
                    />
                    <Button onClickSaveChanges={saveChanges}/>
                </div>
                <div className="row__column">
                    <Text/>
                </div>
            </div>
        </div>
    )
}

export default Banner