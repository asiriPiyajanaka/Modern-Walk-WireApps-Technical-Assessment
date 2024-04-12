"use client";
import { useRouter } from "next/navigation";
import { Product } from "@/types/product";
import { fetchProducts } from "@/services/api";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import Loading from "../components/Loading";

export default function Home() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [isProductsLoading, setIsProductsLoading] = useState<Boolean>(false);
  const categories = [
    { category: `men's clothing`, categoryTitle: `Men's clothing` },
    { category: `women's clothing`, categoryTitle: `Women's clothing` },
  ];

  useEffect(() => {
    setIsProductsLoading(true);
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
      setIsProductsLoading(false);
    };
    getProducts();
  }, []);

  const handleCategoryClick = (category: string) => {
    switch (category.toLowerCase()) {
      case `men's clothing`:
        router.push("/mens-clothing");
        break;
      case `women's clothing`:
        router.push("/womens-clothing");
        break;
      default:
        router.push("/");
        break;
    }
  };

  return isProductsLoading ? (
    <Loading />
  ) : (
    <div className="flex flex-col">
      <p className="text-lg font-bold mt-6">Flash Sale</p>
      <div className="flex overflow-x-auto py-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <p className="text-lg font-bold my-6">Categories</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <CategoryCard
            key={category.category}
            category={category.category}
            cardTitle={category.categoryTitle}
            onClickCategoryCard={handleCategoryClick}
          />
        ))}
      </div>
    </div>
  );
}
