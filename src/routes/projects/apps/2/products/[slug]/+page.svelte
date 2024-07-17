<script>
// @ts-nocheck

  export let data;
  $: hasData = Object.keys(data).length > 0;
  import Rating from "./Rating.svelte";
  // TODO 1 сделать звезды через svg
  const rating = data.rating.rate;
  let loopRating = rating;
  const ratingArray = [];
  for (let i = 0; i < 5; i++) {
    if (loopRating >= 1) {
      ratingArray.push("100%");
      loopRating -= 1;
    } else if(loopRating<=0){
      ratingArray.push("0%");
    }
     else if (loopRating < 1) {
      let num = Number(String(rating).split(".")[1]) * 10;
      // @ts-ignore
      num = num.toString() + "%";
      ratingArray.push(num);
      loopRating -= 1;
    }
  }
  console.log(ratingArray);
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>
{#if hasData}
  <div class="container">
    <div class="card_img">
      <img src={data.image} alt="product" />
      <p class="price">{data.price}&#36;</p>
      <p class="rating">
        {rating}
        {#each ratingArray as item}
          <Rating rating={item}/>
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
    img {
      max-width: 250px;
      margin: 25px 25px 0px 25px;
      padding-bottom: 25px;
      border-bottom: 1px solid black;
    }
  }
</style>
