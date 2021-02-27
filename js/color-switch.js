/**Напиши скрипт, который после нажатия кнопки Start, 
 * раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. 
 * При нажатии на кнопку Stop, изменение цвета фона должно останавливаться. */
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let interval = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const ref = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
}

function changeBgColor() { 
  const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
  document.body.style.background=color;
}

function startBtnHandler() { 
  interval = setInterval(changeBgColor, 1000);
  ref.btnStart.disabled = true;
}

function stopBtnHandler() {
  clearInterval(interval);
  ref.btnStart.disabled = false;
} 

ref.btnStart.addEventListener('click', startBtnHandler);
ref.btnStop.addEventListener('click', stopBtnHandler);