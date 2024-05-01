import styles from './styles.module.css'

export default function Navbar() {
    return (
        <header className={styles.navbar}>
            <div>
                <span>saldo atual</span>
                <p>R$ 2.935,56</p>
            </div>
            <i className="ph ph-eye-slash"></i>
        </header>
    )
}