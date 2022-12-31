// Flappy Bird - based on code found here: https://github.com/CodeExplainedRepo/FlappyBird-JavaScript
var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// Load images
var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeTop = new Image();
var pipeBottom = new Image();

bird.src = "images/bird.png";
bg.src = "images/background.png";
fg.src = "images/foreground.png";
pipeTop.src = "images/pipeTop.png";
pipeBottom.src = "images/pipeBottom.png";

// Audio files
var fly = new Audio("sounds/fly.mp3");
var scor = new Audio("sounds/score.mp3");
var death = new Audio("sounds/shatter.mp3");

// Some variables
var gap = 85;	// Controls the gap between top (North) and bottom (South) pipes
var southPipeY;
var bX = 20;	// Bird X position
var bY = 150;	// Bird Y position

var gravity = 0.005;
var fallRate = 2;
var score = 0;
var flapTime = 0;	// Ticks since last flap

// Create an array of pipe coordinates
var pipe = [];
// Add first pipe
pipe[0] = {
	x: cvs.width,
	y: 0
};

// When any key is pressed, call the moveUp function
document.addEventListener("keydown", moveUp);

function moveUp() {
	bird.src = "images/birdFlap.png";	// Change bird to flapping image
	fallRate = 0;	// Reset gravity and wing animation
	flapTime = 0;	// Reset time since last flap
	bY -= 25;		// Move the bird position up 25 pixels
	fly.play();
}

function layPipe(i) {
	southPipeY = pipeTop.height + gap;
	ctx.drawImage(pipeTop, pipe[i].x, pipe[i].y);
	ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + southPipeY);

	pipe[i].x--;

	if (pipe[i].x === 125) {
		// Add a new set of pipes
		pipe.push({
			x: cvs.width,
			y: Math.floor(Math.random() * pipeTop.height) - pipeTop.height
		});
	}
}

function changeBird() {
	// If bird is too high, force back to 25 pixels from the top, so bird doesn't go off screen
	if (bY < 20) {
		bY = 25;
		return;
	}

	if (bY > 374) {
		bY = 375;	// Bird is on the floor--and dead
		bX--;		// Move dead bird with background
		bird.src = "images/birdDead.png";
		return;
	}

	// Add gravity constant to bird's Y position and increase fallRate
	bY += .5 * gravity * Math.pow(fallRate, 2);
	fallRate++;

	if (flapTime > 4) {
		bird.src = "images/bird.png"; // Back to un-flapped image every 4 ticks after a flap
	}

	flapTime++;
}

function drawScoreBoard() {
	ctx.fillStyle = "#000";
	ctx.font = "20px Verdana";
	ctx.fillText("Score: " + score, 10, cvs.height - 20);
}

function gameOver() {
	location.reload(); // GAME OVER MAN!  Reload the page to start a new game
}


// MAIN LOOP: Update and draw
function draw() {
	// Draw background
	ctx.drawImage(bg, 0, 0);

	for (var i = 0; i < pipe.length; i++) {
		layPipe(i);

		// Detect collisions
		if (bX + bird.width >= pipe[i].x 
			&& bX <= pipe[i].x + pipeTop.width 
			&& (bY <= pipe[i].y + pipeTop.height
				|| bY + bird.height >= pipe[i].y + southPipeY)
				|| bY + bird.height >= cvs.height - fg.height) {
			death.play();
			fallRate += fallRate; // Fall fast when bird dies
			setTimeout(gameOver, 1000);
		}

		// When a pipe is 5 pixels from the edge, bird has passed it and scores a point
		if (pipe[i].x === 5) {
			score++;
			scor.play();
		}
	}

	// Draw foreground
	ctx.drawImage(fg, 0, cvs.height - fg.height);
	ctx.drawImage(bird, bX, bY);

	// Adjust Bird position if too high, Bird image if done flapping or dead (on floor)
	changeBird();
	drawScoreBoard();
	requestAnimationFrame(draw);
}

// Start the game!
draw();
