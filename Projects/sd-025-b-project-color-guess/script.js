function corAleatoria() {
  const num1 = Math.floor(Math.random() * 256);
  const num2 = Math.floor(Math.random() * 256);
  const num3 = Math.floor(Math.random() * 256);
  return 'rgb(' + num1.toString() + ',' + num2.toString() + ',' + num3.toString() + ')';
}

var count = 0;

function funcao(e) {
  if (e.target.style.backgroundColor === document.getElementById('rgb-color').innerText) {
    document.getElementById('answer').innerText = 'Acertou!'; 
  } else {
    document.getElementById('answer').innerText = 'Errou! Tente novamente!';
  }
  if (document.getElementById('answer').innerText === 'Acertou!') {
    count += 1;
    document.getElementById('score').innerText = 3 * count;
  }
}

let ball = document.getElementsByClassName('ball');

for (let i = 0; i < document.getElementsByClassName('ball').length; i += 1) {
  ball[i].style.backgroundColor = corAleatoria();
  ball[i].addEventListener('click', funcao);
}

document.getElementById('rgb-color').innerText = ball[Math.floor(Math.random() * 6)].style.backgroundColor;

document.getElementById('reset-game').addEventListener('click', () =>{
  for (let i = 0; i < document.getElementsByClassName('ball').length; i += 1) {
    ball[i].style.backgroundColor = corAleatoria();
    ball[i].addEventListener('click', funcao);
  }
  document.getElementById('rgb-color').innerText = ball[Math.floor(Math.random() * 6)].style.backgroundColor;
  document.getElementById('answer').innerText = 'Escolha uma cor';
});

document.getElementById('answer').addEventListener('change', () => {
  
});
