"use client"

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation}  from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ArrowLeft, ArrowRight } from "lucide-react";


export default function CategoryList() {
    return (
        <div className="px-4 overflow-x-scroll scrollbar-hide">
            <div className="flex gap-4 md:gap-8 relative">
                <Swiper
                    spaceBetween={60}
                    slidesPerView={1}
                    breakpoints={{
                        730: {
                            slidesPerView: 2,
                        },
                        780: {
                            slidesPerView: 3,
                        },
                        1100: {
                            slidesPerView: 4,
                        },
                        1500: {
                            slidesPerView: 5
                        },
                        1700: {
                            slidesPerView: 6
                        },
                    }}  
                    modules={[Navigation]}
                    navigation
                    loop
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <Link href={'/list?cat=test'} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                            <div className="relative bg-slate-100 w-full h-96">
                                <Image
                                    src={'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                    alt=""
                                    fill
                                    sizes="20vw"
                                    className="object-cover"
                                />
                            </div>
                            <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href={'/list?cat=test'} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                            <div className="relative bg-slate-100 w-full h-96">
                                <Image
                                    src={'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                    alt=""
                                    fill
                                    sizes="20vw"
                                    className="object-cover"
                                />
                            </div>
                            <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href={'/list?cat=test'} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                            <div className="relative bg-slate-100 w-full h-96">
                                <Image
                                    src={'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                    alt=""
                                    fill
                                    sizes="20vw"
                                    className="object-cover"
                                />
                            </div>
                            <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href={'/list?cat=test'} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                            <div className="relative bg-slate-100 w-full h-96">
                                <Image
                                    src={'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                    alt=""
                                    fill
                                    sizes="20vw"
                                    className="object-cover"
                                />
                            </div>
                            <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href={'/list?cat=test'} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                            <div className="relative bg-slate-100 w-full h-96">
                                <Image
                                    src={'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                    alt=""
                                    fill
                                    sizes="20vw"
                                    className="object-cover"
                                />
                            </div>
                            <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href={'/list?cat=test'} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                            <div className="relative bg-slate-100 w-full h-96">
                                <Image
                                    src={'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                    alt=""
                                    fill
                                    sizes="20vw"
                                    className="object-cover"
                                />
                            </div>
                            <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href={'/list?cat=test'} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                            <div className="relative bg-slate-100 w-full h-96">
                                <Image
                                    src={'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                    alt=""
                                    fill
                                    sizes="20vw"
                                    className="object-cover"
                                />
                            </div>
                            <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
                        </Link>
                    </SwiperSlide>
                </Swiper>
                <ArrowRight className="swiper__navigation-btn absolute right-2 top-1/2 -translate-y-1/2 z-20  pointer-events-none"/>
                <ArrowLeft className="swiper__navigation-btn absolute left-2 top-1/2 -translate-y-1/2 z-20  pointer-events-none"/>
            </div>
        </div>
    )
}
