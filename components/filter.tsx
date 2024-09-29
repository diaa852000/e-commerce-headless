"use client";

export default function Filter() {
    return (
        <section className="mt-12 flex justify-between gap-4">
            <div className="flex gap-6 flex-wrap justify-center">
                <select name="type" id="" className="py-2 px-4 w-[100px] rounded-2xl text-xs font-medium bg-[#EDEDED]">
                    <option>Type</option>
                    <option value="physical">Physical</option>
                    <option value="digital">Digital</option>
                </select>
                <input type="text" name="min" placeholder="min price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400" />
                <input type="text" name="max" placeholder="max price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400" />

                <select
                    name="size"
                    id=""
                    className="py-2 px-4 w-[100px] rounded-2xl text-xs font-medium bg-[#EDEDED]"
                >
                    <option>Size</option>
                    <option value="physical">Physical</option>
                    <option value="digital">Digital</option>
                </select>

                <select 
                    name="color" 
                    id="" 
                    className="py-2 px-4 w-[100px] rounded-2xl text-xs font-medium bg-[#EDEDED]"
                >
                    <option>Color</option>
                    <option value="physical">Physical</option>
                    <option value="digital">Digital</option>
                </select>

                <select 
                    name="category" 
                    id="" 
                    className="py-2 px-4 w-[100px] rounded-2xl text-xs font-medium bg-[#EDEDED]"
                >
                    <option>Category</option>
                    <option value="">New Arrival</option>
                    <option value="">Popular</option>
                </select>
            </div>
            <div>
                <select 
                    name="" 
                    id=""
                    className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
                >
                    <option>Sort By</option>
                    <option value="">Price (low to high)</option>
                    <option value="">Price (high to low)</option>
                    <option value="">Newest</option>
                    <option value="">Oldest</option>
                </select>
            </div>
        </section>
    )
}
