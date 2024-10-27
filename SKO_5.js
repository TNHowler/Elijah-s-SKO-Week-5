//GitHub Copilot assisted in writing this code.

var elevator;
var ellipses = [];
let InterstateBCFont;
let MPC8;
let Plan;
let SKOC8;

function preload(){
  elevator = loadImage("data/Elevator.jpeg");
  InterstateBCFont = loadFont("Interstate_BoldCondensed.ttf");
  MPC8 = loadImage("data/MPC8.jpeg");
  Plan = loadImage("data/Plan.jpeg");
  SKOC8 = loadImage("data/SKOC8.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipses = [
    { x: width / 1.1321, y: height / 1.475, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-CW/" },
    { x: width / 1.1321, y: height / 1.617, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-1/" },
    { x: width / 1.1321, y: height / 1.789, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-3/" },
    { x: width / 1.1321, y: height / 2, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-5/" },
    { x: width / 1.1321, y: height / 2.27, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-7/" },
    { x: width / 1.1321, y: height / 2.625, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-9/" },
    { x: width / 1.1321, y: height / 3.11, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-11/" },

    { x: width / 1.0925, y: height / 1.475, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-0/" },
    { x: width / 1.0925, y: height / 1.617, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-2/" },
    { x: width / 1.0925, y: height / 1.789, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-4/" },
    { x: width / 1.0925, y: height / 2, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-6/" },
    { x: width / 1.0925, y: height / 2.27, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-8/" },
    { x: width / 1.0925, y: height / 2.625, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-10/" },
    { x: width / 1.0925, y: height / 3.11, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-12/" },
  ];
}

function draw() {
  background("white");
  image(elevator, 0, 0, windowWidth, windowHeight);

  imageMode(CENTER);

  image(MPC8, width / 3, height / 1.3, width / 8, height / 3);

  image(Plan, width / 2, height / 1.3, width / 8, height / 3);

  image(SKOC8, width / 1.5, height / 1.3, width / 8, height / 3);

  imageMode(CORNER);

  strokeWeight(width / 550);
  noFill();

  for (let i = 0; i < ellipses.length; i++) {
    let e = ellipses[i];
    if (i === 3) {
      stroke(0, 255, 0);
    } else if (i === 1) {
      stroke(255, 0, 0);
    } else {
      stroke(255, 0, 0);
    }
    ellipse(e.x, e.y, e.w, e.h);
  }

  textAlign(CENTER, CENTER);
  textSize(windowWidth / 50);
  textFont(InterstateBCFont); 
  noStroke();
  fill(0);
  text(
    "Codewords Creative Coding and Typography",
    width / 2.5,
    height / 10,
    width / 5, // Specify the width for wrapping the text
    height / 12,  // Specify the height for wrapping the text
  );

  // Display text in the middle of the screen
  textAlign(CENTER, CENTER);
  textSize(windowWidth / 115);
  textFont(InterstateBCFont); 
  noStroke();
  fill(0); 
  text(
    "Between week 4 and 5 I generated ideas for the first project using the crazy eights method. Once I had chosen a sketch to move forward with I did a quick step by step of how the project would work. I then created the paper prototype ready for week 5's class. During week 5's morning class we tested each others prototypes on our tables and discussed among our classmates possible improvements. \n\nIn the afternoon class we showed our prototypes to Karen and the whole class on a slideshow. We then did a crazy eights for the SKO. \n\nFrom left to right is the crazy 8 for the major project, the mini storyboard of the mp, and lastly the crazy 8 for this project, the SKO.",
    width / 2.65,
    height / 5,
    width / 4, // Specify the width for wrapping the text
    height / 4  // Specify the height for wrapping the text
  );
}

function mousePressed() {
  for (let i = 0; i < ellipses.length; i++) {
    let e = ellipses[i];
    let d = dist(mouseX, mouseY, e.x, e.y);
    if (d < e.w / 2) {
      window.location.href = e.url;
    }
  }
}
