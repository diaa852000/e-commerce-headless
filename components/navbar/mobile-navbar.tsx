"use client";

import { useState } from "react";
import { Menu, XIcon } from "lucide-react";
import Logo from "../logo";
import Link from "next/link";

export default function MobileNavbar() {
    const [isOpen, setisOpen] = useState<boolean>(false)

    const handleToggleNavbar = () => setisOpen(prev => !prev);

    return (
        <>
            <div className="flex h-full justify-end items-center">
                <button
                    type="button"
                    className="w-7 h-7"
                    onClick={handleToggleNavbar}
                >
                    <Menu className="w-full h-full" />
                </button>
            </div>
            <nav className={`fixed top-0 transform ${isOpen ? 'left-0' : '-left-[200vw]'} transition-all duration-300 bg-white z-10 h-dvh w-full px-4`}>
                <div className="flex items-center justify-between h-20 border-b">
                    <button
                        type="button"
                        className="w-6 h-6"
                        onClick={handleToggleNavbar}
                    >
                        <XIcon className="w-full h-full" />
                    </button>
                    <Logo />
                </div>
                <div className="flex flex-col justify-center items-center mt-20 text-3xl text-center uppercase tracking-wide">
                    <Link className="pt-4" href={'/'}>Home</Link>
                    <Link className="pt-4" href={'/'}>Shop</Link>
                    <Link className="pt-4" href={'/'}>Deals</Link>
                    <Link className="pt-4" href={'/'}>About</Link>
                    <Link className="pt-4" href={'/'}>Contact</Link>
                    <Link className="pt-4" href={'/'}>Logout</Link>
                    <Link className="pt-4" href={'/'}>Cart (1)</Link>
                </div>
            </nav>
        </>
    )
}