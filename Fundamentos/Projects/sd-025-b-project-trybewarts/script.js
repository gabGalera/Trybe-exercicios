function validateForm() {
  const button = document.getElementById('login-btn');
  button.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('input-password').value;
    if (email === 'tryber@teste.com' && password === '123456') {
      alert('Olá, Tryber!');
    } else alert('Email ou senha inválidos.');
  });
}
validateForm();

function testCheckbox() {
  const checkbox = document.getElementById('agreement');
  const button = document.getElementById('submit-btn');
  button.disabled = true;
  checkbox.addEventListener('change', () => {
    if (checkbox.checked === true) {
      button.disabled = false;
    } else button.disabled = true;
  });
}
testCheckbox();

function contador() {
  let n = document.getElementById('textarea').value;
  n = 500 - n.length;
  document.getElementById('counter').innerText = n;
}

document.getElementById('textarea').addEventListener('keyup', contador);

function formInfo() {
  const form = document.querySelector('#evaluation-form');
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const casa = document.getElementById('house').value;
  const familia = form.family.value;
  console.log(familia);
  const avaliacao = form.rate.value;
  const observacoes = document.querySelector('#textarea').value;
  let listMaterias = '';
  const materias = document.querySelectorAll('.subject'); /// //
  materias.forEach((element) => {
    if (element.checked) { listMaterias = `${listMaterias} ${element.value},`; }
  });
  const list = [`${name} ${lastName}`, email, casa, familia, listMaterias, avaliacao, observacoes];
  return list;
}
function removeForm() {
  const form = document.getElementById('evaluation-form');
  form.innerHTML = '';
}

function displayInfo() {
  const main = document.getElementById('form-data');
  const form = document.getElementById('evaluation-form');
  form.style.display = 'none';
  main.classList.add('formText');
  const lista = formInfo();
  const info = ['Nome: ', 'Email: ', 'Casa: ', 'Família: ', 'Matérias: ', 'Avaliação: ',
    'Observações: '];
  for (let index = 0; index < lista.length; index += 1) {
    const element = document.createElement('p');
    const aux = info[index] + lista[index];
    console.log(aux);
    element.innerText = info[index] + lista[index];
    main.appendChild(element);
  }
}

const buttonSubmit = document.getElementById('submit-btn');
buttonSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  displayInfo();
  removeForm();
});
