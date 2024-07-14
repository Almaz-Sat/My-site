// @ts-nocheck
const API_URL = "https://fakestoreapi.com/products";
export const productsApi = async (id = undefined) => {
  try {
    let url = API_URL;
    if (id) {
      url = `${API_URL}/${id}`
    }
    const response = await fetch(url);
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
