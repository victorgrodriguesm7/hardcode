import { createContext, useContext, useState } from "react";

interface State {
    currentSlide: number;
    goToNext: () => void;
    hasNext: boolean;
    goToPrevious: () => void;
    hasPrevious: boolean;

    percentage: number;

    changeTotal: (total: number) => void;
}

const context = createContext<State>({} as State);

interface Props {
    children: React.ReactNode;
}

const SliderProvider = ({ children }: Props) => {
    const [currentSlide, setSlide ] = useState(0);
    const [totalSlides, setTotal ] = useState(0);

    const percentage = ((currentSlide + 1) / totalSlides) * 100;
    const hasNext = currentSlide + 1 < totalSlides;
    const hasPrevious = currentSlide - 1 >= 0;

    function goToNext(){
        if (hasNext){
            setSlide((slide) => slide + 1)
        }
    }

    function goToPrevious(){
        if (hasPrevious){
            setSlide((slide) => slide - 1)
        }
    }

    function changeTotal(total: number){
        setTotal(total);
    }


    const value = {
        currentSlide,
        hasNext,
        goToNext,
        hasPrevious,
        goToPrevious,
        changeTotal,
        percentage
    } as State;

    return (
        <context.Provider value={value}>
            { children }
        </context.Provider>
    )
}

export default SliderProvider;

export function useSlide(){
    return useContext(context);
}