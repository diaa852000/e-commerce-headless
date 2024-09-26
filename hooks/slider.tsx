import { Slide } from "@/types";
import { useEffect, useState, useRef } from "react";

export default function useSlides(slides: Slide[]) {
    const [current, setCurrent] = useState<number>(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null); 

    const startInterval = () => {
        intervalRef.current = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 3000);
    };

    const clearIntervalRef = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const handleClickSlots = (idx: number) => setCurrent(idx);

    // useEffect(() => {
    //     startInterval(); 

    //     return () => clearIntervalRef(); 
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    const handleMouseEnter = () => clearIntervalRef();
    const handleMouseLeave = () => startInterval();

    return {
        current,
        handleClickSlots,
        handleMouseEnter,
        handleMouseLeave
    };
}
