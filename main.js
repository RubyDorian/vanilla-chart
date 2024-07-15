import './style.css'

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = 800;
const height = 600;
canvas.width = width;
canvas.height = height;

ctx.clearRect(0, 0, width, height);

console.log('canvas', canvas);
console.log('ctx', ctx);
