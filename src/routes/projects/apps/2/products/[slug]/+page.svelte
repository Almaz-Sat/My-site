<script>
  export let data;
  $: hasData = Object.keys(data).length > 0;
  import Rating from "./Rating.svelte";
  // TODO 1 сделать звезды через svg
  // TODO 2 починить lang="scss"
  // TODO 3 перевесть переменные с document... на методы svelte
</script>
<svelte:head>
  <title>{data.title}</title>
</svelte:head>
{#if hasData}
  <div class="container">
  <div class="card_img">
    <img src={data.image} alt="product" />
    <p class="price">{data.price}&#36;</p>
    <p class="rating">{data.rating.rate}
      {#each Array(Math.ceil(data.rating.rate)) as item }
         <Rating/>
      {/each}
    </p>
  </div>
  <div class="text">
    <h2>{data.title}</h2>
    {data.description}
    <p class="category">category: {data.category}</p>
  </div>
</div>
{/if}

<style lang="scss">
  .container {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .card_img {
    text-align: center;
    max-width: 300px;
    max-height: 500px;
  }
  img {
    max-width: 250px;
    margin: 25px 25px 0px 25px;
    padding-bottom: 25px;
    border-bottom: 1px solid black;
  }
  .price {
    color: red;
    font-size: 50px;
    margin: 5px;
    font-weight: bolder;
  }
  .rating {
    font-weight: 600;
    font-size: 20px;
  }
  }
  
</style>
