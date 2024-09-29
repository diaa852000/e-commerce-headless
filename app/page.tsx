import CategoryList from "@/components/lists/category-list";
import ProductList from "@/components/lists/product-list";
import Slider from "@/components/slider";

export default function Home() {

  return (
    <div className="">
      <Slider/>
      <div className="mt-24 padding-x">
        <h1 className="text-2xl">Feature Products</h1>
        <ProductList/>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl padding-x mb-12">Categories</h1>
        <CategoryList/>
      </div>
      <div className="mt-24 padding-x">
        <h1 className="text-2xl">New Products</h1>
        {/* <ProductList/> */}
      </div>
    </div>
  );
}
