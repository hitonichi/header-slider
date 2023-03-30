import styles from './styles.module.css'

const Title = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <i className="fa-brands fa-windows"></i>
            </div>
            <div className="title">
                HDBank
            </div>
        </div>
    )
}

export default Title;