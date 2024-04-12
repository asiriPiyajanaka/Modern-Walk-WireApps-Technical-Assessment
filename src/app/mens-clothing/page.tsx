"use client";
import { Product } from "@/types/product";
import { fetchProducts } from "@/services/api";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Loading from "../../components/Loading";

// Functional component for rendering the Men's Clothing page
export default function MensClothing() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isProductsLoading, setIsProductsLoading] = useState<Boolean>(false);

  useEffect(() => {
    setIsProductsLoading(true);

    // Async function to fetch products for men's page
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts(`men's clothing`);
      setProducts(fetchedProducts);
      setIsProductsLoading(false);
    };
    getProducts();
  }, []);

  return isProductsLoading ? (
    <Loading />
  ) : (
    <div className="flex flex-col items-center md:items-start">
      <p className="text-lg font-bold mt-6">{`Men's Clothing`}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 my-8 gap-16">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
