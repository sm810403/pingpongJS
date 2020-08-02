const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
//score
var score1 = 0;
var score2 = 0;
function drawText(){
    ctx.font = '20px Arial';
    ctx.fillText(`Score:${score1}`,20,30 );

    ctx.font = '20px Arial';
    ctx.fillText(`Score:${score2}`,700,30 );
}
//create scoreBoard
const sb1 = {
    x: canvas.width - canvas.width,
    y: canvas.height/2-60,
    w: 30,
    h: 120,
    dy: 30
}
const sb2 = {
    x: canvas.width,
    y: canvas.height/2-30,
    w: -30,
    h: 120,
}
function drawPaddle(){
    ctx.beginPath();
    ctx.rect(sb1.x,sb1.y,sb1.w,sb1.h);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
}
function drawPaddle2(){
    ctx.beginPath();
    ctx.rect(sb2.x,sb2.y,sb2.w,sb2.h);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
}

//draw line
var gap = 25
function drawLine(){
    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = '10';
    ctx.moveTo(400, 0+gap);
    ctx.lineTo(400, 50+gap);
    ctx.moveTo(400, 100+gap);
    ctx.lineTo(400, 150+gap);
    ctx.moveTo(400, 200+gap);
    ctx.lineTo(400, 250+gap);
    ctx.moveTo(400, 300+gap);
    ctx.lineTo(400, 350+gap);
    ctx.moveTo(400, 400+gap);
    ctx.lineTo(400, 450+gap);
    ctx.moveTo(400, 500+gap);
    ctx.lineTo(400, 550+gap);
    ctx.stroke();
    ctx.closePath();
}


//create ball, draw ball, move ball
var ball = {
    x: canvas.width/2,
    y: canvas.height/2,
    radius: 20,
    dx: 10,
    dy: 2,
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
    //wall detection
    if (ball.x + ball.radius > canvas.width || ball.x-ball.radius < 0){
        ball.dx = -ball.dx;
    }
    if (ball.y + ball.radius > canvas.height || ball.y-ball.radius < 0){
        ball.dy = -ball.dy;
    }
    //  //hit paddel
    //  if (ball.x+ball.radius<sb2.x&& ball.y+ball.radius>sb2.y&&ball.y-ball.radius<sb2.y+sb2.h){
    //     ball.dx -=ball.dx;
    //     ball.dy -=ball.dy;
    // }
    //hit wall
    if (ball.x + ball.radius > canvas.width){
        score2++;
        // ball.x = canvas.width/2; 
        // ball.y = canvas.width/2-100; 
        // ball.dx = 0; 
        // ball.dy = 0;
        // ball.visible = true;   
    } else if (ball.x-ball.radius< 0){
        score1++;
        // ball.x = canvas.width/2; 
        // ball.y = canvas.width/2-100; 
        // ball.dx = 0; 
        // ball.dy = 0;
        // ball.visible = true; 
    }
    if (score1 === 10 || score2 === 10) {
        score1 = 0;
        score2 = 0;
        ball.x = canvas.width/2; 
        ball.y = canvas.width/2-100; 
        ball.dx = 0; 
        ball.dy = 0;
        ball.visible = true;
    }
   
    
}




function draw(){
    drawBall();
    drawText();
    drawPaddle();
    drawPaddle2();
    drawLine();
}
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight);
    draw();
    moveBall();
}
animate();

addEventListener('keydown',function(e){
    if (e.key === 'ArrowUp'){
        sb1.y -= sb1.dy;
    } else if (e.key ==='ArrowDown'){
        sb1.y += sb1.dy;
    }
    if (sb1.y+sb1.h > canvas.height){
        sb1.y = canvas.height - sb1.h;
    } else if (sb1.y < 0){
        sb1.y = 0;
    }
})