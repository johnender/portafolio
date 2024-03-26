window.onload = function () {
    
    //declaring the canvas vairable as global in a implicite way
    canvas = document.getElementById("canvas1");
    title = document.getElementById("title");
    //declaring the StarButton vairables as global in a explicite way
    window.startFigures = document.getElementById("ButtonFigures");
    window.startLines = document.getElementById("ButtonLines");
    window.startStrokes = document.getElementById("ButtonStrokes");
    window.startArcs = document.getElementById("ButtonArcs");
    window.startBezierSquare = document.getElementById("ButtonBezierSquare");
    window.startBezierCubic = document.getElementById("ButtonBezierCubic");
    window.startZicZac = document.getElementById("ButtonZicZac");
    window.startSpiral = document.getElementById("ButtonSpiral");
    window.startStar = document.getElementById("ButtonStar");
    window.startGear = document.getElementById("ButtonGear");
    window.startRectangle = document.getElementById("ButtonRectangle");
    window.startGradient = document.getElementById("ButtonGradient");
    window.startSpaceShips = document.getElementById("ButtonSpaceShips");
    //creating the global variables for the space ships game
    window.x = 100;
    window.y = 100;
    //validating the canvas exists and is supported by the browser
    if(canvas && canvas.getContext){
        //validating the context support 2 dimensions
        ctx = canvas.getContext("2d");
        if(ctx){
            SpaceShips();

        }else{
            alert("Your browser don't support canvas")
        }
        
    }else{
        alert("Your browser don't support canvas")
    }
}

function Figures(){
    Hide();
    //validating the context support 2 dimensions
    if(ctx){
        console.log(ctx);

        //definying the colors
        ctx.fillStyle = "yellow";
        ctx.strokeStyle = "#ff0000";
        ctx.lineWidth= 5;

        //method to create a rectangule, parameter x, y, w,h
        //x is movement on the x axis
        //y is the movement on the y axis
        ctx.fillRect(50, 50, 100, 100);

        //method to create a empty rectangule (the margin)
        ctx.strokeRect(50,50,100,100)

        //creating another box
        ctx.fillStyle = "rgba(250,250,0,0.25)";
        ctx.fillRect(200, 50, 100, 100);
        ctx.strokeRect(200,50,100,100)



    }else{
        alert("Your browser don't support canvas")
    }
}

function Lines(){
    Hide();
    
    console.log(ctx);

    //definying the styles
    ctx.lineWidth= 25;
    ctx.strokeStyle = "yellow";

    //starting the line draw
    ctx.beginPath();
    ctx.moveTo(50,50);
    ctx.lineTo(550,50);
    ctx.stroke(); //this method draw the line
    

    //definying the styles
    ctx.lineWidth= 20;
    ctx.strokeStyle = "orange";
    ctx.lineCap="round";    //attribute to make the line "round"

    //starting the line draw
    ctx.beginPath();
    ctx.moveTo(50,100);
    ctx.lineTo(550,100);
    ctx.stroke(); //this method draw the line

    //definying the styles
    ctx.lineWidth= 15;
    ctx.strokeStyle = "blue";
    ctx.lineCap="square";    //attribute to make the line "square"

    //starting the line draw
    ctx.beginPath();
    ctx.moveTo(50,150);
    ctx.lineTo(550,150);
    ctx.stroke(); //this method draw the line

    //definying the styles
    ctx.lineWidth= 15;
    ctx.strokeStyle = "green";
    ctx.lineCap="butt";    //attribute toremove the effects of other Cap attributes

    //starting the line draw
    ctx.beginPath();
    ctx.moveTo(50,200);
    ctx.lineTo(550,200);
    ctx.stroke(); //this method draw the line
}

