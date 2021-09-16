let segment1;
let svgButton

 

function setup() {
  createCanvas(600, 650, SVG);        // The P5.svg Library will work only if you specify  the stroke weight and color like bellow
  strokeWeight(1)
  stroke(0);
  frameRate(60)
  
  //parameters are Nb of segments, segment width (difference between radii), gap length, start angle, end angle, inner radius, 
  segment1 = new Segments(10, 120, 420, 40, 10, 40)
  angleMode(DEGREES)
  svgButton = createButton('SVG')
  
}

function draw() {
  
  background(220);
  segment1.show();
  segment1.displaySliders()
  svgButton.mousePressed(saveMySVG)

}



function saveMySVG(){

  background(255);
  segment1.show();

  save('mySegmentedKnob')

}







