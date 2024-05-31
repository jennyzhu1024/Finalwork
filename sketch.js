let parents = [
  { findex: 0, x: 0, y: 0.02, height: 0.02, width: 1, color: "#fdeb19" },
  { findex: 1, x: 0, y: 0.15, height: 0.02, width: 1, color: "#fdeb19" },
  { findex: 2, x: 0, y: 0.35, height: 0.02, width: 1, color: "#fdeb19" },
  { findex: 3, x: 0, y: 0.43, height: 0.02, width: 0.98, color: "#fdeb19" },
  { findex: 4, x: 0, y: 0.56, height: 0.02, width: 1, color: "#fdeb19" },
  { findex: 5, x: 0, y: 0.63, height: 0.02, width: 1, color: "#fdeb19" },
  { findex: 6, x: 0, y: 0.69, height: 0.02, width: 0.13, color: "#fdeb19" },
  { findex: 7, x: 0.05, y: 0.72, height: 0.02, width: 0.54, color: "#fdeb19" },
  { findex: 8, x: 0, y: 0.78, height: 0.02, width: 0.08, color: "#fdeb19" },
  { findex: 9, x: 0, y: 0.85, height: 0.02, width: 1, color: "#fdeb19" },
  { findex: 10, x: 0, y: 0.88, height: 0.02, width: 0.05, color: "#fdeb19" },
  { findex: 11, x: 0, y: 0.95, height: 0.02, width: 1, color: "#fdeb19" },
  { findex: 12, x: 0.02, y: 0, height: 0.35, width: 0.02, color: "#fdeb19" },
  { findex: 13, x: 0.05, y: 0, height: 1, width: 0.02, color: "#fdeb19" },
  { findex: 14, x: 0.11, y: 0, height: 0.95, width: 0.02, color: "#fdeb19" },
  { findex: 15, x: 0.22, y: 0, height: 1, width: 0.02, color: "#fdeb19" },
  { findex: 16, x: 0.53, y: 0, height: 1, width: 0.02, color: "#fdeb19" },
  { findex: 17, x: 0.58, y: 0, height: 1, width: 0.02, color: "#fdeb19" },
  { findex: 18, x: 0.84, y: 0, height: 1, width: 0.02, color: "#fdeb19" },
  { findex: 19, x: 0.88, y: 0, height: 0.37, width: 0.02, color: "#fdeb19" },
  { findex: 20, x: 0.92, y: 0, height: 0.8, width: 0.02, color: "#fdeb19" },
  { findex: 21, x: 0.96, y: 0, height: 1, width: 0.02, color: "#fdec22" },
  { findex: 22, x: 0.13, y: 0.05, height: 0.03, width: 0.08, color: "#fcf11f" },
  { findex: 23, x: 0.15, y: 0.04, height: 0.11, width: 0.04, color: "#fd1e24" },
  { findex: 24, x: 0.26, y: 0.04, height: 0.09, width: 0.08, color: "#fd1c28" },
  { findex: 25, x: 0.26, y: 0.13, height: 0.02, width: 0.08, color: "#f0edd1" },
  { findex: 26, x: 0.9, y: 0.1, height: 0.03, width: 0.06, color: "#244ec9" },
  { findex: 27, x: 0.07, y: 0.19, height: 0.06, width: 0.06, color: "#1f47c3" },
  { findex: 28, x: 0.13, y: 0.27, height: 0.07, width: 0.09, color: "#feea26" },
  { findex: 29, x: 0.65, y: 0.17, height: 0.18, width: 0.09, color: "#294fc4" },
  { findex: 30, x: 0.16, y: 0.35, height: 0.1, width: 0.05, color: "#ffea20" },
  { findex: 31, x: 0.4, y: 0.35, height: 0.08, width: 0.07, color: "#fff02b" },
  { findex: 32, x: 0.13, y: 0.49, height: 0.07, width: 0.09, color: "#fa242e" },
  { findex: 33, x: 0.28, y: 0.45, height: 0.02, width: 0.07, color: "#fbed1d" },
  { findex: 34, x: 0.28, y: 0.47, height: 0.09, width: 0.07, color: "#1d49c1" },
  { findex: 35, x: 0.4, y: 0.45, height: 0.11, width: 0.07, color: "#fde92e" },
  { findex: 36, x: 0.65, y: 0.45, height: 0.18, width: 0.03, color: "#fef32b" },
  { findex: 37, x: 0.7, y: 0.45, height: 0.11, width: 0.08, color: "#fd2f34" },
  { findex: 38, x: 0.7, y: 0.58, height: 0.02, width: 0.08, color: "#fd2f34" },
  { findex: 39, x: 0.86, y: 0.48, height: 0.05, width: 0.1, color: "#fcf234" },
  { findex: 40, x: 0.9, y: 0.48, height: 0.05, width: 0.02, color: "#fe3b32" },
  { findex: 41, x: 0.07, y: 0.67, height: 0.05, width: 0.06, color: "#183dc2" },
  { findex: 42, x: 0.13, y: 0.78, height: 0.07, width: 0.09, color: "#ffe720" },
  { findex: 43, x: 0.86, y: 0.67, height: 0.06, width: 0.06, color: "#2b51d1" },
  { findex: 44, x: 0.86, y: 0.73, height: 0.1, width: 0.06, color: "#fcf13a" },
  { findex: 45, x: 0.94, y: 0.73, height: 0.1, width: 0.02, color: "#fdf944" },
  { findex: 46, x: 0.45, y: 0.95, height: 0.09, width: 0.06, color: "#f5272e" },
  { findex: 47, x: 0.88, y: 0.2, height: 0.06, width: 0.06, color: "#fd2b2d" },
];

let width, height;
let canvas;
class myPattern {
  constructor(x, y, width, height, color) {
    // (x,y) coordinate and myPattern's width and height and color
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }
  show() {
    stroke(0);
    strokeWeight(0.1);
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }
}
function setup() {
  // Calculate the width and height after scaling before drawing
  height = windowHeight - 20;
  width = height;
  canvas = createCanvas(width, height);
  canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
  canvas.style("border", "0.1px solid black");
  background("#fffdf1");
  noStroke();

  // Iterate through the rows_and_columns array and create myPattern instances
  for (let i = 0; i < parents.length; i++) {
    let pattern1 = new myPattern(
      parents[i].x * width,
      parents[i].y * height,
      parents[i].width * width,
      parents[i].height * height,
      parents[i].color
    );
    pattern1.show();
  }
}
function draw() {}

// Define the windowResized function to handle window resizing events
function windowResized() {
  setup();
}
