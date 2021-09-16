class Segments {


    constructor(nbSegments, startAngle, endAngle, segmentWidth, gapLength, arcRadius) {

        this.nbSegments = nbSegments                        //The segments are the big parts
        this.startAngle = startAngle
        this.endAngle = endAngle
        this.segmentWidth = segmentWidth
        this.gapLength = gapLength
        this.arcRadius = arcRadius
        

        this.nbSegmentSlider = createSlider(2, 20, nbSegments, 1)

        this.segmentWidthSlider = createSlider(5, 200, segmentWidth, 1) 
        this.gapLengthSlider = createSlider(5, 20, gapLength, 1)

        this.startAngleSlider = createSlider(90, 270, startAngle, 1)
        this.endAngleSlider = createSlider(270, 450, endAngle, 1)

        this.arcRadiusSlider = createSlider(20, 300, arcRadius, 1)

                
    }


    displaySliders(){

        
        this.nbSegmentSlider.position(100, 10)
        text('Nb of Segments', 5, this.nbSegmentSlider.y +10 );
        text(this.nbSegmentSlider.value(), this.nbSegmentSlider.width + this.nbSegmentSlider.x, this.nbSegmentSlider.y +10)
        

        this.segmentWidthSlider.position(100, 30)
        text('Segments Width', 5, this.segmentWidthSlider.y +10 );
        text(this.segmentWidthSlider.value(), this.segmentWidthSlider.width + this.segmentWidthSlider.x , this.segmentWidthSlider.y+10)

        this.gapLengthSlider.position(100, 50)
        text('Gap Length', 5, this.gapLengthSlider.y +10 );
        text(this.gapLengthSlider.value(), this.gapLengthSlider.width + this.gapLengthSlider.x, this.gapLengthSlider.y+10)


        this.startAngleSlider.position(100, 90)
        text('Start Angle', 5, this.startAngleSlider.y +10 );
        // text(this.startAngleSlider.value()+180, this.startAngleSlider.width + this.startAngleSlider.x, this.startAngleSlider.y+10)
        text(this.startAngleSlider.value(), this.startAngleSlider.width + this.startAngleSlider.x, this.startAngleSlider.y+10)

        this.endAngleSlider.position(100, 110)
        text('End Angle', 5, this.endAngleSlider.y +10 );
        // text(this.endAngleSlider.value()-180, this.endAngleSlider.width + this.endAngleSlider.x, this.endAngleSlider.y+10)
        text(this.endAngleSlider.value(), this.endAngleSlider.width + this.endAngleSlider.x, this.endAngleSlider.y+10)


        this.arcRadiusSlider.position(100, 130)
        text('Arc Radius', 5, this.arcRadiusSlider.y +10);
        text(this.arcRadiusSlider.value()/2, this.arcRadiusSlider.width + this.arcRadiusSlider.x, this.arcRadiusSlider.y+10)


    }





    show(){


        let centerX = width/2
        let centerY = height/2
        let tempAngle = this.startAngle
        
        
        // These variables depend on the value on the slider
        
        this.nbSegments = this.nbSegmentSlider.value()
        this.segmentWidth = this.segmentWidthSlider.value()
        this.startAngle = this.startAngleSlider.value()
        this.endAngle = this.endAngleSlider.value()
        this.gapLength = this.gapLengthSlider.value()
        this.arcRadius = this.arcRadiusSlider.value()


        //Determine the size of the angles in between each segments
        let stepAngle = (this.endAngle-this.startAngle)/(this.nbSegments)


        push();
        translate(centerX, centerY +50)
        strokeWeight(3)
        stroke(0)
        line( -5, 0, 5, 0)              //Makes a little cross in the middle of the canevas
        line ( 0, -5, 0, 5)

        var totalAngle = this.endAngle-this.startAngle
        var totalGapAngle = (this.nbSegments - 1) * this.gapLength
        var allSegmentAngle = totalAngle - totalGapAngle
        var oneSegmentAngle = allSegmentAngle / this.nbSegments






        for(let j = 0; j < this.nbSegments; j++ ){
            
            // Determine which arc is traced
            
            //if it is the First arc
            if (j == 0){
                var startArcAngle = this.startAngle 
                var  endArcAngle = startArcAngle + oneSegmentAngle
            }
            // if it is the last arc
            else if(j == this.nbSegments - 1){
                var startArcAngle = this.endAngle - oneSegmentAngle
                var endArcAngle = this.endAngle
            }
            // Any of the middle arcs
            else {
                var startArcAngle = this.startAngle + oneSegmentAngle*(j) +  this.gapLength*j
                var endArcAngle = this.startAngle + oneSegmentAngle*(j+1) +  this.gapLength*j
            }

            // Make the two arcs
            noFill()
            strokeWeight(2)
            arc(0, 0, this.arcRadius*2, this.arcRadius*2, startArcAngle , endArcAngle)
            arc(0, 0, (this.arcRadius + this.segmentWidth)*2, (this.arcRadius + this.segmentWidth)*2, startArcAngle , endArcAngle)
            
            // Make the lines to join them
            var line1P1X = cos(startArcAngle) * this.arcRadius
            var line1P1Y = sin(startArcAngle) * this.arcRadius
            var line1P2X = cos(startArcAngle) * (this.arcRadius + this.segmentWidth)
            var line1P2Y = sin(startArcAngle) * (this.arcRadius + this.segmentWidth)
            var line2P1X = cos(endArcAngle) * this.arcRadius
            var line2P1Y = sin(endArcAngle) * this.arcRadius
            var line2P2X = cos(endArcAngle) * (this.arcRadius + this.segmentWidth)
            var line2P2Y = sin(endArcAngle) * (this.arcRadius + this.segmentWidth)
            
            strokeWeight(2)
            fill(0)
            line(line1P1X, line1P1Y, line1P2X, line1P2Y)
            line(line2P1X, line2P1Y, line2P2X, line2P2Y)
 
            }  

            pop();

        }

        

    }   


  

