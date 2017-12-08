window.onload = init;
var movers = [];
var ctx;
var canvas;
var attractor;
var repeller;

function init(){
  canvas = document.getElementById('cnv')
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid red 3px';
  canvas.style.backgroundColor = 'red';
  ctx = canvas.getContext('2d');
  createMovers(10);
  createAttractor();
  createRepeller();
  animate();
}

function animate(){

  ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
  for(let i = 0; i < movers.length; i++){
    movers[i].update();
  }
  attractor.update();
  repeller.update();

  requestAnimationFrame(animate);
}

function createMovers(numMovers){
  for(let i = 0; i < numMovers; i++){
    var radius = Math.random() *10 + 1;
    var x = Math.random()*window.innerWidth;
    var y = Math.random()*window.innerHeight;
    var dx = Math.random()*10;
    var dy = Math.random()*10;
    movers.push(new Mover(new JSVector(x,y), new JSVector(dx,dy), radius, 'green', new JSVector(0,0)));
  }
}

function createAttractor(){
  var len = 10;
  var x = Math.random() * window.innerWidth;
  var y = Math.random()*window.innerHeight;
  var dx = Math.random()*7.5;
  var dy = Math.random()*7.5;
  attractor = new Attractor(new JSVector(x,y), new JSVector(dx,dy), len, 'blue');
}

function createRepeller(){
  var len = 10;
  var x = Math.random() * window.innerWidth;
  var y = Math.random()*window.innerHeight;
  var dx = Math.random()*7.5;
  var dy = Math.random()*7.5;
  repeller = new Repeller(new JSVector(x,y), new JSVector(dx,dy), len, 'black');
}
