// @ts-nocheck
import { productsApi } from "../../api/api.js";

export async function load({ params }) {
  const product = (await productsApi(params.slug)) || [];
  
  return product
}
