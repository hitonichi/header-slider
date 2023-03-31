import AccountInfo from '../AccountInfo'
import styles from './styles.module.css'

const UserNav = () => { 
    return (
        <div className={styles.container}>
            <div className={styles.searchBtn}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <AccountInfo></AccountInfo>
        </div>
    )
}

export default UserNav;