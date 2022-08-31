window.onload = function () {
  document.querySelector('#lista-tarefas').innerHTML = localStorage.getItem('dados');
};

function mudaCor(evento) {
  for (let i = 0; i < document.querySelectorAll('li').length; i += 1) {
    document.querySelectorAll('li')[i].style.backgroundColor = 'white';
    document.querySelectorAll('li')[i].style.color = 'black';
    document.querySelectorAll('li')[i].addEventListener('click', mudaCor);
    document.querySelectorAll('li')[i].classList.remove('selecionada');
    // textoDaLista.addEventListener('dblclick', tarefaIncompleta);
  }
  if (evento.target.style.backgroundColor !== 'gray') {
    evento.target.className += ' selecionada';
  }
  evento.target.style.backgroundColor = 'gray';
  evento.target.style.color = 'white';
  evento.target.removeEventListener('click', mudaCor);
  evento.target.addEventListener('dblclick', tarefaCompleta);
  localStorage.setItem('dados', document.querySelector('#lista-tarefas').innerHTML);
}

function tarefaIncompleta(evento) {
  evento.target.className = 'tarefa selecionada';
  localStorage.setItem('dados', document.querySelector('#lista-tarefas').innerHTML);
}

function tarefaCompleta(evento) {
  evento.target.className += ' completed';
  evento.target.removeEventListener('dblclick', tarefaCompleta);
  evento.target.addEventListener('dblclick', tarefaIncompleta);
  localStorage.setItem('dados', document.querySelector('#lista-tarefas').innerHTML);
}

document.querySelector('#criar-tarefa').addEventListener('click', () => {
  const textoDaLista = document.createElement('li');
  textoDaLista.innerText = document.querySelector('#texto-tarefa').value;
  textoDaLista.addEventListener('click', mudaCor);
  textoDaLista.className = 'tarefa';
  document.querySelector('#lista-tarefas').appendChild(textoDaLista);
  document.querySelector('#texto-tarefa').value = null;
  localStorage.setItem('dados', document.querySelector('#lista-tarefas').innerHTML);
});

function apagarTudo() {
  const lista = document.querySelectorAll('.tarefa').length;
  for (let i = 0; i < lista; i += 1) {
    document.getElementById('lista-tarefas').removeChild(document.getElementById('lista-tarefas').firstElementChild);
  }
  localStorage.setItem('dados', document.querySelector('#lista-tarefas').innerHTML);
}

function apagarFinalizado() {
  const filhos = document.getElementById('lista-tarefas').children;
  for (let i = 1; i < 3; i += 1) {
    for (let j = 0; j < filhos.length; j += 1) {
      if (filhos[j].classList[i] === 'completed') {
        document.getElementById('lista-tarefas').removeChild(filhos[j]);
        j -= 1;
      }
    }
  }
  localStorage.setItem('dados', document.querySelector('#lista-tarefas').innerHTML);
}

document.getElementById('mover-cima').addEventListener('click', () => {
  const filhos = document.getElementById('lista-tarefas').children;
  for (let i = 1; i < filhos.length; i += 1) {
    if (filhos[i].classList[1] === 'selecionada') {
      const aux = filhos[i - 1].innerHTML;
      const aux1 = filhos[i - 1].className;
      const aux2 = filhos[i - 1].style.backgroundColor;
      const aux3 = filhos[i - 1].style.color;
      filhos[i - 1].innerHTML = filhos[i].innerHTML;
      filhos[i - 1].className = filhos[i].className;
      filhos[i - 1].style.backgroundColor = filhos[i].style.backgroundColor;
      filhos[i - 1].style.color = filhos[i].style.color;
      filhos[i].innerHTML = aux;
      filhos[i].className = aux1;
      filhos[i].style.backgroundColor = aux2;
      filhos[i].style.color = aux3;
    }
  }
  localStorage.setItem('dados', document.querySelector('#lista-tarefas').innerHTML);
});

document.getElementById('mover-baixo').addEventListener('click', () => {
  const filhos = document.getElementById('lista-tarefas').children;
  for (let i = 0; i < filhos.length - 1; i += 1) {
    if (filhos[i].classList[1] === 'selecionada') {
      const aux = filhos[i + 1].innerHTML;
      const aux1 = filhos[i + 1].className;
      const aux2 = filhos[i + 1].style.backgroundColor;
      const aux3 = filhos[i + 1].style.color;
      filhos[i + 1].innerHTML = filhos[i].innerHTML;
      filhos[i + 1].className = filhos[i].className;
      filhos[i + 1].style.backgroundColor = filhos[i].style.backgroundColor;
      filhos[i + 1].style.color = filhos[i].style.color;
      filhos[i].innerHTML = aux;
      filhos[i].className = aux1;
      filhos[i].style.backgroundColor = aux2;
      filhos[i].style.color = aux3;
      break;
    }
  }
  localStorage.setItem('dados', document.querySelector('#lista-tarefas').innerHTML);
});

document.getElementById('remover-selecionado').addEventListener('click', () => {
  const filhos = document.getElementById('lista-tarefas').children;
  for (let i = 0; i < filhos.length; i += 1) {
    if (filhos[i].classList[1] === 'selecionada') {
      document.getElementById('lista-tarefas').removeChild(filhos[i]);
    }
  }
});

document.getElementById('apaga-tudo').addEventListener('click', apagarTudo);
document.getElementById('remover-finalizados').addEventListener('click', apagarFinalizado);
