/*
*Dataset:
É uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap.
Dentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elementl html
que começarem com data-.
*/

const div = document.querySelector('[data-cor]');

div.dataset.height = 1000;

delete div.dataset.width;

div.dataset.totalHeight = 2000;

console.log(div.dataset)