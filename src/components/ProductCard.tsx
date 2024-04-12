import React from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { getBackgroundColorBasedOnCategory } from "@/utils/utills";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex-none w-[250px] h-auto mr-0 lg:mr-8 mb-3 flex flex-col items-center rounded-2xl shadow-custom bg-white">
      <div className="text-center px-5 pt-3 h-12 overflow-hidden">
        {/* Product title section, constrained to a single line */}
        <p className="font-semibold line-clamp-1 text-base">{product.title}</p>
      </div>
      <div className="flex justify-center items-center w-full h-36 mb-2">
        <Image
          src={product.image}
          alt={product.title}
          width={100}
          height={100}
          objectFit="contain"
          layout="intrinsic"
        />
      </div>
      {/* Dynamic background color based on product category */}
      <div
        className="bg-green-300 rounded-2xl px-6 w-[250px]"
        style={{
          backgroundColor: getBackgroundColorBasedOnCategory(product.category),
        }}
      >
        <div className="w-full text-center mt-2 mb-1">
          <p className="font-bold text-lg text-blue-700">Rs {product.price}</p>
        </div>
        <div className="px-2 h-20 overflow-hidden">
          <p className="text-xs font-thin text-center line-clamp-4">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
