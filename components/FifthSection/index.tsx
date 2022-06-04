import Image from 'next/image';
import styles from '../../styles/components/FifthSection.module.css';
import Slider from '../Slider';
import SliderProvider, { useSlide } from '../Slider/context/context';

const FifthSection = () => {
    const {
        hasNext,
        hasPrevious,
        goToNext,
        goToPrevious,
        percentage
    } = useSlide();
    
    return (
        <section className={styles.container}>
            <div className={styles.actionsContainer}>
                <button
                    onClick={goToPrevious}
                    disabled={!hasPrevious}
                    className={styles.action}
                    type="button">
                    Anterior
                </button>
                <button
                    onClick={goToNext}
                    disabled={!hasNext}
                    className={styles.action}
                    type="button">
                    Próximo
                </button>
            </div>
            <Slider
                minHeight={655}>
                <div className={styles.imageContainer}>
                    <Image
                        src="/assets/fifth-section/slide-1.png"
                        layout='fill'/>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="/assets/fifth-section/slide-2.png"
                        layout='fill'/>
                </div>
            </Slider>
            <div className={styles.loadingBar}>
                <div className={styles.bar} style={{ right: `${100 - percentage}%`}}/>
            </div>
        </section>
    )
}

function Wrapper(){
    return (
        <SliderProvider>
            <FifthSection/>
        </SliderProvider>
    )
}

export default Wrapper;