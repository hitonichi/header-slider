import styles from './styles.module.css'

const UserNav = () => {
    const name = "Khoa"
    const profilePic = "https://th.bing.com/th/id/R.aae2d15c8629241eaa3519793323169f?rik=wJQcBdF%2fkSrg7w&pid=ImgRaw&r=0"
    
    return (
        <div className={styles.container}>
            <div className={styles.searchBtn}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className={styles.usrInfo}>
                <div className={styles.usrName}>
                    {name}
                </div>
                <div className={styles.imgContainer}>
                    <img 
                        className={styles.usrProfile}
                        src={profilePic} 
                        alt="Profile" />
                </div>
            </div>
            <div className={styles.navBtn}>
                <i className="fa-solid fa-circle-info"></i>
            </div>
            <div className={[styles.navBtn, styles.noti].join(' ')}>
                <i className="fa-solid fa-bell"></i>
            </div>
            <div className={styles.navBtn}>
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </div>
        </div>
    )
}

export default UserNav;