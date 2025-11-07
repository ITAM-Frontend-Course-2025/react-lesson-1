import { createContext } from "react";

export interface CounterContextType{
    counter:number
    toggleCounterUp:()=>void
    toggleCounterDown:()=>void
}

export const CounterContext=createContext<CounterContextType | undefined>(
    undefined
)

