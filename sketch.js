var ball, database;
var position;

function setup() {
  createCanvas(500, 500);

  ball = createSprite(250, 250, 20, 20);
  ball.shapeColor = "red";
}

function draw() {
  background("white");

  if (keyDown("right")) {
    ball.x = ball.x + 5;
  }
  if (keyDown("left")) {
    ball.x = ball.x - 5;
  }
  if (keyDown("up")) {
    ball.y = ball.y - 5;
  }
  if (keyDown("down")) {
    ball.y = ball.y + 5;
  }

  drawSprites();
}
