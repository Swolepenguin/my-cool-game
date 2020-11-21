const canvas = document.getElementById("table");
const ctx = canvas.getContext('2d');
const reset = document.getElementById("reset")
const statement = document.querySelector('.statement')


console.log(statement)
const ball = {
    x : canvas.width/2,
    y : canvas.height/2,
    radius : 10,
    velocityX : 5,
    velocityY : 5,
    speed : 7,
    color : "blue"
}


const human = {
    x : 0, 
    y : (canvas.height - 100)/2, 
    width : 10,
    height : 100,
    score : 0,
    color : "orange",
    paddle : 'player'
}


const AI = {
    x : canvas.width - 10,
    y : (canvas.height - 100)/2,
    width : 10,
    height : 100,
    score : 0,
    color : "orange",
    paddle: 'CPU'
}


const net = {
    x : (canvas.width - 2)/2,
    y : 0,
    height : 10,
    width : 2,
    color : "purple"
}
//draws the board
function paddles(x, y, w, h, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}
//for ball
function drawArc(x, y, r, color){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
}
//for player movement
canvas.addEventListener("mousemove", getMousePos);

function getMousePos(evt){
    let rect = canvas.getBoundingClientRect();
    
    human.y = evt.clientY - rect.top - human.height/2;
}
let AILevel = 0.1;
AI.y += (ball.y - (AI.y+AI.height/2))*AILevel; 
//ball reset
function resetBall(){
    ball.x = canvas.width/2;
    ball.y = canvas.height/2;
    ball.velocityX = -ball.velocityX;
    ball.speed = 7;
}
//draws the objects
function drawNet(){
    for(let i = 0; i <= canvas.height; i+=15){
        paddles(net.x, net.y + i, net.width, net.height, net.color);
    }
}

function drawText(text,x,y){
    ctx.fillStyle = "#FFF";
    ctx.font = "75px fantasy";
    ctx.fillText(text, x, y);
}

function collision(b,p){
    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x + p.width;
    
    b.top = b.y - b.radius;
    b.bottom = b.y + b.radius;
    b.left = b.x - b.radius;
    b.right = b.x + b.radius;
    
    return p.left < b.right && p.top < b.bottom && p.right > b.left && p.bottom > b.top;
}

function update(){
    if( ball.x - ball.radius < 0 ){
        AI.score++;
        checkWinner(AI)
    }else if( ball.x + ball.radius > canvas.width){
        human.score++;
        checkWinner(human)
}  

function checkWinner(player) {
    resetBall();
    if (player.score >= 10) {
        delete ball.speed;
        const newElement = document.createElement('p');

        newElement.textContent = `${player.paddle} wins!`;
        statement.appendChild(newElement);
    }
}



ball.x += ball.velocityX;
ball.y += ball.velocityY;
AI.y += ((ball.y - (AI.y + AI.height/2)))*0.1;    
if(ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height){
    ball.velocityY = -ball.velocityY;
}
let player = (ball.x + ball.radius < canvas.width/2) ? human : AI;
    
if(collision(ball,player)){
    let collidePoint = (ball.y - (player.y + player.height/2));
    collidePoint = collidePoint / (player.height/2);
    let angleRad = (Math.PI/4) * collidePoint;
    let direction = (ball.x + ball.radius < canvas.width/2) ? 1 : -1;
    ball.velocityX = direction * ball.speed * Math.cos(angleRad);
    ball.velocityY = ball.speed * Math.sin(angleRad);
    ball.speed += 0.1;
    }
}
function render(){
    paddles(0, 0, canvas.width, canvas.height, "#000");
    drawText(human.score,canvas.width/4,canvas.height/5);
    drawText(AI.score,3*canvas.width/4,canvas.height/5);
    drawNet();
    paddles(human.x, human.y, human.width, human.height, human.color);
    paddles(AI.x, AI.y, AI.width, AI.height, AI.color);
    drawArc(ball.x, ball.y, ball.radius, ball.color);
}

function game(){
    update();
    render();
}
reset.addEventListener('click',function(){
    window.location.reload()
    console.log(reset)
})

let framePerSecond = 100;
let loop = setInterval(game,1000/framePerSecond);
