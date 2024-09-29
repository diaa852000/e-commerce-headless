'use client';

import { slides } from "@/constants";
import useSlides from "@/hooks/useSlider";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Slider() {
    const {current, handleClickSlots, handleMouseEnter, handleMouseLeave, heroSliderInterval} = useSlides(slides);

    return (
        <div 
            className="h-[calc(100dvh-80px)] overflow-hidden" 
            onMouseEnter={() => handleMouseEnter(heroSliderInterval)}
            onMouseLeave={() => handleMouseLeave(heroSliderInterval)}
        >
            <div className="w-max h-full flex transition-all ease-in-out duration-1000" style={{transform: `translateX(-${current * 100}dvw)`}}>
                {slides.map((slide) => (
                    <div
                        className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
                        key={slide.id}
                    >
                        {/* TEXT_CONTAINER */}
                        <div className="w-1/2 h-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center mx-auto">
                            <h2 className="text-xl lg:text-3xl 2xl:text-5xl text-center">{slide.description}</h2>
                            <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h1>
                            <Link
                                href={slide.url}
                                className="uppercase rounded-md bg-black text-white px-4 py-3 inline-block 
                                border border-transparent hover:bg-transparent hover:text-black/80 hover:border-black/80 transition-all group 
                                overflow-hidden relative duration-300 ease-in"
                            >
                                <span className="group-hover:translate-x-[100px] block transform transition-transform duration-300">shop now</span>
                                <ShoppingCart className="absolute -left-[50px] group-hover:translate-x-[98px] block transform transition-transform duration-300 top-1/2 -translate-y-1/2" />
                            </Link>
                        </div>
                        {/* IMAGE_CONTAINER */}
                        <div className="relative w-full xl:w-1/2 h-1/2 xl:h-full">
                            <Image
                                src={slide.img}
                                alt=""
                                fill
                                priority
                                sizes="100%"
                                className="object-cover object-top"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute m-auto bottom-8 left-1/2 flex gap-4">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === idx ? 'scale-150' : ''}`}
                        type="button"
                        onClick={() => handleClickSlots(idx)}
                    >
                        {current === idx && <span className="w-[6px] h-[6px] bg-gray-600 rounded-full" />}
                    </button>
                ))}
            </div>
        </div>
    )
}
