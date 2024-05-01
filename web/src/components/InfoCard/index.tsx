import styles from './styles.module.css'

interface InfoCardProps {
    title: string
    subtitle: string
    icon: string
    type?: 'default' | 'info' | 'success' | 'danger'
}

const backgroundColors = {
    default: 'var(--border)',
    info: 'var(--blue-100)',
    success: 'var(--green-100)',
    danger: 'var(--red-100)'
}

const iconColors = {
    default: 'black',
    info: 'var(--blue-500)',
    success: 'var(--primary)',
    danger: 'var(--danger)'
}

export default function InfoCard({ title, subtitle, icon, type = 'default' }: InfoCardProps) {
    const getColor = () => {
        return {
            backgroundColor: backgroundColors[type],
            color: iconColors[type]
        }
    }

    return (
        <div className={styles.container}>
            <span 
                className={icon} 
                style={getColor()}>  
            </span>
            <div>
                <span>{title}</span>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}