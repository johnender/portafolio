window.onload = function () {
    
    //declaring the canvas variable as global in a implicite way
    canvas = document.getElementById("canvas1");
    title = document.getElementById("title");

    //declaring the StarButton variables as global in a explicite way
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
    window.startTanks = document.getElementById("ButtonTanks");
    
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
    var inicioX=85, inicioY=70, desplazamiento= 30, lineas=15, length=100;

    ctx.moveTo(inicioX, inicioY); //starting point
    //x first control point, y first control point, x second control point, y second control point, x ending point, y ending point
    for(var i =0; i< lineas; i++){
        var x = inicioX +((i+1)*desplazamiento);
        var y = inicioY;

        if (i%2==0){
            y = inicioY+length;
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


/*****************************************************************************
 Starting all the variables/const and functions for the Space ships game
  ****************************************************************************/

var myReq; //Animation request number, used for both games

game = {
    //canvas: null,
    //ctx: null,
    image: null,
    heroImage: true,
    enemyImage: null,
    pulsedKey:null,
    key: [],
    bulletColor: "red",
    enemyBulletColor: "yellow",
    bullets_array: new Array(),
    enemies_array: new Array(),
    enemyBullets_array: new Array(),
    shoot: false,
    points: 0,
    gameEnd: false,
    boing: null,
    playerShooting: null,
    intro: null,
    ending: null,
    sound: true
}

/***********
 Constants
  **********/
const KEY_ENTER = "Enter";
const KEY_LEFT = "ArrowLeft";
const KEY_UP = "ArrowUp";
const KEY_RIGHT = "ArrowRight";
const KEY_DOWN = "ArrowDown";
const KEY_SPACE = " ";

/***********
 Objects
  **********/
function Bullet(x, y, w){
    this.x = x,
    this.y = y;
    this.w = w;
    this.draw = function(){
        //darwing the bullet
        ctx.save();
        ctx.fillStyle = game.bulletColor;

        //using circular bullets
        ctx.beginPath();
        ctx.arc(this.x + 4, this.y, this.w, 0, 2*Math.PI)
        ctx.fill();
        ctx.stroke();

        //using rectangular bullets
        //ctx.fillRect(this.x, this.y, this.w, this.w);
        this.y = this.y -4;
        ctx.restore();
    };
    this.shoot = function(){ //bullets shot by the enemies
        //darwing the bullet
        ctx.save();
        ctx.fillStyle = game.enemyBulletColor;

        //using circular bullets
        /* ctx.beginPath();
        ctx.arc(this.x + 4, this.y, this.w, 0, 2*Math.PI)
        ctx.fill();
        ctx.stroke(); */

        //using rectangular bullets
        ctx.fillRect(this.x, this.y, this.w, this.w);
        this.y = this.y +6;
        ctx.restore();
    };

}

function Player(x) {
    this.x = x;
    this.y = 650;
    this.w = 30;
    this.h = 15;
    this.draw = function (x){
        this.x = x;
        ctx.drawImage(game.image, this.x, this.y, this.w, this.h);
    };
}

function Enemy(x, y){
    this.x = x,
    this.y = y;
    this.w = 35;
    this.times = 0;
    this.dx = 5;
    this.cicles = 0;
    this.num = (canvas.width - 460)/5;
    this.figure = true;
    this.alive = true;
    this.level = 1;
    this.draw = function (){
        //delay
        if (this.cicles > 20/this.level){
            //little jumps
            if(this.times > this.num){
                this.dx *= -1;
                this.times = 0;
                //this.num = 28;
                this.y += 20;
                this.dx = (this.dx>0)? this.dx++ : this.dx--;
                if (this.level>=5){
                    this.level*=2;
                }else{
                    this.level++;
                }
            }else{
                this.x += this.dx;
            }
            this.times++;
            this.cicles=0;
            this.figure = !this.figure;
        }else{
            this.cicles++;
        }
        
        if (this.figure){
            //the firsts parameters (numbers) are a reference to the location of the enemy on the sprite
            ctx.drawImage(game.enemyImage, 0, 0, 40, 30, this.x, this.y, 35, 40);
        }else{
            //the firsts parameters (numbers) are a reference to the location of the enemy on the sprite
            ctx.drawImage(game.enemyImage, 50, 0, 35, 30, this.x, this.y, 35, 40);
        }
    };
}

/***********
 Functions
  **********/
const heroImage = () =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = 960, canvas.height = 700, canvas.style.border = "solid yellow 3px";
    document.getElementById("clearDiv").style.width = "1000px";
    let image = new Image();
    image.src = "./images/spaceShips/cara.webp";
    image.onload = () => {
        ctx.drawImage(image, (canvas.width/2 - image.width/2), (canvas.height/2 - image.height/2));
    }
}

const select = (e) => {
    if (title.innerHTML == "Space ships"){
        if (game.heroImage){
            console.log("5");
            start();
        }
    }
    
}

const start = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.heroImage = false;
    game.player = new Player (0);
    game.x = canvas.width/2;
    game.player.draw(game.x);
    animate();
    if (game.sound == true){
        game.intro.play();
    }
}


var x = 100, y = 100;



/**
 * Start code for the space invaders game
 */

const SpaceShips = () =>{
    Hide();
    title.innerHTML = "Space ships";
    game.points = 0;
    game.gameEnd = false;
    //canvas.width = 960, canvas.height = 800, canvas.style.border = "solid yellow 3px";
    //document.getElementById("clearDiv").style.width = "1000px";
    //title.innerHTML = "Space ships";

    /* 
    Calling the game.sounds 
    */
    game.boing = document.getElementById("boing");
    game.playerShooting = document.getElementById("shooting");
    game.intro = document.getElementById("intro");
    game.ending = document.getElementById("ending");

    //crearing enemies
    game.enemies_array = new Array(); //restarting the array, so, there is not cache memory
    game.bullets_array = new Array();
    game.enemyBullets_array = new Array();
    game.shoot = false;

    game.enemyImage = new Image();
    game.enemyImage.src = "./images/spaceShips/invader.fw.png";
    game.enemyImage.onload = function(){
        for(var i = 0; i <  5; i++){
            for (var j = 0; j < 10; j++){
                //adding each enemy, axis x and y
                game.enemies_array.push(new Enemy(20+40*j, 30+45*i));
            }
        }
    }

    //adding the image of the player
    game.image = new Image();
    game.image.src = "./images/spaceShips/torre.fw.png";
    heroImage();
    //adding a listener to the whole canvas
    canvas.addEventListener("click", select, false);
    
    
}

const animate = () =>{
    if(game.gameEnd == false){
        //declaring it as global, so, we can stop it
        myReq = requestAnimationFrame(animate); //this function helps to reproduce the game on any browser
        //requestAnimationFrame(SpaceShips); 
        verify();
        draw();
        collision();
    }else{

    }
}

const collision= () => {
    let enemy, bullet;
    for(var i = 0; i < game.enemies_array.length; i++){
        for(var j =0; j < game.bullets_array.length; j++){
            enemy = game.enemies_array[i];
            bullet = game.bullets_array[j];
            if (enemy != null && bullet != null){
                if ((bullet.x > enemy.x) && 
                (bullet.x < enemy.x+enemy.w) && 
                (bullet.y > enemy.y) &&
                (bullet.y < enemy.y+enemy.w)){
                    enemy.alive = false;
                    game.enemies_array[i] = null;
                    game.bullets_array[j] = null;
                    game.shoot = false;
                    game.points += 10;
                    //calling the game.sound
                    if(game.sound == true){
                        game.boing.play();
                    }
                }
            }
        }
    }

    //collision of enemy bullets with the player
    for(var j = 0; j < game.enemyBullets_array.length; j++){
        bullet = game.enemyBullets_array[j];

        if(bullet != null){
            if((bullet.x > game.player.x)&&
                (bullet.x < game.player.x+game.player.w) &&
                (bullet.y > game.player.y)&&
                (bullet.y < game.player.y + game.player.h)){
                    gameOver();
                }
        }
    }

    //enemy reach the bottom of the screen
    for(var j = 0; j < game.enemies_array.length; j++){
        enemy = game.enemies_array[j];

        if(enemy != null){
            if((enemy.y+enemy.w > game.player.y)){
                    gameOver();
                    break;
                }
        }
    }
}

const gameOver = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.bullets_array = [];
    game.enemies_array = [];
    game.enemyBullets_array = [];
    game.gameEnd = true;
    if(game.sound == true){
        game.ending.play();
    }
    message("Game Over!", 100, 60);
    message("Your score is: " +game.points, 220);
    if(game.points>100 && game.points<=200){
        message("You almost got it", 340);
    }else if(game.points > 200){
        message("Well done!", 340);
    }else{
        message("I'm sorry you're so bad!", 340);
    }
    //alert("Game Over!");
    //Clear();
}

