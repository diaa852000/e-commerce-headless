import Filter from "@/components/filter";
import ProductList from "@/components/lists/product-list";
import Image from "next/image";

export default function ListPage() {
    return (
        <div className="padding-x">
            <section className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
                <div className="w-2/3 flex flex-col items-center justify-center gap-8">
                    <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
                        Grab up to 50% off on 
                        <br/>Selected Products
                    </h1>
                    <button 
                        type="button"
                        className="capitalize rounded-3xl bg-primary text-white w-max text-sm font-semibold py-3 px-5"
                    >
                        but now
                    </button>
                </div>
                <div className="relative w-1/3">
                    <Image
                        src={'/woman.png'}
                        alt=""
                        fill
                        className="object-contain"
                    />
                </div>
            </section>

            <Filter/>

            <h1 className="mt-12 text-xl font-semibold">Shoes For You</h1>
            <ProductList/>
        </div>
    )
}
