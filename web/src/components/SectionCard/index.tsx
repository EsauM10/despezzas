import styles from './styles.module.css'

type SectionCardProps = {
    icon: string
    text: string
    strongText: string
    children?: React.ReactNode
}

interface EmptyCardProps {
    text: string
    onClick: VoidFunction
}

function EmptyCard({ text, onClick}: EmptyCardProps) {
    return (
        <div className={styles.empty}>
            <p>{text}</p>
            <button onClick={onClick}>
                adicionar
            </button>
        </div>
    )
}

function SectionCard({ icon, text, strongText, children}: SectionCardProps) {
    return (
        <div className={styles.container}>
            <header>
                <i className={icon}></i>
                <p>{text}</p>
                <strong>{strongText}</strong>
            </header>
            <main>
                { children }
            </main>
        </div>
    )
}

export { EmptyCard, SectionCard }