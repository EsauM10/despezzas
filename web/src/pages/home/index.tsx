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
                    <InfoCard 
                        title='receitas' 
                        subtitle='R$ 3.862,00'
                        icon='ph ph-currency-circle-dollar'
                        type='success'/>
                    <InfoCard 
                        title='despesas' 
                        subtitle='R$ 1.043,87' 
                        icon='ph ph-currency-circle-dollar'
                        type='danger'/>
                    <InfoCard 
                        title='pagas' 
                        subtitle='R$ 1.043,87'
                        icon='ph ph-check-circle'  
                        type='info'/>
                    <InfoCard 
                        title='saldo do mês' 
                        subtitle='R$ 2.818,13' 
                        icon='ph ph-plus-minus'
                    />
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