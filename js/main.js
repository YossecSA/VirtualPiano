// Función que reproduce un sonido dado el ID de un elemento de audio
function playSonido(idElementoAudio) {
    // Selecciona el elemento de audio en el DOM y lo reproduce
    document.querySelector(idElementoAudio).play();
}

// Selecciona todos los elementos con la clase "tecla" y los guarda en la variable `listaDeTeclas`
const listaDeTeclas = document.querySelectorAll(".tecla");

// Itera sobre cada elemento en la lista de teclas
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    // Obtiene la tecla actual en la iteración
    const tecla = listaDeTeclas[contador];
    // Obtiene la segunda clase de la tecla, que indica el instrumento asociado
    const instrumento = tecla.classList[1];
    // Crea un ID de elemento de audio basado en el nombre del instrumento
    const idAudio = `#sonido_${instrumento}`;

    // Asigna una función al evento `onclick` de la tecla que reproduce el sonido correspondiente
    tecla.onclick = function () {
        playSonido(idAudio);
    };

    // Asigna una función al evento `onkeydown` de la tecla que se activa cuando se presiona una tecla
    tecla.onkeydown = function (evento) {
        // Si la tecla presionada es 'Space' o 'Enter', agrega la clase 'activa' a la tecla
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('activa');
        }
    };

    // Asigna una función al evento `onkeyup` de la tecla que se activa cuando se suelta la tecla
    tecla.onkeyup = function () {
        // Remueve la clase 'activa' de la tecla cuando se deja de presionar
        tecla.classList.remove('activa');
    };
}