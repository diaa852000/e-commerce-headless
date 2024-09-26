import Image from "next/image";
import Link from "next/link";


export default function Logo() {
    return (
        <div className={`flex items-center gap-3`}>
            <Image
                src={'/logo.png'}
                alt="logo"
                width={24}
                height={24}
            />
            <Link href={'/'} className="tracking-wide uppercase text-2xl outline-none">
                logo
            </Link>
        </div>
    )
}
