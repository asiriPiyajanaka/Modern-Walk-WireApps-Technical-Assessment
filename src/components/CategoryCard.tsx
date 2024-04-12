import React from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { getBackgroundColorBasedOnCategory } from "@/utils/utills";

interface CategoryCardProps {
  category: string;
  cardTitle: string;
  onClickCategoryCard: (category: string) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  cardTitle,
  onClickCategoryCard,
}) => {
  return (
    <div
      onClick={() => onClickCategoryCard(category)}
      style={{ backgroundColor: getBackgroundColorBasedOnCategory(category) }}
      className={`hover:cursor-pointer w-full h-32 md:h-56 rounded-2xl shadow-custom flex justify-center items-center`}
    >
      <p className="text-white text-4xl font-bold">{cardTitle}</p>
    </div>
  );
};

export default CategoryCard;
