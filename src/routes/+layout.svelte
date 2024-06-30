<script>
  const nav = [
    {title:"Обо мне",href:"/about",show:true},
    {title:"Блог",href:"/blog",show:true},
    {title:"Портфолио",href:"/projects",show:true},
    {title:"Контакты",href:"/contact",show:true},
    ]
</script>

<nav>
  <div class="nav-container">
    <a href="/" class="nav-logo" title="Back to Homepage">Almaz</a>
    <div class="nav-links">
      {#each nav as link}
      {#if link.show}
        <a href={link.href} class="link">{link.title}</a>
      {/if}
      {/each}
      
    </div>
  </div>
</nav>
<div class="container">
  <!-- Pages will be injected below -->
  <slot></slot>
</div>

<style>
  .container {
    max-width: 1400px;
    margin: 50px auto;
  }
</style>