"use client";

import Image from "next/image";

export default function CartModal() {
    const cartItems = true;

    return (
        <div className="w-[300px] absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
            {!cartItems ? (
                <div className="text-center font-semibold">Cart is Empty</div>
            ) : (
                <>
                    <h2 className="text-xl font-medium">Shipping Cart</h2>
                    <div className="flex flex-col gap-8">
                        <div className="flex gap-4">
                            <Image
                                src={'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                alt=""
                                width={72}
                                height={100}
                                priority
                                className="object-cover rounded-md w-[72px] h-[100px]"
                            />
                            <div className="flex flex-col  justify-between w-full">
                                <div className="">
                                    <div className="flex items-center justify-between gap-8">
                                        <h3 className="font-semibold">Product Name</h3>
                                        <div className="p-1 bg-gray-50 rounded-md">$49</div>
                                    </div>
                                    <div className="text-sm text-gray-500 text-wrap">
                                        avialable
                                    </div>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Qty. 2</span>
                                    <span className="text-blue-500">Remove</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between font-semibold">
                            <span>Subtotal</span>
                            <span>$49</span>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 mb-4">
                            Skipping and taxes calculated at checkout.
                        </p>
                        <div className="flex justify-between text-sm">
                            <button type="button" className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
                            <button type="button" className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
