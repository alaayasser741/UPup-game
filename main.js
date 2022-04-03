//////////////////////////////
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
var gradient = ctx.createLinearGradient(0, 0, 0,canvas.height);
gradient.addColorStop(0, "#AADBEA");
gradient.addColorStop(1, "#FEF1E1");
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 502, 202);
//////////////////////////
const smile = document.getElementById("Smile");
const ctx2 = smile.getContext("2d");

ctx2.strokeStyle = 'red';
ctx2.beginPath();
ctx2.arc(175, 75,50, 0, Math.PI * 2, true);
ctx2.moveTo(210,75);

ctx2.arc(175, 75, 35, 0, Math.PI, false);
ctx2.moveTo(165,65);

ctx2.arc(160, 65, 5, 0, Math.PI * 2, true);
ctx2.moveTo(195,65);

ctx2.arc(190,65,5,0,Math.PI * 2 , true);
ctx2.fillStyle = 'red';
ctx2.font = "30px Arial";
ctx2 .fillText("Game Over", 100,150)
ctx2.stroke();
///////////////////////////////////
const cloud = document.getElementById('cloud');
var ctx5 = cloud.getContext("2d");

ctx5.beginPath();

// left
ctx5.arc(40,65,40,0,2*Math.PI)
ctx5.fillStyle = "rgb(255,255,255)";
ctx5.fill();

// center
ctx5.arc(110,50,50,0,2*Math.PI)
ctx5.fillStyle = "rgb(255,255,255)";
ctx5.fill();

// rights
ctx5.arc(170,65,40,0,2*Math.PI)
ctx5.fillStyle = "rgb(255,255,255)";
ctx5.fill();

ctx5.fillStyle = "rgba(255, 255, 255)";
ctx5.fillRect (45, 35, 120, 70);
ctx5.fill();
///////////////
const cloud2 = document.getElementById('cloud2');
var ctx6 = cloud2.getContext("2d");

ctx6.beginPath();

// left
ctx6.arc(40,65,40,0,2*Math.PI)
ctx6.fillStyle = "rgb(255,255,255)";
ctx6.fill();

// center
ctx6.arc(110,50,50,0,2*Math.PI)
ctx6.fillStyle = "rgb(255,255,255)";
ctx6.fill();

// rights
ctx6.arc(170,65,40,0,2*Math.PI)
ctx6.fillStyle = "rgb(255,255,255)";
ctx6.fill();

ctx6.fillStyle = "rgba(255, 255, 255)";
ctx6.fillRect (45, 35, 120, 70);
ctx6.fill();
///////////////
var character = 
document.getElementById('character');
var block = 
document.getElementById('block');
var Smile = 
document.getElementById('Smile');
var btn = 
document.getElementById('btn');
var cloudAnimatin = 
document.getElementById('cloud');
var cloudAnimatin2 = 
document.getElementById('cloud2');
//jump function 
function jump(){
    if (character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}
var checkDead = setInterval(function(){
    var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = 
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft <20 && blockLeft > 0 && characterTop > 130){
        block.style.animation = "none";
        cloudAnimatin.style.animation = "none";
        cloudAnimatin2.style.animation = "none";
        block.style.display = "none";
        Smile.style.display = "block";
        btn.style.display = "block";
        // alert("U Lose Loser")
    }
}, 10);
btn.addEventListener('click',function(){ location.reload();})

/////////////////////////
var sun = document.getElementById('stage');
var context = sun.getContext('2d');

var drawSun = function() {

    context.fillStyle = 'yellow';
  context.beginPath();
  context.arc(75, 75, 30, 0, Math.PI * 2, true);
  context.closePath();
  context.fill();
  context.save();

  for (var i = 0; i < 8; i++) {
    angle = i * 360 / 8;
    console.log(angle, angle * Math.PI / 180);
    context.translate(75, 75);
    context.rotate(angle * Math.PI / 180);
    context.translate(-75, -75);

    context.beginPath();
    context.fillStyle = 'yellow';
    context.moveTo(60, 35);
    context.lineTo(75, 15);
    context.lineTo(90, 35);
    context.closePath();
    context.fill();

    context.restore();
  }
}
drawSun();