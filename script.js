
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

let noSize = 20;
let yesSize = 20;

noBtn.addEventListener('mouseover', () => {
  noSize -= 1;
  yesSize += 2;
  noBtn.style.fontSize = noSize + 'px';
  yesBtn.style.fontSize = yesSize + 'px';
});

yesBtn.addEventListener('click', () => {
  window.location.href = 'message.html';
});
