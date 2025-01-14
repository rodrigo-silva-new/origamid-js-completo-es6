// Adicione a classe ativo a todos os itens do menu
const menuItems = document.querySelectorAll('.menu a');
menuItems.forEach(item => item.classList.add('ativo'));

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItems.forEach(item => item.classList.remove('ativo'));
menuItems[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const allImgs = document.querySelectorAll('img');
allImgs.forEach(image => console.log(image.hasAttribute('alt')));

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('.menu [href^="https"]');
linkExterno.setAttribute('href', 'https://www.google.com.br');