//drawing the Game over message
const message =(text, y, size=40) => {
    let middle = (canvas.width/2);
    ctx.save;
    ctx.fillStyle = "green";
    ctx.strokeStyle = "blue";
    ctx.textBaseLine = "top";
    ctx.font = "bold " + size + "px Courier";
    ctx.textAlign = "center";
    ctx.fillText(text, middle, y);
    ctx.restore();
}

const verify = () =>{
    if(game.key[KEY_RIGHT]) {game.x+=10;}
    if(game.key[KEY_LEFT]) {game.x-=10;}
    /* if(game.key[KEY_SPACE]) {
        game.bullets_array.push(new Bullet(game.player.x + 12, game.player.y - 3, 5));
        game.key[KEY_SPACE] = false;
    } */  
    //else if(game.key[KEY_RIGHT]) {game.x+=10;}


    //verifying the canon doesn't dissapear
    if(game.x>canvas.width) {game.x = 0;}
    else if(game.x<0) game.x = canvas.width;

    //shooting
    if(game.key[KEY_SPACE]) {
        if(game.shoot == false){ //controlling the fire rate
            game.bullets_array.push(new Bullet(game.player.x + 12, game.player.y - 3, 5));
            game.key[KEY_SPACE] = false;
            game.shoot=true;
            if(game.sound == true){
                game.playerShooting.play();
            }
        }
    }

    //Enemy shooting
    if(Math.random()>0.96){
        enemiesShooting();
    }
}

