<script>
  import { onMount } from "svelte";

  //     const modal = document.getElementById("gameOverModal");
  let guessInput;

  onMount(() => {
    setTimeout(() => console.log(guessInput), 1000);
  });
function checkGuess(){

}
  //     const scoreBoard = document.getElementById("score");
  //     const movieImage = document.getElementById("movieImage");
  //     const modalContent = document.querySelector(".modal-content");

  //     const movies = [
  //       {
  //         name: "Interstellar",
  //         image:
  //           "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/07916d0a-fd67-43d2-a99f-8dcf71d4ca15",
  //       },
  //       {
  //         name: "Avatar",
  //         image:
  //           "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/af70749e-d002-43bc-818e-f72f8c20dd63",
  //       },
  //       {
  //         name: "Titanic",
  //         image:
  //           "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/abb85de4-f016-4912-abe5-8d0a6ec951d5",
  //       },
  //       {
  //         name: "The Matrix",
  //         image:
  //           "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/13527860-094e-494d-b366-cae122cb9856",
  //       },
  //       {
  //         name: "Joker",
  //         image:
  //           "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/04b9139a-57c5-4a50-a2b2-d66c6f27c0ba",
  //       },
  //       {
  //         name: "The Godfather",
  //         image:
  //           "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/015215b8-1a0b-4aa5-80c4-6a603d19f599",
  //       },
  //       {
  //         name: "Forrest Gump",
  //         image:
  //           "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/5c79bac1-a2ff-4b46-8e1d-5e73b34994b1",
  //       },
  //       {
  //         name: "Ice Age",
  //         image:
  //           "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/2d961d9c-0c9d-46f6-a2ef-7ef04cb387b0",
  //       },
  //       {
  //         name: "Gone Girl",
  //         image:
  //           "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/f542ecd2-70eb-49a9-8c81-b1d6ccc6b1fa",
  //       },
  //       {
  //         name: "The Truman Show",
  //         image:
  //           "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/6e2ee9cd-a95d-4b93-8be1-f87022cfe207",
  //       },
  //       {
  //         name: "La La Land",
  //         image:
  //           "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/77e07cf8-bc00-4f0c-83c8-b35848a07516",
  //       },
  //       {
  //         name: "Oppenheimer",
  //         image:
  //           "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/1d265010-4da3-4e0a-96bb-d7b703f8189f",
  //       },
  //       {
  //         name: "Toy Story",
  //         image:
  //           "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/a985ab14-1e40-4ede-8138-9894f38428e9",
  //       },
  //       {
  //         name: "Whiplash",
  //         image:
  //           "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/13924a52-c41b-4156-84e5-9cc145e84b1c",
  //       },
  //       {
  //         name: "A Beautiful Mind",
  //         image:
  //           "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/438df8df-05cf-4ddf-a77f-1d75b0257959",
  //       },
  //       {
  //         name: "Black Swan",
  //         image:
  //           "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/0382d213-f62f-44b9-ac58-90f1e498b85a",
  //       },
  //       {
  //         name: "The Intouchables",
  //         image:
  //           "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/6bf93068-9775-43e5-83aa-4f62adcdbf3e",
  //       },
  //       {
  //         name: "Inception",
  //         image:
  //           "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/18ebca87-f107-4139-b451-84e8aa6de3cb",
  //       },
  //       {
  //         name: "The Shawshank Redemption",
  //         image:
  //           "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/61300255-9235-4994-8907-34d789562f74",
  //       },
  //       {
  //         name: "Edward Scissorhands",
  //         image:
  //           "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/28d04861-c9b9-4e42-92ee-ee663873335c",
  //       },
  //       {
  //         name: "Ratatouille",
  //         image:
  //           "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/ed15ec67-abc2-450b-8839-07ef0f133d54",
  //       },
  //       {
  //         name: "The Father",
  //         image:
  //           "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/404e7eef-85d7-4821-a23e-b7b5c2d60352",
  //       },
  //     ];

  //     let score;
  //     let currentMovieIndex;
  //     let warningShown = false;

  //     function preloadImages() {
  //       movies.forEach((movie) => {
  //         const img = new Image();
  //         img.src = movie.image;
  //       });
  //     }

  //     function startGame() {
  //       score = 0;
  //       updateScore();
  //       currentMovieIndex = 0;
  //       getNextMovie();
  //     }

  //     //! Function to get a random movie
  //     function getNextMovie() {
  //       const currentMovie = movies[currentMovieIndex];
  //       movieImage.src = currentMovie.image;
  //     }

  //     //! Function to check the user's guess
  //     function checkGuess() {
  //       const userGuess = guessInput.value.trim().toLowerCase();
  //       const currentMovie = movies[currentMovieIndex];

  //       if (userGuess === currentMovie.name.toLowerCase()) {
  //         movieImage.style.boxShadow = "-1px 1px 25px 14px #52ffa880";
  //         movieImage.style.outline = "3px solid #52ffa9";

  //         setTimeout(() => {
  //           score++;
  //           updateScore();
  //           currentMovieIndex++;
  //           guessInput.value = "";
  //           resetStyles();
  //           scoreBoard.classList.add("animation");

  //           if (score < movies.length) {
  //             getNextMovie();
  //           } else {
  //             showWinGameModal();
  //           }
  //         }, 800);
  //       } else if (userGuess === "") {
  //         if (!warningShown) {
  //           showWarningMessage();
  //           warningShown = true;
  //         }
  //       } else {
  //         movieImage.style.boxShadow = "-1px 1px 25px 16px #a20927";
  //         movieImage.style.outline = "3px solid #a20927";
  //         scoreBoard.classList.remove("animation");

  //         if (!warningShown) {
  //           currentMovieIndex++;
  //         }
  //         showGameOverModal();
  //       }
  //     }

  //     //! Function to update the score display
  //     function updateScore() {
  //       scoreBoard.textContent = `Score: ${score}`;
  //     }

  //     //! Function to show the warning message
  //     function showWarningMessage() {
  //       modalContent.innerHTML = `
  //     <p class="message">Please enter a movie name! 👀</p>
  //     <button class="btn" onclick="closeModal()">Close</button>
  //   `;

  //       modal.style.display = "flex";
  //       document.addEventListener("keyup", closeModalOnEnter);
  //     }

  //     //! Function to show the game over modal
  //     function showGameOverModal() {
  //       modalContent.innerHTML = `
  //     <p class="message">Game Over! 😔</p>
  //     <p>Total Score: ${score}</p>
  //     <button class="btn" onclick="closeModal()">Close</button>
  //   `;

  //       modal.style.display = "flex";
  //       document.addEventListener("keyup", closeModalOnEnter);
  //     }

  //     //! Function to show the modal when the user win the game
  //     function showWinGameModal() {
  //       modalContent.innerHTML = `
  //     <p class="message">You won the game! 🎉</p>
  //     <p>Total Score: ${score}</p>
  //     <button class="btn" onclick="closeModal()">Close</button>
  //   `;

  //       modal.style.display = "flex";
  //       scoreBoard.classList.remove("animation");
  //       document.addEventListener("keyup", closeModalOnEnter);
  //     }

  //     //! Function to close the modal on Enter key press
  //     function closeModalOnEnter(e) {
  //       if (e.key === "Enter" && modal.style.display === "flex") {
  //         modal.style.display = "none";
  //         modalContent.innerHTML = "";
  //         guessInput.value = "";
  //         resetStyles();
  //         document.removeEventListener("keyup", closeModalOnEnter);

  //         if (!warningShown) {
  //           startGame();
  //         } else {
  //           warningShown = false;
  //         }
  //       }
  //     }

  //     //! Function to close the modal by clicking "OK" button
  //     function closeModal() {
  //       modal.style.display = "none";
  //       modalContent.innerHTML = "";
  //       guessInput.value = "";
  //       resetStyles();
  //       document.removeEventListener("keyup", closeModalOnEnter);

  //       if (!warningShown) {
  //         startGame();
  //       } else {
  //         warningShown = false;
  //       }
  //     }

  //     //! Event listener for the Enter key to automatically check the guess
  //     document.addEventListener("keyup", function (e) {
  //       if (e.key === "Enter" && modal.style.display !== "flex") {
  //         checkGuess();
  //       }
  //     });

  //     //! Function to focus on input
  //     function focusOnInput() {
  //       guessInput.focus();
  //     }

  //     //! Function to reset the styles
  //     function resetStyles() {
  //       movieImage.style.boxShadow = "";
  //       movieImage.style.outline = "";
  //     }

  //     //! Get the cursor position in the input
  //     guessInput.addEventListener("keyup", (e) => {
  //       console.log("Caret at: ", e.target.selectionStart);
  //     });

  //     //! Start the game when the page loads
  //     window.onload = startGame;
</script>
<svelte:head>
  <title>Guess the Movie</title>
</svelte:head>
<div class="game-container">
  <h1>Guess the Movie</h1>
  <div id="score">Score: 0</div>
  <img id="movieImage" src="" alt="Movie Poster" />
  <div class="input-box">
    <input
      type="text"
      id="guessInput"
      placeholder="Enter movie name"
      bind:this={guessInput}
    />
    <button on:click={checkGuess} class="submit-btn btn" role="button">
      Submit
    </button>
  </div>
</div>

<div id="gameOverModal" class="modal">
  <div class="modal-content"></div>
</div>

<style>
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
