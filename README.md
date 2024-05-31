## Implementation

> Show iterations of your process to achieve the outcome. This should include some screen shots of outputs of different stages of your work. If your group’s design wasn't fully realised in code, still showcase your intentions as well as the results you were able to achieve and iterations to get there. Highlight how you were or weren’t able to able to stick to your planning in section 1.

1. Stage 1
   1. Complete the skeleton of the entire pattern, that is, the parent element
   2. ![image-20240527102905197](image/README/image-20240527102905197.png)
2. Stage 2
   1. Fill the skeleton with child elements
   2. ![image-20240527102921462](image/README/image-20240527102921462.png)

## Technical overview

> The technologies used are all those learned in class, without any other third-party technologies.

1. In the implementation code of the group part, each rectangle in the pattern skeleton is regarded as a parent element object, and the small rectangles contained in the rectangle are regarded as child element objects, so the parent element object is regarded as the following structure. At the same time, all parent elements are saved in an array.

   ```js
   // findex: parents number
   let parents = [
     { findex: 0, x: 0, y: 0.02, height: 0.02, width: 1, color: "#fdeb19" },
     { findex: 1, x: 0, y: 0.15, height: 0.02, width: 1, color: "#fdeb19" },
     { findex: 2, x: 0, y: 0.35, height: 0.02, width: 1, color: "#fdeb19" },
      ...
   ]
       
   let children = [
     { findex: 0, x: 0.14, y: 0.02, height: 0.02, width: 0.02, color: "#273364" },
     { findex: 0, x: 0.32, y: 0.02, height: 0.02, width: 0.03, color: "#fdf2c3" },
     ...
   ]
   ```
   
   
   
2. Each pattern will be treated as a myPattern object, which will facilitate the subsequent writing of individual parts. The following is the basic myPattern Class
   ```js
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
   ```

   

3. In the setup function, each graphic is rendered in sequence according to the parent-child relationship, and the rendering width and height of the canvas are calculated at the same time.

   ```js
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
       for (let j = 0; j < children.length; j++) {
         if (children[j].findex == parents[i].findex) {
           let pattern2 = new myPattern(
             children[j].x * width,
             children[j].y * height,
             children[j].width * width,
             children[j].height * height,
             children[j].color
           );
           pattern2.show();
         }
       }
     }
   }
   ```

   

4. In the adaptive pattern adjustment code, the aspect ratio of the canvas is automatically calculated each time setup is called, so just call setup
   ```js
   // Define the windowResized function to handle window resizing events
   function windowResized() {
     setup();
   }
   ```

   

## GitHub links

> This section should contain the full name and Unikey of each group member and a link to their GitHub repository containing their final submission. Check the week 8 tutorial to make sure you provide the correct link, and make sure you verify the links are correct before you submit.