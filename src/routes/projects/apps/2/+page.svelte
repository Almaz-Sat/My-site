<script>
  // @ts-nocheck

  import Store from "./components/Store.svelte";
  let data = [];
  $: {
    console.log(data);
  }
</script>

<svelte:head>
  <title>Список товаров</title>
</svelte:head>
<h1 class="title">Список Товаров</h1>

<Store bind:data />

{#if data.length > 0}
  <div class="container">
    {#each data as item}
      <a href={`/projects/apps/2/products/${item.id}`}>
        <div class="product">
          <h2 class="title">{item.title}</h2>
          <img src={item.image} alt="img" />
          <p class="category">{item.category}</p>
        </div>
      </a>
    {/each}
  </div>
{/if}

<style>
  .title{
    display: flex;
    justify-content: center;
  }
  .container {
    margin: 50px auto;
    max-width: 800px;
    width: 100%;
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .product {
    display: flex;
    max-width: 350px;
    max-height: 350px;
    height: 100%;
    width: 100%;
    border: 1px solid rgb(240, 237, 237);
    justify-content: center;
    align-items: end;
    text-align: center;
    flex-wrap: wrap;
  }
  .product:hover {
    box-shadow: inset 0px 0px 10px rgb(177, 176, 176);
  }
  .title {
    width: 100%;
  }
  img {
    display: block;
    width: 100px;
  }
  .category {
    display: block;
    width: 100%;
    border-top: 1px solid rgb(240, 237, 237);
  }
</style>
