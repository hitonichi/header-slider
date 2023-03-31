import SliderItem from '../SliderItem'
import styles from './styles.module.css'

const Slider = () => {
    const contents = [
        "!!!Lorem ipsum dolor sit.",
        "Lorem ipsum dolor sit.",
        "Lorem ipsum dolor sit.",
        "Lorem ipsum dolor sit.",
        "Lorem ipsum dolor sit.",
        "Lorem ipsum dolor sit."
    ]
    
    return (
        <div className={styles.wrapper}>
            {/* <div className={styles.background}></div> */}
            {/* <marquee behavior="scroll" direction="left"> */}
                <div className={styles.container}>
                    <div className={styles.banner}>
                        {contents.map((c, id) => (
                            <SliderItem key={id} content={c}></SliderItem>
                        ))}
                        {contents.map((c, id) => (
                            <SliderItem key={id} content={c}></SliderItem>
                        ))}
                    </div>
                    {/* {contents.map((c, id) => (
                        <SliderItem key={id} content={c}></SliderItem>
                    ))} */}
                </div>
            {/* </marquee> */}
        </div>
    )
}

export default Slider