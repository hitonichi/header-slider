import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MenuItem.module.css';

function MenuItem({ title, href, backgroundColor, icon}) {
    const IconElement = icon;
    let iconColor = '';

    switch (backgroundColor) {
        case 'red': iconColor = styles.red; break;
        case 'green': iconColor = styles.green; break;
        case 'blue': iconColor = styles.blue; break;
        case 'pink': iconColor = styles.pink; break;
        case 'orange': iconColor = styles.orange; break;
        case 'yellow': iconColor = styles.yellow; break;
        case 'green2': iconColor = styles.green; break;
        case 'pink2': iconColor = styles.pink2; break;
        case 'blue2': iconColor = styles.blue2; break;
        case 'orange2': iconColor = styles.orange2; break;
        case 'mint': iconColor = styles.mint; break;
        case 'purple': iconColor = styles.purple; break;
        case 'gray': iconColor = styles.gray; break;
        default: iconColor = '';
    }

    return (
        <NavLink 
            className={({ isActive }) =>  
                `${styles.container} ` + 
                (isActive ? `${styles.active} ${styles.containerActive}` : styles.notActive)
            } 
            to={href}
        >
            <div className={styles.border}></div>
            <span className={`${styles.itemIcon} ${iconColor}` }>
                <IconElement className={styles.icon} />
            </span>
            <p className={styles.title}>{title}</p>
        </NavLink>
    );
}

export default MenuItem;