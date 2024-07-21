<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  import { movies } from "./data";
  import Modal from "../../../../components/modal/Modal.svelte";

  // TODO 1  showWarningMessage, showWinGameModal, resetStyles (не влазия в DOM) [уйти от DOM]

  // refs
  let modal;
  let guessInput;
  let scoreBoard;
  let movieImage;
  let modalContent;

  // TODO remove
  const IS_DEV_MODE = true;

  //variables
  let guessInputValue;
  let score;
  let currentMovieIndex;
  let movieImageSrc;

  let correctAnswer = false;
  let notCorrectAnswer = false;

  let warningShown = false;
  let isGameOver = false;
  let isShowModal = false;
  let isWin = false;
  let isAnimation = false;

  onMount(() => {
    setTimeout(
      () =>
        console.log(modal, guessInput, scoreBoard, movieImage, modalContent),
      1000
    );
    startGame();
  });

  function startGame() {
    score = 0;
    currentMovieIndex = 0;
    getNextMovie();
  }

  //! Function to get a random movie
  function getNextMovie() {
    const currentMovie = movies[currentMovieIndex];
    movieImageSrc = currentMovie.image;
  }

  //! Function to check the user's guess
  function checkGuess() {
    const userGuess = guessInputValue.trim().toLowerCase();
    const currentMovie = movies[currentMovieIndex];

    if (userGuess === currentMovie.name.toLowerCase()) {
      correctAnswer = true;

      setTimeout(() => {
        score++;
        currentMovieIndex++;
        guessInputValue = "";
        resetStyles();
        isAnimation = true;

        if (score < movies.length) {
          getNextMovie();
        } else {
          isWin = true;
          isShowModal = true;
        }
      }, 800);
    } else if (userGuess === "") {
      warningShown = true;
      isShowModal = true;
    } else {
      notCorrectAnswer = true;
      isAnimation = false;

      if (!warningShown) {
        currentMovieIndex++;
      }
      isShowModal = true;
      isGameOver = true;
    }
  }

  //! Function to close the modal on Enter key press
  function closeModalOnEnter(e) {
    if (e.key === "Enter" && modal.style.display === "flex") {
      modal.style.display = "none";
      modalContent.innerHTML = "";
      guessInputValue = "";
      resetStyles();

      if (!warningShown) {
        startGame();
      } else {
        warningShown = false;
      }
    }
  }

  //! Function to close the modal by clicking "OK" button
  function closeModal() {
    isShowModal = false;
    warningShown = false;
    isGameOver = false;
    isWin = false;

    guessInputValue = "";
    resetStyles();
    // document.removeEventListener("keyup", closeModalOnEnter);

    if (!warningShown) {
      startGame();
    } else {
      warningShown = false;
    }
  }

  //! Function to focus on input
  function focusOnInput() {
    guessInput.focus();
  }

  //! Function to reset the styles
  function resetStyles() {
    correctAnswer = false;
    notCorrectAnswer = false;
  }
</script>

<svelte:head>
  <title>Guess the Movie</title>
</svelte:head>
<div class="game-container">
  <h1>Guess the Movie</h1>
  <div id="score" class:animation={isAnimation} bind:this={scoreBoard}>
    Score: {score}
  </div>
  <img
    id="movieImage"
    src={movieImageSrc}
    alt="Movie Poster"
    bind:this={movieImage}
    class:correctAnswer
    class:notCorrectAnswer
  />
  <div class="input-box">
    <form action="" on:submit|preventDefault={checkGuess}>
      <input
        type="text"
        id="guessInput"
        placeholder="Enter movie name"
        bind:this={guessInput}
        bind:value={guessInputValue}
      />
      <button class="submit-btn btn" role="button"> Submit </button>
    </form>
  </div>
