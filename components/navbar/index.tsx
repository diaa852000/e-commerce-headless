import Logo from "../logo"
import MobileNavbar from "./mobile-navbar"
import SearchBar from "./search-bar"
import NavbarIcons from "./navbar-icons"
import Link from "next/link"


export default function Navbar() {
    return (
        <header className="h-20 padding-x relative">
            <div className="md:hidden relative flex w-full justify-between h-full">
                <Logo />
                <div>
                    <MobileNavbar />
                </div>
            </div>
            <div className="hidden md:flex items-center justify-between h-full w-full gap-8">
                <div className="w-1/3 lg:w-1/2 flex items-center gap-8 xl:gap-16">
                    <Logo />
                    <div className="hidden lg:flex items-center gap-4 text-lg capitalize">
                        <Link href={'/'}>Home</Link>
                        <Link href={'/'}>Shop</Link>
                        <Link href={'/'}>Deals</Link>
                        <Link href={'/'}>About</Link>
                        <Link href={'/'}>Contact</Link>
                    </div>
                </div>
                <div className="w-2/3 lg:w-1/2 flex items-center justify-between gap-8">
                    <SearchBar />
                    <NavbarIcons />
                </div>
            </div>
        </header>
    )
}
