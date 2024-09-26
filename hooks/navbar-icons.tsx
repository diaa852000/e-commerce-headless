import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useNavbarLinks() {
    const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

    const router = useRouter();

    const isLoggedIn = false;

    const toggleProfile = () => {
        if(!isLoggedIn) router.push('/login');

        setIsProfileOpen(prev => !prev);
    }

    const toggleCart = () => {
        setIsCartOpen(prev => !prev);
    }

    return {
        isProfileOpen,
        isCartOpen,
        toggleCart,
        toggleProfile,
    }

}