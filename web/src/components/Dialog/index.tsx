import styles from "./styles.module.css"

interface DialogProps {
    visible: boolean
    children?: React.ReactNode
}

export default function Dialog({ visible, children }: DialogProps) {
    return (
        <div className={styles.container}>
            {visible && (
                <div className={styles.menu}>
                    { children }
                </div>
            )}
        </div>
    )
}