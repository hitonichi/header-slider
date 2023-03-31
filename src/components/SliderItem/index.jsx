import styles from './styles.module.css'

const SliderItem = ({content}) => {
    return (
        <div className={styles.container}>
            <i className="fa-solid fa-meteor"></i>
            {content}
        </div>
    )
}

export default SliderItem;