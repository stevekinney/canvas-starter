export const canvas = document.getElementById('canvas') as HTMLCanvasElement;
export const context = canvas.getContext('2d') as CanvasRenderingContext2D;

context.fillStyle = 'red';
context.fillRect(0, 0, 500 / 2, 500 / 2);
context.fillStyle = 'blue';
context.fillRect(500 / 2, 500 / 2, 500 / 2, 500 / 2);