const enemiesShooting = () =>{
    var last = new Array();
    for(var i=game.enemies_array.length-1;i>0;i--){
        if(game.enemies_array[i] != null){
            last.push(i);
        }
        if(last.length ==10) break;
    }
    d = last[Math.floor(Math.random()*10)];
    //creating the bullets for the enemies, with the enemy position and the size of the bullet
    game.enemyBullets_array.push(new Bullet(game.enemies_array[d].x+game.enemies_array[d].w/2, game.enemies_array[d].y, 5));
}

const draw = () =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    score();
    game.player.draw(game.x);

    //moving the bullets
    for (var i = 0; i < game.bullets_array.length; i++){
        if (game.bullets_array[i]!=null){
            game.bullets_array[i].draw();
            if (game.bullets_array[i].y<0){
                game.shoot = false;
                game.bullets_array[i] = null;
            } 
        }
    }


    /************************************
     * Moving enemy bullets
     */
    for(var i=0; i<game.enemyBullets_array.length; i++){
        if(game.enemyBullets_array[i] != null){
            game.enemyBullets_array[i].shoot();
            if(game.enemyBullets_array[i].y>canvas.height){
                game.enemyBullets_array[i] = null;
            }
        }
    }

    //enemies
    for (var i = 0; i < game.enemies_array.length; i++){
        if(game.enemies_array[i]!=null){ //only draw the existing enemies
            game.enemies_array[i].draw();
        }
        /* if (game.enemies_array[i]!=null){
            game.enemies_array[i].draw();
            if (game.enemies_array[i].y<0) game.enemies_array[i] = null;
        } */
    }

    /* Example of the little ball
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2*Math.PI);
    ctx.fill();*/
} 

const score = () => {
    ctx.save;
    ctx.fillStyle = "white";
    ctx.font = "bold 20px Courier";
    ctx.fillText("Score: " + game.points, 10, 20);
}

/**
 * Finish code for the space invaders game
 */








/*****************************************************************************
 Starting all the variables/const and functions for the Tanks game
  ****************************************************************************/

