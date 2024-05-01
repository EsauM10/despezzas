import styles from './styles.module.css'

export type SidebarItems = {
    name: string
    icon: string
    component: React.JSX.Element
    active: boolean
}

interface SidebarProps {
    pages: SidebarItems[]
    setPage: (index: number) => void
}

export default function Sidebar({ pages, setPage }: SidebarProps) {
    const handleOnClick = (pageName: string) => {
        pages.forEach((page, index) => {
          if(page.name === pageName){
            page.active = true
            setPage(index)
          }
          else {
            page.active = false
          }
        })
    }
    
    return (
        <ul className={styles.sidebar}>
            {pages.map((page, index) => (
                <li 
                    className={page.active ? `${styles.item} ${styles.active}`: styles.item} 
                    key={index}
                    onClick={() => handleOnClick(page.name)}
                >
                    <i className={page.icon}></i>
                    {page.name}
                </li>
            ))}
        </ul>
    )
}