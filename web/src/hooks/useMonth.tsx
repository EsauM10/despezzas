import { useContext } from "react"
import { MonthsContext } from "../contexts/months"

export default function useMonth() {
    const { month, year, setMonth, setYear } = useContext(MonthsContext)
    const january = 0
    const december = 11

    const incrementMonth = (size: number) => {
        if(month + size < january) {
            setMonth(december)
            setYear(year - 1)
        }
        else if(month + size > december){
            setMonth(january)
            setYear(year + 1)
        }
        else {
            setMonth(month + size)
        }
    }
    return {
        month, 
        year,
        incrementMonth
    }
}