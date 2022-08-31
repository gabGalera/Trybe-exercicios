document.getElementById('text-input').addEventListener('input', (evento) => {
  document.getElementById('meme-text').innerText = evento.target.value;
});

// Fonte: https://www.youtube.com/watch?v=-AR-6X_98rM
const input = document.querySelector('#meme-insert');
document.getElementById('meme-insert').addEventListener('change', () => {
  console.log(input.files);
  const reader = new FileReader();
  reader.onload = () => {
    document.getElementsByTagName('img')[0].src = reader.result;
  }
  reader.readAsDataURL(input.files[0]);
  

// Não entendi direito, mas funciona.  
//   document.getElementById('meme-image-container').style.backgroundImage = 'url('+input.files[0].name+')';
  
});

document.getElementById('fire').addEventListener('click', () => {
  document.getElementById('meme-image-container').style.border = 'rgb(255, 0, 0) dashed 3px';
});

document.getElementById('water').addEventListener('click', () => {
  document.getElementById('meme-image-container').style.border = 'rgb(0, 0, 255) double 5px';
});

document.getElementById('earth').addEventListener('click', () => {
  document.getElementById('meme-image-container').style.border = 'rgb(0, 128, 0) groove 6px';
});

document.getElementById('meme-1').addEventListener('click', () => {
  document.getElementById('meme-image').src = "/imgs/meme1.png";
});

document.getElementById('meme-2').addEventListener('click', () => {
  document.getElementById('meme-image').src = "/imgs/meme2.png";
});

document.getElementById('meme-3').addEventListener('click', () => {
  document.getElementById('meme-image').src = "/imgs/meme3.png";
});

document.getElementById('meme-4').addEventListener('click', () => {
  document.getElementById('meme-image').src = "/imgs/meme4.png";
});
