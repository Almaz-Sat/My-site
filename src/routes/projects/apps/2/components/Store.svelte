<script>
  // @ts-nocheck

  // TODO (https://kit.svelte.dev/docs/routing) сделать карточки товаров
  import { onMount } from "svelte";
  const API_URL = "https://fakestoreapi.com/products";
  export let data;

  onMount(async () => {
    try {
      const response = await fetch(API_URL);
      const isOK = response.ok;
      if (!isOK) {
        console.error("Error in request", response);
        return;
      }
      const products = await response.json();
      data = products
    } catch (e) {
      console.error("Error in request", e);
    }
  });
</script>


