import { createContext, useState } from "react"

type MonthsContextProps = {
    month: number
    year: number
    setMonth: (month: number) => void
    setYear: (year: number) => void
}

const MonthsContext = createContext<MonthsContextProps>({} as MonthsContextProps)

function MonthsProvider({ children }: {children: React.ReactNode}) {
    const [month, setMonth] = useState(new Date().getMonth())
    const [year, setYear] = useState(new Date().getFullYear())

    return (
        <MonthsContext.Provider
            value={{
                month,
                year,
                setMonth,
                setYear
            }}
        >
            {children}
        </MonthsContext.Provider>
    )
}

export { MonthsContext, MonthsProvider }