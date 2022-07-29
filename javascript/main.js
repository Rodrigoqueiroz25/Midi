
function tocaSomTecla(idAudio){
    const elemento = document.querySelector(idAudio);

    //para se prevenir de erros.
    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const teclas = document.querySelectorAll('.tecla');

for (let i = 0; i < teclas.length; i++) {
    
    let tecla = teclas[i];
    let idAudio = `#som_${tecla.classList[1]}`;
    
    tecla.onclick = function () { 
        tocaSomTecla(idAudio);
    }

    //para acionar com o teclado.
    tecla.onkeydown = function (evento) {
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

