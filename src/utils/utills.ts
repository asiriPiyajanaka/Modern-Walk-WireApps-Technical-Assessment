// Utility function to determine background color based on the product category
export const getBackgroundColorBasedOnCategory = (category: string) => {
  switch (category.toLowerCase()) {
    case `men's clothing`:
      return "#2BD9AF";
    case `women's clothing`:
      return "#FF5E84";
    default:
      return "#F7CAC9";
  }
};
