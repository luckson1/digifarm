import React from "react";
import ProductCard from "./productCard";
import { freshProduceData } from "@/lib/dummy-data";

export default function Products() {
  return (
    <div className="sm:col-span-5 lg:col-span-8 space-y-6 w-full">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {freshProduceData.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
