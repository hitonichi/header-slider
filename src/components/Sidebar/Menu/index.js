import { BsHouseDoor, BsWallet, BsBank } from 'react-icons/bs';
import { BiDollarCircle, BiCreditCard, BiMedal, BiPhoneCall } from 'react-icons/bi';
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import { MdAccountBalanceWallet } from 'react-icons/md';
import { TbArrowsRightLeft, TbPuzzle, TbNotebook, TbStack2, TbApps } from 'react-icons/tb';
import { FaHandHoldingUsd } from 'react-icons/fa';

import MenuItem from '../MenuItem';
import styles from './Menu.module.css';

const menu = [
    {
        title: 'Mở tài khoản',
        href: '/content1',
        backgroundColor: 'red',
        icon: MdAccountBalanceWallet
    },
    {
        title: 'Nộp tiền',
        href: '/content2',
        backgroundColor: 'green',
        icon: BsWallet
    },
    {
        title: 'Rút tiền',
        href: '/content3',
        backgroundColor: 'blue',
        icon: BiDollarCircle
    },
    {
        title: 'Chuyển tiền',
        href: '/content4',
        backgroundColor: 'pink',
        icon: TbArrowsRightLeft
    },
    {
        title: 'Mở thẻ',
        href: '/content5',
        backgroundColor: 'orange',
        icon: BiCreditCard
    },
    {
        title: 'KH ưu tiên',
        href: '/content6',
        backgroundColor: 'yellow',
        icon: BiMedal
    },
    {
        title: 'Portal training',
        href: '/content7',
        backgroundColor: 'green2',
        icon: TbPuzzle
    },
    {
        title: 'Kiều hối',
        href: '/content8',
        backgroundColor: 'pink2',
        icon: BsBank
    },
    {
        title: 'Thu phí',
        href: '/content9',
        backgroundColor: 'blue2',
        icon: FaHandHoldingUsd
    },
    {
        title: 'Gọi khách hàng',
        href: '/content10',
        backgroundColor: 'orange2',
        icon: BiPhoneCall
    },
    {
        title: 'TK tiết kiệm',
        href: '/content11',
        backgroundColor: 'mint',
        icon: TbNotebook
    },
    {
        title: 'Yêu cầu khác',
        href: '/content12',
        backgroundColor: 'purple',
        icon: TbStack2
    },
    {
        title: 'Tất cả yêu cầu',
        href: '/content13',
        backgroundColor: 'gray',
        icon: TbApps
    },
];

function Menu() {
    return (
        <div className={styles.container}>
            {/* <div className={styles.buttonContainer}>
                <button className={styles.button}>
                    <HiOutlineArrowSmRight className={styles.buttonIcon} />
                </button>
            </div> */}
            <div className={styles.home}>
                <BsHouseDoor className={styles.homeIcon} />
            </div>
            <div className={styles.itemContainer}>
                {menu.map((item, index) => (
                    <MenuItem key={index} {...item}/>
                ))}
            </div>
        </div>
    );
}

export default Menu;