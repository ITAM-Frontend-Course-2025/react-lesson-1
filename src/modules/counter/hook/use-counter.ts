import { useContext } from "react"
import { CounterContext } from "../contexts/counter-context"

export const useCounter=()=>{
    const context=useContext(CounterContext)

    if(!context){
        throw new Error('useCountre dont work ')
    }

    return context
}