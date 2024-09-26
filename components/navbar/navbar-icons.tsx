"use client";

import useNavbarLinks from "@/hooks/navbar-icons";
import { Bell, CircleUser, ShoppingCart } from "lucide-react";
import Link from "next/link";
import CartModal from "../cartModal";



export default function NavbarIcons() {
    const { isCartOpen, isProfileOpen, toggleCart, toggleProfile } = useNavbarLinks();

    return (
        <div className="flex items-center gap-4 xl:gap-6 relative">
            <button
                type="button"
                onClick={toggleProfile}
                className="w-6 h-6"
            >
                <CircleUser strokeWidth={'1.4px'} />
            </button>
            {isProfileOpen && (
                <div className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-1 rounded-md absolute top-10 left-0 flex flex-col items-center gap-1 w-24 text-sm z-20">
                    <Link href={'/'} className="w-full rounded text-center hover:bg-gray-50 transition-colors py-2">Profile</Link>
                    <button className="w-full rounded hover:bg-gray-50 transition-colors py-2">Logout</button>
                </div>
            )}

            <button className="w-6 h-6">
                <Bell strokeWidth={'1.4px'} />
            </button>

            <div className="relative cursor-pointer">
                <button
                    type="button"
                    onClick={toggleCart}
                    className="w-6 h-6"
                >
                    <ShoppingCart strokeWidth={'1.4px'} />
                </button>
                <span className="absolute -top-3 -right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm">2</span>
            </div>
            {isCartOpen && <CartModal />}
        </div>
    )
}
