/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
function randomClass(e) {
  let grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
  let grupoTamanho = ['medium', 'big', 'reallybig'];
  let grupoRotacao = ['rotateleft', 'rotateright'];
  let grupoInclinacao = ['skewleft', 'skewright'];
  let aleatorio1 = Math.floor(Math.random() * 3);
  let aleatorio2 = Math.floor(Math.random() * 2); 

  e.className = grupoEstilo[aleatorio1] + ' ' + grupoTamanho[aleatorio1] + ' ' + grupoRotacao[aleatorio2] + ' ' + grupoInclinacao[aleatorio2];
}
 
function funcao(evento) {
  randomClass(evento.target);
}
  
document.getElementById('criar-carta').addEventListener('click', () => {
  let arrei = document.getElementById('carta-texto').value.split(" ").toString();
  if (arrei === "") {
    document.getElementById('carta-gerada').innerText = "Por favor, digite o conteúdo da carta."
  } else if (arrei.match(/,/g) !== null && arrei.length === arrei.match(/,/g).length) {
    document.getElementById('carta-gerada').innerText = "Por favor, digite o conteúdo da carta."
  } else {
    arrei = arrei.split(",");
    let n = arrei.length;
    for (let i = 0; i < n; i += 1) {
      arrei[i] = "<span>"+ arrei[i] + "</span>";
    }
    document.getElementById('carta-contador').innerText = n;
    arrei = arrei.toString();
    // RegExp => O /g busca por todas as alternativas;
    document.getElementById('carta-gerada').innerHTML = arrei.replace(/,/g, " ");
    for (let i = 0; i < n; i += 1) {
      randomClass(document.querySelectorAll('span')[i]);  
      document.querySelectorAll('span')[i].addEventListener('click', funcao);
    }
  }
});
