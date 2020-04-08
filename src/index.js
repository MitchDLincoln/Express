const canvas = document.getElementById("gameScreen");
const ctx = canvas.getContext("2d");

const GAME_WIDTH = canvas.offsetWidth;
const GAME_HEIGHT = canvas.offsetHeight;

// classe PADDLE

// Non importo la classe paddle perchè il browser blocca le richiesta da file locale
// Quindi devo creare un server per farlo funzionare.. Ci penserò più avanti
// import Paddle from "./paddle.js";
class Paddle {
  // Definisco il paddle
  constructor(gameWidth, gameHeight) {
    // Dimensione di Gioco
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    // Dimensioni
    this.width = 150;
    this.height = 50;

    // Velocita Movimento
    this.maxSpeed = 5;
    this.speed = 0;

    // Posizionamento Default
    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10,
    };
  }

  //Muovo il paddle
  moveRight() {
    this.speed = this.maxSpeed;
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }

  // renderizzo il paddle
  draw(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  //Aggiorno la posizione del paddle
  update(deltaTime) {
    const rightLimit = this.gameWidth - this.width;
    // Nel caso delta time = 0 si torna a casa
    if (!deltaTime) return;

    this.position.x += this.speed;

    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x > rightLimit) this.position.x = rightLimit;
  }
}

// fine classe PADDLE

// classe INPUTHANDLER

// Non importo la classe paddle perchè il browser blocca le richiesta da file locale
// Quindi devo creare un server per farlo funzionare.. Ci penserò più avanti
// import Input from "./input.js";
class InputHendler {
  constructor(paddle) {
    // Intercetto il tasto premuto
    document.addEventListener("keydown", () => {
      // alert(event.key);

      // Comportamento in base al tasto premuto
      switch (event.key) {
        case "ArrowRight":
          paddle.moveRight();
          break;

        case "ArrowLeft":
          paddle.moveLeft();
          break;

        // case "ArrowUp" :
        // alert('Si va Su')
        // break;
      }
    });

    // Intertecetto la non pressione del tasto
    document.addEventListener("keyup", () => {
      // alert(event.key);

      // Comportamento in base al tasto premuto
      switch (event.key) {
        case "ArrowRight":
          if (paddle.speed > 0) paddle.stop();
          break;

        case "ArrowLeft":
          if (paddle.speed < 0) paddle.stop();
          break;

        // case "ArrowUp" :
        // alert('Si va Su')
        // break;
      }
    });
  }
}

// fine classe INPUTHANDLER

// MAIN

// Utilizzo la classe paddle
let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

// Creo un input reader
new InputHendler(paddle);

// Disegno il paddle
paddle.draw(ctx);

// Tempo
let lastTime = 0;

// Meccanica di gioco
function gameLoop(timestamp) {
  // Calcolo tempistiche
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  // Pulisce il rettangolo ad ogni frame
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  paddle.update(deltaTime);

  paddle.draw(ctx);

  // Richiedo animazione dal Browser
  requestAnimationFrame(gameLoop);
}

// Gioco
gameLoop();
