const table = document.getElementsByClassName('table');
const context = canvas.getcontext('2d');
context.fillStyle = 'red';
context.fillRect(100,200,50,75);
context.fillStyle = 'orange';
context.beginPath();
context.arc(300,350,100,0, Math.PI*2, false);
context.closePath();
context.fill();

function box()