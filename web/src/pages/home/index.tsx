import styles from './styles.module.css'
import { useState } from 'react'
import CreditCards from '../../components/CreditCards'
import Dialog from '../../components/Dialog'
import Expenses from '../../components/Expenses'
import Goals from '../../components/Goals'
import InfoCard from '../../components/InfoCard'
import Months from '../../components/Months'
import useMonth from '../../hooks/useMonth'
import ActionButton from '../../components/ActionButton'
//import { socket } from '../../hooks/useOxygen'


export default function HomePage() {
    const { month, year } = useMonth()
    const [visible, setVisible] = useState(false)

    /*const sendMessage = () => {
        socket.emit('hello', {'page': 'Home'})
    }*/

    const handleOnClick = () => {
        console.log(month, year)
        setVisible(!visible)
    }

    return (
        <div className={styles.container}>
            <header>
                <span></span>
                <Months />
                <button onClick={handleOnClick}>
                    <i className='ph ph-math-operations'></i>
                    <Dialog visible={visible}>
                        <ActionButton 
                            icon='ph ph-caret-circle-down' 
                            color='var(--danger)'
                            title='adicionar' 
                            subtitle='despesa'
                            onClick={() => {}}
                        />
                        <ActionButton 
                            icon='ph ph-caret-circle-up' 
                            color='var(--primary)'
                            title='adicionar' 
                            subtitle='receita'
                            onClick={() => {}}
                        />        
                    </Dialog>
                </button>
            </header>
            <div className={styles.topContent}>
                <section>
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
                <section>
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