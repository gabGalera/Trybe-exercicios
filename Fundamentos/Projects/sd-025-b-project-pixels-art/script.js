function classificar() {
    for (let i = 0; i < document.querySelectorAll('.color').length; i += 1) {
    document.querySelectorAll('.color')[i].addEventListener('click', (evento) => {
        for (let j = 0; j < document.querySelectorAll('.color').length; j += 1) {
        document.querySelectorAll('.color')[j].className = 'color';
        }
        // eslint-disable-next-line no-param-reassign
        evento.target.className += ' selected';
    });
    }
}

classificar();

function corAleatoria() {
    const num1 = Math.floor(Math.random() * 256);
    const num2 = Math.floor(Math.random() * 256);
    const num3 = Math.floor(Math.random() * 256);
    return 'rgb(' + num1.toString() + ',' + num2.toString() + ',' + num3.toString() + ')';
}

document.querySelector('#first').style.backgroundColor = 'black';
document.querySelector('#second').style.backgroundColor = corAleatoria();
document.querySelector('#third').style.backgroundColor = corAleatoria();
document.querySelector('#fourth').style.backgroundColor = corAleatoria();

function pintar(evento) {
  // eslint-disable-next-line no-param-reassign
  evento.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

for (let i = 0; i < document.querySelectorAll('.pixel').length; i += 1) {
  document.querySelectorAll('.pixel')[i].addEventListener('click', pintar);
}

function apagar() {
  for (let i = 0; i < document.querySelectorAll('.pixel').length; i += 1) {
    document.querySelectorAll('.pixel')[i].style.backgroundColor = 'white';
  }
}

document.querySelector('#clear-board').addEventListener('click', apagar);

function limitaTamanho(valor) {
  if (valor > 50) {
    valor = 50;
    return valor;
  } if (valor < 5) {
    valor = 5;
    return valor;
  }
  return valor;
}

function mudarTamanho() {
  if (document.querySelector('#board-size').value > 0 && document.querySelector('#board-size').value.length > 0) {
    let num = document.querySelector('#board-size').value;
    const numInicial = document.querySelectorAll('.pixel').length;
    num = limitaTamanho(num);
    for (let i = 0; i < numInicial; i += 1) {
      document.getElementById('pixel-board').removeChild(document.getElementById('pixel-board').firstElementChild);
    }
    for (let i = 0; i < num * num; i += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      document.getElementById('pixel-board').appendChild(pixel);
    }
    const num2 = 42 * num;
    document.getElementById('pixel-board').style.width = `${num2.toString()}px`;
    for (let i = 0; i < document.querySelectorAll('.pixel').length; i += 1) {
        document.querySelectorAll('.pixel')[i].addEventListener('click', pintar);
      }
  } else {
    alert('Board inválido!');
  }
}

document.querySelector('#generate-board').addEventListener('click', mudarTamanho);
