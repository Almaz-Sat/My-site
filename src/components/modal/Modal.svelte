<script>
  export let isShow = false;

  // TODO 2  сделать похоже на оригинала, перенести логику функций в modalGame
//  TODO 3 по клику вне модалки закрыть мадалку + esc
</script>

{#if isShow}
  <div class="modal">
    <div class="modal-content">
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="body">
        <slot name="body"></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 10;
    animation: fadeIn 0.6s ease-in-out 1 normal;

    &.--show {
      display: flex;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    gap:20px;

    margin-right: 700px;
    font-size: 1rem;
    font-weight: 500;
    padding: 40px 50px;
    text-align: center;
    color: var(--light-clr);
    border-radius: 8px;
    border: 4px solid var(--transparent-primary-clr);
    background: rgba(34, 34, 34, 0.9);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.35);

    .header{
      display: none;
      &:has(*){
        display: flex;
      }
    }
  }

  .modal-content p {
    /* margin-bottom: 30px; */
  }

  .modal-content .message {
    font-size: 1.3rem;
  }

  .modal-content .btn {
    height: unset;
    /* padding: 8px 22px; */
  }
</style>
