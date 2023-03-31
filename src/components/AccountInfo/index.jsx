import { useState } from 'react';
import styles from './styles.module.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'

const AccountInfo = () => {
    const [isLoggedin, setLogin] = useState(false);
    
    const name = "Khoa"
    const profilePic = "https://th.bing.com/th/id/R.aae2d15c8629241eaa3519793323169f?rik=wJQcBdF%2fkSrg7w&pid=ImgRaw&r=0"
    
    return (
        <>
        {isLoggedin ? (
            <>
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
            <div className={[styles.navBtn, styles.logOut].join(' ')}
                onClick={() => {
                    setLogin(false);
                }}
            >
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </div>
            </>
        ) : (
            <Popup
                trigger={<button className={[styles.navBtn, styles.logIn].join(' ')}>Log In</button>}
                modal
                nested
            >
                {close => (
                    <div className={styles.modal}>
                        <button className={styles.modalClose} onClick={close}>
                            &times;
                        </button>
                        <div className={styles.modalHeader}>Log In</div>
                        <div className={styles.modalContent}>
                            {/* {' '} */}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, aliquid.
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, aliquid.
                        </div>
                        <div className={styles.modalActions}>
                            <button
                                className={styles.modalNavBtn}
                                onClick={() => {
                                    setLogin(true);
                                    console.log('modal closed');
                                    close()
                                }}
                            >
                                Log In
                            </button>
                            <button
                                className={styles.modalNavBtn}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                )}
            </Popup>
        )}

        </>
    )
}

export default AccountInfo