tanksGame = {
    //canvas: null,
    //ctx: null,
    heroImage: true,
    x:0,
    y:0,
    image: null,
    radians: 0,
    pulsedKey:null,
    key_array: new Array(),
    bullets_array: new Array(),
    enemies_array: new Array(),
    enemyColors: ["red", "blue", "white", "yellow", "pink", "purple"],
    bulletColor: "red",
    xCenter: 0,
    yCenter: 0,
    w:0,
    h:0,
    points: 0,
    lifes: 3,
    tank: null,
    gameEnd: false, 
    picoseconds: 100,
    nanoseconds: 200,
    bullets: 1000
 }

 sounds = {
    boing: null,
    shooting: null,
    intro: null,
    ending: null,
    boom: null,
    sound: true
 }
 
 /***********
  Constants
   **********/
//we'll use the same ones from the previous game
 
 /***********
  Objects
   **********/
function Projectile(x, y, radians){
    this.x = x;
    this.y = y;
    this.w = 5;
    this.speed = 8;
    this.radians = radians;
    this.draw = function (){
        ctx.save();
        ctx.fillStyle = tanksGame.bulletColor;
        this.x += Math.cos(this.radians) * this.speed;
        this.y += Math.sin(this.radians) * this.speed;
        ctx.fillRect(this.x, this.y, this.w, this.w);
    };
}

function Tank(x, y, radio){
    this.x = x;
    this.y = y;
    this.radio = radio;
    this.scale = 1;
    this.speen = 0;
    this.w = 0;
    this.h = 0;
    this.draw = function (){
        tanksGame.image.src="./images/tanks/tanque.png";
        tanksGame.image.onload = function () {
            this.w = tanksGame.image.width;
            this.h = tanksGame.image.height;
            let ww = this.w/2;
            let hh = this.h/2;
            
            ctx.drawImage(tanksGame.image, tanksGame.xCenter-ww, tanksGame.yCenter-hh);
        }
    };
}

function Foe(x, y){
    this.n = 0;
    this.x = x;
    this.y = y;
    this.startX = x;
    this.startY = y;
    this.status = 1;
    this.r = 10;
    this.w = this.r * 2;
    this.alive = true;
    this.speed = .3 + Math.random();
    this.color = tanksGame.enemyColors[Math.floor(Math.random()*tanksGame.enemyColors.length)];
    this.draw = function (){
        if(this.n < 100 && this.alive){
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
            ctx.fill();
            this.n += this.speed;
            this.x = tanksGame.xCenter * this.n /100 + this.startX * (100 - this.n) / 100;
            this.y = tanksGame.yCenter * this.n /100 + this.startY * (100 - this.n) / 100;
            ctx.restore();
        }
    };
}

/*************
 * Functions
 * ************* */

const heroImageTanks = () =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = 700, canvas.height = 500, canvas.style.border = "solid yellow 3px";
    document.getElementById("clearDiv").style.width = "700px";

    /**
     * Adding the initial values to the TanksGame object
     */
    tanksGame.w = canvas.width;
    tanksGame.h = canvas.height;
    tanksGame.xCenter = tanksGame.w/2;
    tanksGame.yCenter = tanksGame.h/2;



    let image = new Image();
    image.src = "./images/tanks/caratula.jpg";
    image.onload = () => {
        ctx.drawImage(image, 0, 0);
        tanksGame.heroImage = true;
    }
}

const selectTanks = (e) => {
    if (title.innerHTML == "Tanks"){
        if (tanksGame.heroImage){
            startT();
        }
    }
    
}

const startT = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    tanksGame.heroImage = false;
    if (sounds.sound == true){
        sounds.intro.play();
    } 

    tanksGame.points = 0;
    tanksGame.lifes = 3;
    setTimeout(throwEnemy(), 2000);
    animateTank();
}


const throwEnemy = ()=>{
    let side = Math.floor(Math.random()*4) +1;
    let x,y;

    console.log("trowing")
    if(side == 1){
        x = 10;
        y = Math.floor(Math.random()*tanksGame.h);
    }else if(side == 2){
        x = Math.floor(Math.random()*tanksGame.w);
        y = -10;
    }else if(side == 3){
        x = tanksGame.w + Math.floor(Math.random()*tanksGame.w);
        y = Math.floor(Math.random()*tanksGame.h);
    }else if(side == 4){
        x = Math.floor(Math.random()*tanksGame.w);
        y = tanksGame.h + Math.random()*10;
    }
    tanksGame.enemies_array.push(new Foe(x, y));

}

