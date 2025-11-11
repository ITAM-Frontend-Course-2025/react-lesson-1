import { useState, type ReactNode } from 'react'
import {CounterContext} from './counter-context'

type CounterProviderProps={
    children:ReactNode
}

export function CounterProvider({children}:CounterProviderProps){

    const[counter,setCounter]=useState(0)

    const toggleCounterUp=()=>{
        setCounter(counter+1)
    }

    const toggleCounterDown=()=>{
        setCounter(counter-1)
    }

    return (
        <CounterContext.Provider value={{counter,toggleCounterUp,toggleCounterDown}}>
            {children}
        </CounterContext.Provider>
    )

}