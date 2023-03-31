import styles from './styles.module.css'
import logo from '../../assets/images/logo.png'

const Title = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img
                    src={logo}
                    alt='logo'></img>
            </div>
            {/* <div className={styles.logo}>
                <i className="fa-brands fa-windows"></i>
            </div>
            <div className="title">
                HDBank
            </div> */}
        </div>
    )
}

export default Title;