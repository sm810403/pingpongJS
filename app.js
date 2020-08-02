const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;
//score
var score = 0;
function drawText(){
    ctx.font = '20px Arial';
    ctx.fillText(`Score:${score}`,30,30 );
}
//create scoreBoard
const sb1 = {
    x: canvas.width - canvas.width,
    y: canvas.height/2-40,
    w: 10,
    h: 80,
}
const sb2 = {
    x: canvas.width-10,
    y: canvas.height/2-40,
    w: 10,
    h: 80,
}
function drawBoards(){
    ctx.beginPath();
    ctx.rect(sb1.x,sb1.y,sb1.w,sb1.h);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
}
function drawBoards2(){
    ctx.beginPath();
    ctx.rect(sb2.x,sb2.y,sb2.w,sb2.h);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
}
//create ball, draw ball, move ball
const ball = {
    x: canvas.width/2,
    y: canvas.height/2,
    radius: 20,
    dx: 2,
    dy: 1,
    visible: true,
}
function drawBall(){
    ctx.beginPath();
    ctx.arc(ball.x,ball.y,ball.radius,0,Math.PI*2, false);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
}
function moveBall(){
    ball.x += ball.dx;
    ball.y +=ball.dy;
    if (ball.x + ball.radius > canvas.width || ball.x-ball.radius < 0){
        ball.dx = -ball.dx;
    }
    if (ball.y + ball.radius > canvas.height || ball.y-ball.radius < 0){
        ball.dy = -ball.dy;
    }
}




function draw(){
    drawBall();
    drawText();
    drawBoards();
    drawBoards2();

}
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight);
    draw();
    moveBall();
}
animate();