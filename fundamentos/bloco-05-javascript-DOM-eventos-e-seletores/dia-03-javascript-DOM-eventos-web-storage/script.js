function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.
//   🚀 Exercício 1:
// Crie um calendário dinamicamente.
// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
// Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.
// A tag <ul> deve conter o id 'days';
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for (let i = 0; i < decemberDaysList.length; i += 1) {
    let li = document.createElement('li');
    li.className = 'day';
    li.innerText = decemberDaysList[i];
    if (decemberDaysList[i] === 24 || decemberDaysList[i] === 25 || decemberDaysList[i] === 31) {
        li.className += ' holiday';
    }
    if (decemberDaysList[i] === 4 || decemberDaysList[i] === 11 || decemberDaysList[i] === 18 || decemberDaysList[i] === 25) {
        li.className += ' friday';
    }
    document.querySelector('#days').appendChild(li);
}

// 🚀 Exercício 2:
// Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

let button = document.createElement('button');
button.type = 'button'; 
button.innerText = 'Feriados';
button.id = 'btn-holiday';
document.querySelector('.buttons-container').appendChild(button);

// 🚀 Exercício 3:
// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".

button.addEventListener('click', function () { 
    let aux = document.querySelectorAll('.holiday');
    if (document.querySelectorAll('.holiday')[0].style.color !== "white") {
        for (i = 0; i < aux.length; i += 1) {
            document.querySelectorAll('.holiday')[i].style.backgroundColor = "green";
            document.querySelectorAll('.holiday')[i].style.color = "white";
        }
    } else {
        for (i = 0; i < aux.length; i += 1) {
            document.querySelectorAll('.holiday')[i].style.backgroundColor = "rgb(238,238,238)";
            document.querySelectorAll('.holiday')[i].style.color = '#777';
        }
    }
});

// 🚀 Exercício 4:
// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

let sextaFeira = document.createElement('button');
sextaFeira.type = 'button'; 
sextaFeira.innerText = 'Sexta-feira';
sextaFeira.id = 'btn-friday';
document.querySelector('.buttons-container').appendChild(sextaFeira);

// 🚀 Exercício 5:
// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.

sextaFeira.addEventListener('click', function () { 
    let aux = document.querySelectorAll('.friday');
    let a = [];
    if (document.querySelectorAll('.friday')[0].style.color !== "white") {
        for (i = 0; i < aux.length; i += 1) {
            a.push = document.querySelectorAll('.friday')[i].innerHTML;
            document.querySelectorAll('.friday')[i].style.backgroundColor = "green";
            document.querySelectorAll('.friday')[i].style.color = "white";
            document.querySelectorAll('.friday')[i].innerText = "SEXTOU!"
        }
    } else {
        for (i = 0; i < aux.length; i += 1) {
            document.querySelectorAll('.friday')[i].style.backgroundColor = "rgb(238,238,238)";
            document.querySelectorAll('.friday')[i].style.color = '#777';
            document.querySelectorAll('.friday')[i].innerText = decemberDaysList[i + 5 + 6*i];
        }
    }
});

// 🚀 Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target.

for (let i = 0; i < document.querySelectorAll('.day').length; i += 1) {
    document.querySelectorAll('.day')[i].addEventListener('mouseover', funcao)
    document.querySelectorAll('.day')[i].addEventListener('mouseout', funcao2)
}

function funcao(evento) {
    evento.target.style.zoom = 3;
}

function funcao2(evento) {
    evento.target.style.zoom = 1;
}

// 🚀 Exercício 7:
// Implemente uma função que adicione uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