function Strokes(){
    Hide();
    
    console.log(ctx);

    //definying the styles
    ctx.lineWidth= 25;
    ctx.strokeStyle = "yellow";
    ctx.fillStyle= "red";

    //PATH
    ctx.beginPath();
    ctx.moveTo(50,100);
    ctx.lineTo(100,50);
    ctx.lineTo(150,100);
    ctx.lineTo(100,150);
    ctx.stroke(); //this method draw the line

    //PATH
    ctx.beginPath();
    ctx.moveTo(200,100);
    ctx.lineTo(250,50);
    ctx.lineTo(300,100);
    ctx.lineTo(250,150);
    ctx.closePath(); //close the "door"
    ctx.stroke(); //this method draw the line

    //PATH
    ctx.beginPath();
    ctx.moveTo(350,100);
    ctx.lineTo(400,50);
    ctx.lineTo(450,100);
    ctx.lineTo(400,150);
    ctx.fill(); //fill the inside of the lines with the style color
    ctx.closePath(); //close the "door"
    ctx.stroke(); //this method draw the line
    
}

function Arcs(){
    Hide();
    
    console.log(ctx);

    //definying the styles
    ctx.lineWidth= 10;
    ctx.strokeStyle = "yellow";
    ctx.fillStyle= "red";

    //Arcs
    ctx.beginPath();
    //axis x, y, size, point where the arc will be filled from (one radial) and the radial where it stops
    ctx.arc(100, 150, 50, 1.1*Math.PI, 1.9*Math.PI)
    ctx.stroke(); //this method draw the line

    //Arcs
    ctx.beginPath();
    //axis x, y, size, point where the arc will be filled from (one radial), the last one invertes the arc
    ctx.arc(250, 200, 50, 1.1*Math.PI, 1.9*Math.PI, true)
    ctx.stroke(); //this method draw the line

    //Arcs
    ctx.beginPath();
    //axis x, y, size, point where the arc will be filled from (one radial), the last one invertes the arc
    ctx.arc(400, 150, 50, 0, 2*Math.PI)
    ctx.fill();
    ctx.stroke(); //this method draw the line
    
}

function BezierSquare(){
    Hide();
    
    console.log(ctx);

    //definying the styles
    ctx.lineWidth= 10;
    ctx.strokeStyle = "yellow";
    ctx.fillStyle= "red";

    //Bezier (quadratic curve)
    ctx.beginPath();
    var x1 = 20, y1=20;
    ctx.moveTo(x1, y1);
    //x control point, y control point, x ending point, y ending point
    ctx.quadraticCurveTo(390,200, 400, 20)
    ctx.stroke();

    //Bezier (quadratic curve)
    ctx.strokeStyle = "white";
    ctx.beginPath();
    var x1 = 50, y1=300;
    ctx.moveTo(x1, y1);
    //x control point, y control point, x ending point, y ending point
    ctx.quadraticCurveTo(20,370, 200, 300)
    ctx.stroke();

    
}

function BezierCubic(){
    Hide();
    
    console.log(ctx);

    //definying the styles
    ctx.lineWidth= 10;
    ctx.strokeStyle = "yellow";
    ctx.fillStyle= "red";

    //Bezier (cubiccurve)
    ctx.beginPath();
    var x1 = 20, y1=20;
    ctx.moveTo(x1, y1); //starting point
    //x first control point, y first control point, x second control point, y second control point, x ending point, y ending point
    ctx.bezierCurveTo(20,100, 400, 100, 200, 300)
    ctx.stroke();

    //Bezier (cubiccurve)
    ctx.beginPath();
    var x1 = 200, y1=20;
    ctx.moveTo(x1, y1); //starting point
    //x first control point, y first control point, x second control point, y second control point, x ending point, y ending point
    ctx.bezierCurveTo(120, 100, 300, 100, 300, 300)
    ctx.stroke();
    
}

function ZicZac(){
    Hide();
    
    console.log(ctx);

    //definying the styles
    ctx.lineWidth= 10;
    ctx.strokeStyle = "blue";
    ctx.fillStyle= "red";
    ctx.lineCap="round";
    ctx.lineJoin="round"

    //Bezier (cubiccurve)
    ctx.beginPath();
    var inicioX=85, inicioY=70, desplazamiento= 30, lineas=15, lenght=100;

    ctx.moveTo(inicioX, inicioY); //starting point
    //x first control point, y first control point, x second control point, y second control point, x ending point, y ending point
    for(var i =0; i< lineas; i++){
        var x = inicioX +((i+1)*desplazamiento);
        var y = inicioY;

        if (i%2==0){
            y = inicioY+lenght;
        }

        ctx.lineTo(x, y);
    }
    ctx.stroke();
}

