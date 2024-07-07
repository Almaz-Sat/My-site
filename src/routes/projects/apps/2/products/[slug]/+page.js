// @ts-nocheck
import { productsApi } from "../../api/api.js";

export async function load({ params }) {
  const products = (await productsApi()) || [];

  return products.find((item) => {
    return Number(item.id) === Number(params.slug);
  });

}