const animateTank = () =>{
    if(tanksGame.gameEnd == false){
        //declaring it as global, so, we can stop it
        myReq = requestAnimationFrame(animateTank); //this function helps to reproduce the game on any browser
        verifyTank();
        drawTank();
    }else{

    }

    /* controlling when to trow the enemies, without recursion and incresing the speed
      */
    if(tanksGame.nanoseconds <= 0){
        throwEnemy();
        tanksGame.nanoseconds = tanksGame.picoseconds;
        if (tanksGame.picoseconds >= 10){
            tanksGame.picoseconds--;
        }
    }else{
        tanksGame.nanoseconds--;
    }
    tanskColisions();

}

const tanskColisions = () => {
    tanksGame.enemies_array.map((enemy,i)=>{
        tanksGame.bullets_array.map((bullet, j)=>{
            if (enemy != null && bullet != null){
                if((bullet.x>enemy.x)&&
                (bullet.x<enemy.x + enemy.w)&&
                (bullet.y>enemy.y)&&
                (bullet.y<enemy.y + enemy.w)){
                    tanksGame.enemies_array[i] = null;
                    tanksGame.bullets_array[j] = null;
                    tanksGame.points += 10;
                    sounds.boing.play();
                }
            }
        })

        if (enemy != null && enemy.n >95){
            tanksGame.enemies_array[i] = null;
            tanksGame.lifes--;
            sounds.boom.play();
            if(tanksGame.lifes <= 0){
                thanksGameOver();
            }
        }
    })
}

const thanksGameOver = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    tanksGame.bullets_array = [];
    tanksGame.enemies_array = [];
    tanksGame.gameEnd = true;
    if(tanksGame.sound == true){
        sounds.ending.play();
    }
    messageTank("Game Over!", canvas.width/2, 100, "center", "bold 60px Courier");
    messageTank("Your score is: " + tanksGame.points, canvas.width/2, 150, "center", "bold 40px Courier");
    if(tanksGame.points>100 && tanksGame.points<=200){
        messageTank("You almost got it", canvas.width/2, 350, "center", "bold 50px Courier");
    }else if(tanksGame.points > 200){
        messageTank("Well done!", canvas.width/2, 350, "center", "bold 50px Courier");
    }else{
        messageTank("I'm sorry you're so bad!", canvas.width/2, 350, "center", "bold 50px Courier");
    }

}

const verifyTank = () =>{
    if(tanksGame.key_array[KEY_SPACE] && tanksGame.bullets > 0){
    
        tanksGame.bullets_array.push(
            new Projectile(
                tanksGame.xCenter+Math.cos(tanksGame.radians)*35,
                tanksGame.yCenter+Math.sin(tanksGame.radians)*35,
                tanksGame.radians
            )
        );
        tanksGame.key_array[KEY_SPACE] = false;
        sounds.shooting.play();

        //controlling the number of bullets
        tanksGame.bullets--;
    }
}

const drawTank = () =>{
    tanksGame.tank.draw();

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    //sending the points message
    let score = `SCORE: ${tanksGame.points} LIFES: ${tanksGame.lifes} BULLETS: ${tanksGame.bullets}`;
    messageTank(score, 10, 20);
    //messageCounter();
    messageTank(String(tanksGame.radians), (canvas.width/2), 450, "center");
    ctx.save();

    ctx.translate(tanksGame.xCenter, tanksGame.yCenter);
    ctx.scale(tanksGame.scale, tanksGame.scale);
    ctx.rotate(tanksGame.radians)

    ctx.drawImage(tanksGame.image, -(tanksGame.image.width / 2), -(tanksGame.image.height / 2))
    ctx.restore();

    for(let i = 0; i < tanksGame.bullets_array.length; i++){
        if (tanksGame.bullets_array[i] != null){
            tanksGame.bullets_array[i].draw();

            /*****************************************
             * Removing the bullet from the memory if they're not on the canvas anymore
             */
            if(tanksGame.bullets_array[i].x < 0 
                || tanksGame.bullets_array[i].x > tanksGame.w 
                || tanksGame.bullets_array[i].y < 0 
                || tanksGame.bullets_array[i].y > tanksGame.h){
                tanksGame.bullets_array[i] = null;
            }
        }
    }

    tanksGame.enemies_array.map((enemy,i) => {
        if(enemy != null){
            enemy.draw();
        }
    });
}