function Spiral(){
    Hide();
    
    console.log(ctx);

    //definying the styles
    ctx.lineWidth= 10;
    ctx.strokeStyle = "orange";
    ctx.fillStyle= "red";

    //Bezier (cubiccurve)
    let radio = 0, angle = 0, laps = 200;
    ctx.beginPath();
    ctx.moveTo(canvas.width/2, canvas.height/2); //using the size oif the whole canvas
    for(var i = 0; i < laps; i++){
        radio += .75;
        angle += (Math.PI*2)/50;
        var x = canvas.width/2 + radio * Math.cos(angle);
        var y = canvas.height/2 + radio * Math.sin(angle);
        ctx.lineTo(x, y);
    }
    ctx.stroke();

}

function Star(){
    Hide();
    
    console.log(ctx);

    //definying the styles
    ctx.lineWidth= 10;
    ctx.strokeStyle = "blue";
    ctx.fillStyle= "white";

    //Star
    let tops = 5, vertex = tops*2, angle = Math.PI*2/vertex, internalRadius =40, externalRadius = 80;
    let xx = canvas.width/2;
    let yy = canvas.height/2;

    ctx.beginPath();
    for(var i = 0; i < vertex; i++){
        let x, y;
        if(i%2==0){
            x = Math.cos(angle*i)*externalRadius;
            y = Math.sin(angle*i)*externalRadius;
        }else{
            x = Math.cos(angle*i)*internalRadius;
            y = Math.sin(angle*i)*internalRadius;
        }
        
        ctx.lineTo(xx +x, yy + y);
    }
    ctx.closePath(); //it makes the last angle looks right (conecting the last stroke with the first one)
    ctx.fill();
    ctx.stroke();

}

function Gear(){
    Hide();
    
    console.log(ctx);

    //definying the styles
    ctx.lineWidth= 5;
    ctx.strokeStyle = "blue";
    ctx.fillStyle= "white";

    //center
    let centerX = canvas.width/2, centerY = canvas.height/2;

    //radius of circle
    let externalRadius = 95, internalRadius = 50;//, mediumRadius = internalRadius*1.6, centralRadius = 20; 

    //points number
    let numPoints = 40;

    //Gear
    
    ctx.beginPath();
    ctx.lineJoin = "bevel"; //it lets create a curve between lines, makes the external vertex "small"
    for(var i = 0; i < numPoints; i++){
        let radius, angle = Math.PI*2/numPoints*(i+1), x, y;
        if(i%2==0){
            radius = externalRadius;
        }else{
            radius = internalRadius;
        }

        //calculating the external coodinates
        x = (radius*Math.sin(angle))+centerX;
        y = (radius*Math.cos(angle))+centerY;

        //drawing the line
        if(i===0){
            ctx.moveTo(x, y);
        }else{
            ctx.lineTo(x, y);
        }
    }
    ctx.closePath(); //it makes the last angle looks right (conecting the last stroke with the first one)
    ctx.fill();
    ctx.stroke();

}

