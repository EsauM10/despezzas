import styles from './styles.module.css'
import useMonth from '../../hooks/useMonth'

const months = [
    'janeiro', 
    'fevereiro', 
    'março', 
    'abril', 
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
]

export default function Months() {
    const { month, incrementMonth } = useMonth()
    const january = 0
    const december = 11

    const getMonth = (monthIndex: number): string => {
        if(monthIndex < january) {
            return months[december]
        }
        if(monthIndex > december) {
            return months[january]
        }
        return months[monthIndex]
    }

    const onLeftButtonClicked = () => {
        incrementMonth(-1)
    }

    const onRightButtonClicked = () => {
        incrementMonth(1)
    }

    return (
        <div className={styles.months}>
            <i className='ph ph-arrow-circle-left' onClick={onLeftButtonClicked}/>
            <ul>
                <li>{getMonth(month - 1)}</li>
                <li className={styles.current}>{getMonth(month)}</li>
                <li>{getMonth(month + 1)}</li>
            </ul>
            <i className='ph ph-arrow-circle-right' onClick={onRightButtonClicked}/>
        </div>
        
    )
}
