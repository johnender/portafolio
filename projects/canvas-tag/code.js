window.requestAnimFrame=function(){
    return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}
}();

document.onselectstart = function() {
  return false;
};

//starting all the variables
var c = document.getElementById('canvasfield');

//debbuging
console.log(c);

var ctx = c.getContext('2d');
var dpr = window.devicePixelRatio;
var cw = window.innerWidth;
console.log(cw);
var ch = window.innerHeight;
c.width = cw * dpr;
c.height = ch * dpr;
ctx.scale(dpr, dpr);

//function to calc a random value
var rand = function(rMi, rMa){return ~~((Math.random()*(rMa-rMi+1))+rMi);}

ctx.lineCap = 'round';
var orbs = [];
var orbCount = 30;
var radius;

var trailCB = document.getElementById('trail');
var trail = trailCB.checked;
var clearer = document.getElementById('clear');
var reseter = document.getElementById('reset');
var slider = document.getElementById('myRange');
console.log(slider);


function createOrb(mx,my){
  var dx = (cw/2) - mx;
	var dy = (ch/2) - my;
	var dist = Math.sqrt(dx * dx + dy * dy);
	var angle = Math.atan2(dy, dx);

    //adding a object as value to the orbs (array), each orb is and object with all this info/functions
	orbs.push({
		x: mx,
		y: my,
		lastX: mx,
		lastY: my,
		hue: 0,
		colorAngle: 0,
		angle: angle + Math.PI/2,
		//size: .5+dist/250,
		size: rand(1,3)/2,
		centerX: cw/2,
		centerY: ch/2,		
		radius: dist,
		speed: (rand(5,10)/1000)*(dist/750)+.015,
		alpha: 1 - Math.abs(dist)/cw,
		draw: function() {			
			ctx.strokeStyle = 'hsla('+this.colorAngle+',100%,50%,1)';	
			ctx.lineWidth = this.size;			
			ctx.beginPath();
			ctx.moveTo(this.lastX, this.lastY);
			ctx.lineTo(this.x, this.y);
			ctx.stroke();
		},	
		update: function(){
			var mx = this.x;
			var my = this.y;	
			this.lastX = this.x;
			this.lastY = this.y;
			var x1 = cw/2;
			var y1 = ch/2;
			var x2 = mx;
			var y2 = my;		
			var rise = y1-y2;
			var run = x1-x2;
			var slope = -(rise/run);
			var radian = Math.atan(slope);
			var angleH = Math.floor(radian*(180/Math.PI));		
			if(x2 < x1 && y2 < y1){angleH += 180;}		
			if(x2 < x1 && y2 > y1){angleH += 180;}		
			if(x2 > x1 && y2 > y1){angleH += 360;}		
			if(y2 < y1 && slope =='-Infinity'){angleH = 90;}		
			if(y2 > y1 && slope =='Infinity'){angleH = 270;}		
			if(x2 < x1 && slope =='0'){angleH = 180;}
			if(isNaN(angleH)){angleH = 0;}
			
			this.colorAngle = angleH;
			this.x = this.centerX + Math.sin(this.angle*-1) * this.radius;
			this.y = this.centerY + Math.cos(this.angle*-1) * this.radius;
			this.angle += this.speed;
		
		}
	});
}

//function to define where the mouse is at and create a new dot there
function orbGo(e){
	var mx = e.pageX - c.offsetLeft;
	var my = e.pageY - c.offsetTop;		
	createOrb(mx,my);
}

//functions to toggle the mouse movement
function turnOnMove(){
	c.addEventListener('mousemove', orbGo, false);	
}

function turnOffMove(){
	c.removeEventListener('mousemove', orbGo, false);	
}

//toggle is the trails sohuld be visible or not
function toggleTrails(){
	trail = trailCB.checked;
}

//button to remove the dots
function clear(){
    orbs = []; 
}

//new button to remove the dots and the trails
function reset(){
    orbs = []; 
    ctx.clearRect(0,0,cw,ch);
}

//new slider to change trails intensity (initially on 50)
var slideValue = slider.value;
function changeSlider(){
    slideValue = slider.value;
    console.log(slider.value)
}

//addint the listeners to thje mouse movement and button options
c.addEventListener('mousedown', orbGo, false);
c.addEventListener('mousedown', turnOnMove, false);
c.addEventListener('mouseup', turnOffMove, false);
trailCB.addEventListener('change', toggleTrails, false);
clearer.addEventListener('click', clear, false);
reseter.addEventListener('click', reset, false);
slider.addEventListener('change', changeSlider, false);

//starts creatins 100 orbs
var count = 100;
while(count--){
		createOrb(cw/2, ch/2+(count*2));
}

//main loop for the app
var intensity;
var loop = function(){
    //recursive call to the function who returns the corresponding animation
    window.requestAnimFrame(loop);
	if(trail){
        //calculating the new intensity (inverse proportional to the value of the slider, the result is between 0 an 0.1)
        intensity = (100-slideValue)/1000;
		ctx.fillStyle = `rgba(0,0,0,${intensity})`;
		ctx.fillRect(0,0,cw,ch);
	} else {
		ctx.clearRect(0,0,cw,ch);
	}

    //updating and the dots, three times each
	var i = orbs.length;
	while(i--){	
		var orb = orbs[i];	
		var updateCount = 3;
		while(updateCount--){
		orb.update();		
		orb.draw(ctx);
		}
		
	}
}
   
//calling the main loop
loop();
