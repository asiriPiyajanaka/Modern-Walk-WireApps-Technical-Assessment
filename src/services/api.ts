import { Product } from "../types/product";

export const fetchProducts = async (
  category?: string,
  limit?: number
): Promise<Product[]> => {
  let url = "https://fakestoreapi.com/products";

  // If category is provided, fetch products by category
  if (category) {
    url += `/category/${encodeURIComponent(category)}`;
  }

  // If limit is provided, add query parameter for limit
  if (limit !== undefined) {
    // Append '?' or '&' to the URL based on whether it already contains a query
    const separator = url.includes("?") ? "&" : "?";
    url += `${separator}limit=${limit}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const products: Product[] = await response.json();
    return products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};
