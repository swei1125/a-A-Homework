document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById("mycanvas");
  canvas.height = 500;
  canvas.width = 500;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 0, 500, 500);

  ctx.beginPath();
  ctx.arc(50, 50, 50, 0, 2 * Math.PI);
  ctx.strokeStyle = 'yellow';
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.fillStyle = 'red';
  ctx.fill();
  
});
