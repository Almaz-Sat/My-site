<script>
  // @ts-nocheck

  import { routes } from "../../routes.js";
  import Icon from "../../../../components/Icon/Icon.svelte";
  const url = window.location.pathname;
  const id = url.split("/").at(-1);
  const post = routes.find((e) => {
    return e.id === Number(id);
  });
  const { title } = post;
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  let newItem = "";

  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function addTodo() {
    const id = Date.now();
    const obj = { todo: newItem, id: String(id), isComplete: false };
    todos = [...todos, obj];
    console.log("add", todos);
    newItem = "";
    saveTodos()
  }

  function complete(todo) {
    todo.isComplete = !todo.isComplete;
    todos = todos;
    saveTodos()
  }

  function remove(todo) {
    todos = todos.filter((e) => e.id !== todo.id);
    saveTodos()
  }
</script>

<h1>{title}</h1>
<main>
  <form action="" class="todo-form" on:submit|preventDefault={addTodo}>
    <input type="text" bind:value={newItem} />
    <button class="button">+</button>
  </form>
</main>

<div class="todos">
  {#each todos as todo}
    <div class="todo" class:completed={todo.isComplete}>
      <div class="todo__text">{todo.todo}</div>
      <div class="todo__buttons">
        <button class="complete" on:click={complete(todo)}>
          <Icon name="check-mark" />
        </button>
        <button class="delete" on:click={remove(todo)}>
          <Icon name="delete" />
        </button>
      </div>
    </div>
  {/each}
</div>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100%;
    padding: 5vmin;
    box-sizing: border-box;
    background: antiquewhite;
  }
  form {
    width: 100%;
    max-width: 500px;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  input {
    flex-grow: 1;
    width: 0;
    border: none;
    border-bottom: 1px solid black;
    background: transparent;
    box-shadow: none;
    font-size: 1.2rem;
    margin: 0;
    outline: none;
  }
  .todos {
    width: 100%;
  }
  .todo {
    display: flex;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 0 15px rgb(0 0 0 / 20%);
    background-color: hsla(0, 0%, 100%, 0.2);
    margin-top: 1rem;
    font-size: 1.2rem;
    justify-content: space-between;
    align-items: center;
  }
  .todo__buttons {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }
  .todo button {
    width: 32px;
    height: 32px;
    padding: 4px;
    margin: 0;
    flex-shrink: 0;
  }

  h1 {
    text-align: center;
    font-size: 1.5rem;
    margin: 2em 0;
  }
  button {
    background-color: transparent;
    border: none;
  }

  button.delete,
  button.delete:hover {
    color: brown;
    transition: color 100ms ease-out;
  }
  button.complete,
  button.complete:hover {
    color: cadetblue;
    transition: color 100ms ease-out;
  }
  .todo.completed {
    color: slategray;
    background-color: rgb(216, 255, 205);
  }

  .todo.completed .todo__text {
    text-decoration: line-through;
  }

  .todo.completed button {
    color: silver;
  }
</style>
