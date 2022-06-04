import React, { useEffect } from "react";
import { useSlide } from "./context/context";
import styles from '../../styles/components/Slider.module.css';

interface Props {
    className?: string;
    children: React.ReactNode;
    minHeight?: string | number;
}

const Slider = ({
    className = '',
    minHeight = "auto",
    children
}: Props) => {
    const { currentSlide, changeTotal } = useSlide();

    useEffect(() => {
        const total = React.Children.count(children);

        changeTotal(total);
    }, [])
    

    return (
        <div style={{ minHeight }} className={`${styles.slider} ${className}`}>
            { React.Children.map(children, (child, index) => {
                const zIndex = index !== currentSlide ? -1 : 0;

                return (
                    <div className={styles.slide} style={{ zIndex }}>
                        { child }
                    </div>
                )
            })}
        </div>
    )
}

export default Slider;