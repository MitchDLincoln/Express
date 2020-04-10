import Paddle from "./src/paddle.js";

const canvas = document.getElementById("gameScreen");
const ctx = canvas.getContext("2d");

const GAME = 500;

const paddle = new Paddle(GAME, GAME);

paddle.draw(ctx);
