const API_URL = "https://fakestoreapi.com/products";
export const productsApi = async () => {
  try {
    const response = await fetch(API_URL);
    const isOK = response.ok;
    if (!isOK) {
      console.error("Error in request", response);
      return;
    }
    const products = await response.json();
    return products;
  } catch (e) {
    console.error("Error in request", e);
    return [];
  }

  return [];
};
