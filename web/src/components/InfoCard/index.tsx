import styles from './styles.module.css'


export default function InfoCard() {
    return (
        <div className={styles.container}>
            <span className='ph ph-currency-circle-dollar'></span>
            <div>
                <span>receitas</span>
                <p>R$ 3.862,00</p>
            </div>
        </div>
    )
}