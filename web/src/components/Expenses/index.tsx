import styles from './styles.module.css'
import { SectionCard } from '../SectionCard'


const expenses: ExpenseDTO[] = []

export default function Expenses() {
    return (
        <SectionCard 
            icon='ph ph-basket'
            text='todas as'
            strongText='despesas'
        >            
            <ul className={styles.expenses}>
                {expenses.map((item) => (
                    <li key={item.id}>
                        <div>
                            <img src="" alt="" />
                            <div>
                                <h1>{item.title}</h1>
                                <span>{item.status}</span>
                                <p>{item.category}</p>
                            </div>
                        </div>
                        <aside>
                            <h1>único</h1>
                            <h2>R$ {item.value}</h2>
                            <p>{item.date}</p>
                        </aside>
                    </li>
                ))}
            </ul>
        </SectionCard>
    )
}