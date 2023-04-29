const btnWhite = document.getElementById('clear-board');
const pixels = document.querySelectorAll('.pixel');
const cores = document.querySelectorAll('.color');

function colorSelect(event) {
    const selecionada = document.querySelector('.selected');
    selecionada.classList.remove('selected');
    event.target.classList.add('selected');
}

for (let index = 0; index < cores.length; index += 1) {
    cores[index].addEventListener('click', colorSelect);
}

for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', recebeCor);
}

function recebeCor(event) {
    const selecionada = document.querySelector('.selected');
    const corBackground = getComputedStyle(selecionada).backgroundColor;
    event.target.style.backgroundColor = corBackground;
}
function pintaBranco() {
    for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].style.backgroundColor = 'white';
    }
}
btnWhite.addEventListener('click', pintaBranco);
