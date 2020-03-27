/* eslint-disable no-magic-numbers */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.style.cssText = 'background: #83a7ff;';



function drawSnowman(x = 400, y = 400, size = 50) {
  const lowerCircleSize = size;
  const upperCircleSize = size * 0.7;
  const lowerCircleX = x;
  const lowerCircleY = y - size;
  const upperCircleX = x;
  const upperCircleY = y - (lowerCircleSize / 2) - (lowerCircleSize * 2);

  const leftEyeX = upperCircleX - (size * 0.2);
  const leftEyeY = upperCircleY - (size * 0.2);
  const leftEyeSize = lowerCircleSize * 0.07;
  const rightEyeX = upperCircleX + (size * 0.2);
  const rightEyeY = upperCircleY - (size * 0.2);
  const rightEyeSize =lowerCircleSize * 0.07;

  const noseX = upperCircleX;
  const noseY = upperCircleY;
  const noseSize = lowerCircleSize * 0.1;

  const mouthX = upperCircleX;
  const mouthY = upperCircleY;
  const mouthSize = lowerCircleSize * 0.4;

  const stickThickness = size * 0.025;
  const leftStickStartX = lowerCircleX - size + (size * 0.15);
  const leftStickStartY = lowerCircleY - size / 2;
  const leftStickEndX = lowerCircleX - (size * 2);
  const leftStickEndY = lowerCircleY - (size * 1.5);
  const rightStickStartX = lowerCircleX + size - (size * 0.15);
  const rightStickStartY = lowerCircleY - size / 2;
  const rightStickEndX = lowerCircleX + (size * 2);
  const rightStickEndY = lowerCircleY - (size * 1.5);

  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(lowerCircleX, lowerCircleY, lowerCircleSize, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(upperCircleX, upperCircleY, upperCircleSize, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = '#f60';
  ctx.beginPath();
  ctx.arc(noseX, noseY, noseSize, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.arc(mouthX, mouthY, mouthSize, 0, Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(leftEyeX, leftEyeY, leftEyeSize, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(rightEyeX, rightEyeY, rightEyeSize, 0, 2 * Math.PI);
  ctx.fill();

  ctx.strokeStyle = '#a73';
  ctx.lineWidth = stickThickness;
  ctx.beginPath();
  ctx.moveTo(leftStickStartX, leftStickStartY);
  ctx.lineTo(leftStickEndX, leftStickEndY);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(rightStickStartX, rightStickStartY);
  ctx.lineTo(rightStickEndX, rightStickEndY);
  ctx.stroke();
}

drawSnowman(200, 400, 50);