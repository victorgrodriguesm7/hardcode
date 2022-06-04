import Image from 'next/image';
import useMobile from '../../hooks/useMobile';
import styles from '../../styles/components/FifthSection.module.css';
import Slider from '../Slider';
import SliderProvider, { useSlide } from '../Slider/context/context';

const images = [
    "/assets/fifth-section/slide-1.png",
    "/assets/fifth-section/slide-2.png"
];

const mobileImages = [
    "/assets/fifth-section/slide-1-mobile.png",
    "/assets/fifth-section/slide-1-mobile.png"
];

const FifthSection = () => {
    const { isMobile } = useMobile();
    const {
        hasNext,
        hasPrevious,
        goToNext,
        goToPrevious,
        percentage
    } = useSlide();

    const slides = isMobile ? mobileImages : images;
    const minHeight = isMobile ? 980 : 655
    
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
                minHeight={minHeight}>
                    {
                        slides.map((slide, i) => {
                            return (
                                <div
                                    key={i}
                                    className={styles.imageContainer}>
                                    <Image
                                        src={slide}
                                        layout='fill'/>
                                </div>
                            )
                        })
                    }
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