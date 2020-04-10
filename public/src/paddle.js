export default class Paddle {
  // Definisco il paddle
  constructor(gameWidth, gameHeight) {
    // Dimensione di Gioco
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    // Dimensioni
    this.width = 150;
    this.height = 25;

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

    this.position.x += this.speed;

    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x > rightLimit) this.position.x = rightLimit;
  }
}