function Rectangle(x,y,width,height,radius,line, backgroud){
    Hide();
    

    

    
    this.x=x;
    this.y=y;
    this.w=width;
    this.h=height;
    this.r=radius;
    this.l=line;
    this.b=backgroud;

    this.draw = function(){
        //definying the styles

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(this.x, this.y+this.r);

        //low left edge
        ctx.lineTo(this.x, this.y+this.h-this.r);
        ctx.quadraticCurveTo(this.x, this.y+this.h, this.x+this.r, this.y+this.h);

        //low right edge
        ctx.lineTo(this.x + this.w - this.r, this.y+this.h);
        ctx.quadraticCurveTo(this.x + this.w, this.y+this.h, this.x+this.w, this.y+this.h-this.r);

        //Up right edge
        ctx.lineTo(this.x + this.w, this.y+this.r);
        ctx.quadraticCurveTo(this.x + this.w, this.y, this.x+this.w-this.r, this.y);

        //Up left edge
        ctx.lineTo(this.x + this.r, this.y);
        ctx.quadraticCurveTo(this.x, this.y, this.x, this.y+this.r);

        
        ctx.lineWidth= 5;
        ctx.strokeStyle = this.l;
        ctx.fillStyle= this.b;
   
        ctx.closePath(); //it makes the last angle looks right (conecting the last stroke with the first one)
        ctx.fill();
        ctx.stroke();
    }
    console.log(ctx);


}

function DrawRectagle(){
    var rectangle1 = new Rectangle(30, 30, 200, 100, 5, "white", "cyan");
    rectangle1.draw();

    var rectangle2 = new Rectangle(250, 30, 200, 100, 20, "white", "blue");
    rectangle2.draw();
}

function Gradient(){
    Hide();
    
    console.log(ctx);

    //definying the styles
    ctx.lineWidth= 5;
    ctx.strokeStyle = "yellow";

    let gradient=ctx.createLinearGradient(0,0,canvas.width,0);

    gradient.addColorStop(0, "green");
    gradient.addColorStop(0.50, "white");
    gradient.addColorStop(1, "red");
    //gradient.addColorStop(1, "cyan");

    
    ctx.fillStyle = gradient;

    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.stroke();

}

var myReq;

const SpaceShips = () =>{
    Hide();
    canvas.width = 960, canvas.height = 800, canvas.style.border = "solid yellow 3px";
    document.getElementById("clearDiv").style.width = "1000px";
    title.innerHTML = "Space ships";

    myReq = requestAnimationFrame(SpaceShips); //this function helps to reproduce the game on any browser
    //requestAnimationFrame(SpaceShips); 
    verify();
    draw();
}

const verify = () =>{
    window.x +=2;
    if(x>canvas.width) x=0;
}

const draw = () =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2*Math.PI);
    ctx.fill();
}

//this function helps to reproduce the game on any browser (makes it recursive)
window.requestAnimationFrame = (function (){
    return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (callback){window.setTimeout(callback,17);}
    
})();

const cancelAnimationFrame =
  window.cancelAnimationFrame || window.mozCancelAnimationFrame;

function Clear (){
    console.log("tried");
    if (myReq){
        cancelAnimationFrame(myReq);
        myReq = null;
    }
    const context = canvas.getContext('2d');
    canvas.width = 600, canvas.height = 400, canvas.style.border = "";
    context.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("clearDiv").style.width = "600px";
    title.innerHTML = "Trying canvas";

    startFigures.style.visibility = "visible";
    startLines.style.visibility = "visible";
    startStrokes.style.visibility = "visible";
    startArcs.style.visibility = "visible";
    startBezierSquare.style.visibility = "visible";
    startBezierCubic.style.visibility = "visible";
    startZicZac.style.visibility = "visible";
    startSpiral.style.visibility = "visible";
    startStar.style.visibility = "visible";
    startGear.style.visibility = "visible";
    startRectangle.style.visibility = "visible";
    startGradient.style.visibility = "visible";
    startSpaceShips.style.visibility = "visible";
}

function Hide(){
    startFigures.style.visibility = "hidden";
    startLines.style.visibility = "hidden";
    startStrokes.style.visibility = "hidden";
    startArcs.style.visibility = "hidden";
    startBezierSquare.style.visibility = "hidden";
    startBezierCubic.style.visibility = "hidden";
    startZicZac.style.visibility = "hidden";
    startSpiral.style.visibility = "hidden";
    startStar.style.visibility = "hidden";
    startGear.style.visibility = "hidden";
    startRectangle.style.visibility = "hidden";
    startGradient.style.visibility = "hidden";
    startSpaceShips.style.visibility = "hidden";
}