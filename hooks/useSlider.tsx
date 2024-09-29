/* eslint-disable react-hooks/exhaustive-deps */
import { Slide } from "@/types";
import { useEffect, useState, useRef, MutableRefObject } from "react";

// TODO: make it for all slides, if you can handle the state with another approach

export default function useSlides(slides: Slide[]) {
    const [current, setCurrent] = useState<number>(0);

    const heroSliderInterval = useRef<NodeJS.Timeout | null>(null);

    const startInterval = (interval: MutableRefObject<NodeJS.Timeout | null>) => {
        interval.current = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 3000);
    };

    const clearIntervalRef = (interval: MutableRefObject<NodeJS.Timeout | null>) => {
        if (interval.current) clearInterval(interval.current);
    };

    const handleClickSlots = (idx: number) => setCurrent(idx);

    const handleMouseEnter = (interval: MutableRefObject<NodeJS.Timeout | null>) => clearIntervalRef(interval);
    
    const handleMouseLeave = (interval: MutableRefObject<NodeJS.Timeout | null>) => startInterval(interval);
    

    useEffect(() => {
        startInterval(heroSliderInterval);

        return () => clearIntervalRef(heroSliderInterval);
    }, []);

    return {
        current,
        heroSliderInterval,
        handleClickSlots,
        handleMouseEnter,
        handleMouseLeave,
    };
}
