const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.rect(10, 20, 150, 100);
ctx.fill();

canvas.addEventListener('scroll', (e) => {

  console.log("Scrolling ", e)

});


const div = document.querySelector('.test-div');

function trtr(event) {
  console.log("Scrolling ", event);
  ctx.translate(200, 200);
  ctx.scale(2, 2);
  ctx.translate(300, 300);
}
window.addEventListener('scroll', trtr);