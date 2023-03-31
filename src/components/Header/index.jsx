import Slider from '../HeaderSlider';
import Title from '../HeaderTitle';
import UserNav from '../UserNavigation';
import styles from './styles.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <Title></Title>
            <Slider></Slider>
            <UserNav></UserNav>
        </div>
    )
}

export default Header;