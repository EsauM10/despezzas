import CreditCards from '../../components/CreditCards'
import Expenses from '../../components/Expenses'
import Goals from '../../components/Goals'
import InfoCard from '../../components/InfoCard'
import Months from '../../components/Months'
import useMonth from '../../hooks/useMonth'
//import { socket } from '../../hooks/useOxygen'
import styles from './styles.module.css'


export default function HomePage() {
    const { month, year } = useMonth()
    /*const sendMessage = () => {
        socket.emit('hello', {'page': 'Home'})
    }*/

    return (
        <div className={styles.container}>
            <header>
                <span></span>
                <Months />
                <button onClick={() => console.log(month, year)}>
                    <i className='ph ph-math-operations'></i>
                </button>
            </header>
            <div className={styles.topContent}>
                <section className={styles.insights}>
                    <InfoCard />
                    <InfoCard />
                    <InfoCard />
                    <InfoCard />
                </section>
                <section className={styles.creditCards}>
                    <CreditCards />
                </section>
            </div>
            <div className={styles.bottomContent}>
                <section>
                    <Expenses />
                </section>
                <section>
                    <Goals />
                </section>
            </div>

        </div>
    )
}