/***********************************************************************************
 * Starts the code for the tanks game
 */
const Tanks = () =>{
    Hide();
    title.innerHTML = "Tanks";
    tanksGame.points = 0;
    tanksGame.gameEnd = false;

    /* 
    Calling the game.sounds 
    */
    sounds.boing = document.getElementById("boing");
    sounds.shooting = document.getElementById("shooting");
    sounds.intro = document.getElementById("intro");
    sounds.ending = document.getElementById("ending");
    sounds.boom = document.getElementById("boom");

    
    //adding the image of the player
    tanksGame.image = new Image();
    //tanksGame.image.src = "./images/tanks/tanque.png";
    tanksGame.tank = new Tank(tanksGame.xCenter, tanksGame.yCenter);

/*
    //restarting the arrays, so, there is not cache memory
    tanksGame.key_array = new Array(); 
    tanksGame.bullets_array = new Array();
    tanksGame.enemies_array = new Array();
    tanksGame.shoot = false;

    tanksGame.enemyImage = new Image();
    tanksGame.enemyImage.src = "./images/spaceShips/invader.fw.png";
    tanksGame.enemyImage.onload = function(){
        for(var i = 0; i <  5; i++){
            for (var j = 0; j < 10; j++){
                //adding each enemy, axis x and y
                tanksGame.enemies_array.push(new Enemy(20+40*j, 30+45*i));
            }
        }
    }*/

    
    heroImageTanks();
    //adding a listener to the whole canvas
    canvas.addEventListener("click", selectTanks, false);
}

const ajust = (xx, yy) =>{
    const pos = canvas.getBoundingClientRect();
    const x = xx - pos.left;
    const y = yy - pos.top;
    return{x, y};
}


//fucntion to show the coordenates of the mouse
const messageTank = (string,x = canvas.width/2 ,y = canvas.height/2, align = "left", font = "bold 20 px Courier", color = "white") =>{
    ctx.save();
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.textBaseLine = "top";
    ctx.font = font;
    
    ctx.textAlign = align;
    //different events will generate each time we move the mouse, so, we need to clear the canvas, otherwise tey will stack
    ctx.clearRect(x, y-20, canvas.width, canvas.height);

    ctx.fillText(string, x, y);
    ctx.restore();
}

const messageCounter = () =>{
    ctx.save();
    ctx.fillStyle = "white";
    ctx.strokeStyle = "white";
    ctx.textBaseLine = "top";
    ctx.font = "bold 20 px Courier";
    ctx.textAlign = "left";
    ctx.clearRect(0, 0, canvas.width, 40);

    ctx.fillText(
        `SCORE: ${tanksGame.points} LIFES: ${tanksGame.lifes} BULLETS: ${tanksGame.bullets}`, 10, 20
    );
    ctx.restore();
}




/**
 * Finish the code for the tanks game
 */












/***********
 LISTENERS for both games
  **********/

//asking the whole document to "listen"
document.addEventListener("keydown", function(e){
    game.pulsedKey = e.key;
    game.key[e.key] = true;

    tanksGame.pulsedKey = e.key;
    tanksGame.key_array[e.key] = true;
})

document.addEventListener("keyup", function(e){
    game.key[e.key] = false;
})

//listening to the movement of the mouse
document.addEventListener("mousemove", function(e){
    var {x,y} = ajust(e.clientX, e.clientY)

    //only used on the tanks game
    var dx = x - tanksGame.xCenter;
    var dy = y - tanksGame.yCenter;
    tanksGame.radians = Math.atan2(dy,dx);
});





/**************************************************************************************************************
 * Most important function for the animation
 ***********************************************************************************************************/

//this function helps to reproduce the game on any browser (makes it recursive)
window.requestAnimationFrame = (function (){
    return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (callback){window.setTimeout(callback,17);}
    
})();

const cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;



function Clear (){
    console.log("clear");
    if (myReq){
        cancelAnimationFrame(myReq);
        myReq = null;
    }
    if (!game.heroImage){
        game.heroImage = true;
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
    startTanks.style.visibility = "visible";

    canvas.removeEventListener("click", select);
    canvas.removeEventListener("click", selectTanks);
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
    startTanks.style.visibility = "hidden";
}