</div>
<Modal isShow={isShowModal}>
  <div class="header">
    {#if isGameOver || IS_DEV_MODE}
      <p class="message">Game Over! 😔</p>
    {:else if isWin}
      <p class="message">You won the game! 🎉</p>
    {/if}
  </div>
  <div slot="body">
    {#if isGameOver || IS_DEV_MODE}
      <p>Total Score: {score}</p>
    {:else if warningShown}
      <p class="message">Please enter a movie name! 👀</p>
    {:else if isWin}
      <p>Total Score: {score}</p>
    {/if}
  </div>
  <div slot="footer">
    <button class="btn" on:click={closeModal}>Close</button>
  </div>
</Modal>

<div
  id="gameOverModal"
  class="modal"
  class:--show={isShowModal}
  bind:this={modal}
>
  <div class="modal-content" bind:this={modalContent}>
    {#if isGameOver || IS_DEV_MODE}
      <p class="message">Game Over! 😔</p>
      <p>Total Score: {score}</p>
    {:else if warningShown}
      <p class="message">Please enter a movie name! 👀</p>
    {:else if isWin}
      <p class="message">You won the game! 🎉</p>
      <p>Total Score: {score}</p>
    {/if}
    <button class="btn" on:click={closeModal}>Close</button>
  </div>
</div>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap");

  :root {
    --light-clr: rgb(254, 254, 254);
    --primary-clr: rgb(103, 63, 215);
    --transparent-primary-clr: rgba(103, 63, 215, 0.4);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito", sans-serif;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: url(https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/4299a354-68bc-4422-ba08-97b40af9c112);
    background-size: cover;
    background-repeat: no-repeat;
  }

  .game-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: rgba(0, 0, 0, 0.3);
    box-shadow:
      0 0.5px 0 1px rgba(255, 255, 255, 0.23) inset,
      0 1px 0 0 rgba(255, 255, 255, 0.66) inset,
      0 4px 16px rgba(0, 0, 0, 0.12);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 20px;
    padding: 40px 60px;
    margin: 10px;
  }

  .game-container h1 {
    font-size: clamp(1.3rem, 5vw, 2.5rem);
    color: transparent;
    line-height: 1.2;
    background: url(https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/2bd7c4f1-264e-47de-a50c-5483dbff2525);
    background-clip: text;
    -webkit-background-clip: text;
    background-position: 0 0;
    animation: animated-text 26s linear infinite;
  }

  @keyframes animated-text {
    100% {
      background-position: 100% 0;
    }
  }

  #score {
    position: absolute;
    top: 3%;
    right: 3%;
    border-radius: 5px;
    font-size: 1.1rem;
    color: var(--light-clr);
    padding: 10px 16px;
    box-shadow: -1px 1px 25px 14px var(--transparent-primary-clr);
    background-color: var(--primary-clr);
    user-select: none;
  }

  #movieImage {
    max-width: 100%;
    width: 550px;
    aspect-ratio: 4/3;
    object-fit: cover;
    border-radius: 20px;
    margin: 26px 20px 50px;
    outline: 2px solid var(--primary-clr);
    outline-offset: 5px;
  }

  .input-box {
    position: relative;
  }

  .input-box input {
    width: 100%;
    height: 50px;
    border-radius: 2rem;
    border: 0;
    outline: 2px solid var(--primary-clr);
    padding: 10px 90px 10px 16px;
    background: transparent;
    transition: all 0.2s;
    font-weight: 500;
    font-size: clamp(0.8rem, 3vw, 1rem);
    color: var(--light-clr);
  }

  .input-box input:focus {
    outline: 3px dotted var(--primary-clr);
    outline-offset: 0.1rem;
  }

  .input-box input::placeholder {
    color: rgb(197, 197, 197);
    opacity: 50%;
    font-weight: 300;
  }

  .input-box input:-webkit-autofill,
  .input-box input:-webkit-autofill:hover,
  .input-box input:-webkit-autofill:focus,
  .input-box input:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: var(--light-clr);
    transition: background-color 5000s ease-in-out 0s;
  }

  .btn {
    height: 44px;
    background-image: linear-gradient(
      45deg,
      rgb(83, 108, 199) 15%,
      rgb(103, 63, 215) 80%
    );
    border-radius: 2rem;
    border: 0;
    outline: 0;
    color: var(--light-clr);
    flex-shrink: 0;
    font-size: clamp(0.8rem, 3vw, 1rem);
    font-weight: 500;
    padding: 10px 16px;
    text-align: center;
    text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
    transition: all 0.5s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    cursor: pointer;
    transform: scale(1);
    transition-duration:
      box-shadow 0.2s linear,
      transform 0.3s linear;
  }

  .submit-btn {
    position: absolute;
    top: 3px;
    right: 3px;
  }

  .btn:hover {
    box-shadow: rgba(80, 63, 205, 0.7) 0 2px 30px;
    transform: scale(0.98);
  }

  .modal {
    display: none;
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
  }

  .modal-content p {
    margin-bottom: 30px;
  }

  .modal-content .message {
    font-size: 1.3rem;
  }

  .modal-content .btn {
    height: unset;
    padding: 8px 22px;
  }

  .animation {
    animation: up-down 3s linear infinite forwards;
  }
  .correctAnswer {
    box-shadow: -1px 1px 25px 14px #52ffa880;
    outline: 3px solid #52ffa9;
  }
  .notCorrectAnswer {
    box-shadow: -1px 1px 25px 16px #a20927;
    outline: 3px solid #a20927;
  }

  @keyframes up-down {
    0%,
    100% {
      transform: translateY(10px);
    }
    25% {
      transform: translateY(16px);
    }
    50% {
      transform: translateY(8px);
    }
    75% {
      transform: translateY(12px);
    }
  }

  @media (max-width: 580px) {
    .game-container h1 {
      margin-top: 20px;
    }

    #score {
      top: 3%;
      right: 3%;
      font-size: 1rem;
      padding: 8px 16px;
    }

    .modal-content .message {
      font-size: 1rem;
    }

    .modal-content .btn {
      padding: 8px 16px;
    }
  }
</style>
