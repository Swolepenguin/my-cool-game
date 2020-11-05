const canvas = document.getElementById("table");
const ctx = canvas.getContext('2d');

const ball = {
    x : canvas.width/2,
    y : canvas.height/2,
    radius : 10,
    velocityX : 5,
    velocityY : 5,
    speed : 7,
    color : "blue"
}


const user = {
    x : 0,
    y : (canvas.height - 100)/2, 
    width : 10,
    height : 100,
    score : 0,
    color : "orange"
}


const com = {
    x : canvas.width - 10, 
    y : (canvas.height - 100)/2,
    width : 10,
    height : 100,
    score : 0,
    color : "orange"
}


const net = {
    x : (canvas.width - 2)/2,
    y : 0,
    height : 10,
    width : 2,
    color : "purple"
}

