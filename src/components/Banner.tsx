import { useState, useCallback } from "react"
import Button from "./Button"
import Field from "./Field"
import Photo from "./Photo"
import Text from "./Text"
import Error from "./Error"
import { forbiddenWords } from "./util/forbiddenWords"

const Banner = () => {

    const [label, setLabel] = useState<string>('Maksim Fediarin')
    const [newInput, setNewInput] = useState<string>('')
    const [showButton, setShowButton]=useState<boolean>(false)
    const [showError, setShowError]=useState<boolean>(false)
    const [phtNameClass, setPhtNameClass]=useState<string>('-default')

    function debounce(func: Function, delay: number) {
        let timeoutId: NodeJS.Timeout
        return (...args: any[]) => {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => func.apply(null, args), delay)
        }
    }

    const debouncedShowButton = useCallback(
        debounce(() => setShowButton(true), 500),
        []
    )

    const checkForbiddenWords = (value: string) => {
        const hasForbiddenWord = forbiddenWords.some(word => 
            value.toLowerCase().includes(word.toLowerCase())
        )
        
        if (hasForbiddenWord) {
            setShowError(true)
            setShowButton(false)
            setPhtNameClass('-angry')
        } else {
            setShowError(false)
            setShowButton(false)
            debouncedShowButton()
            setPhtNameClass('-default')
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setNewInput(value)
        if (value.trim() !== '') {
            checkForbiddenWords(value)
        } else {
            setShowButton(false)
            setShowError(false)
        }
    }

    const saveChanges = (): void => {
        setLabel(newInput)
        setNewInput('')
        setShowButton(false)
        console.log('новое имя:', newInput)
    }

    return (
        <div className="banner">
            <div className="banner__row">
                <div className="row__column">
                    <Photo changeClass={phtNameClass} />
                    <Field
                        label={label}
                        value={newInput}
                        onChange={handleInputChange}
                    />
                    {showButton && !showError && <Button className="column__button" onClick={saveChanges} />}
                </div>
                <div className="row__column">
                    {showError && <Error />}
                    {!showError && <Text />}
                </div>
            </div>
        </div>
    )
}

export default Banner


