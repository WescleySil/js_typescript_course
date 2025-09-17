const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let data = new Date('2025-09-05 00:00:00');
let timer = 0;

document.addEventListener('click', (e) => {
    const el = e.target;

    if(el.classList.contains('iniciar')){
        timer = setInterval(() => {
            data.setSeconds(data.getSeconds() + 1);
            relogio.innerHTML = data.toLocaleTimeString('pt-BR', {
                hour12: false,
                timeZone: 'America/Fortaleza'
            });
        }, 1000);
        relogio.removeAttribute('pausado');
        iniciar.setAttribute('disabled', true);
    }

    if (el.classList.contains('pausar')){
        relogio.setAttribute('pausado', '');
        iniciar.removeAttribute('disabled');
        clearInterval(timer);
        relogio.innerHTML = data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'America/Fortaleza'
        });
    }

    if (el.classList.contains('zerar')){
        relogio.removeAttribute('pausado');
        iniciar.removeAttribute('disabled');
        clearInterval(timer);
        data.setSeconds(0);
        relogio.innerHTML = data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'America/Fortaleza'
        });
    }
});

function iniciarRelogio() {
    timer = setInterval(() => {
        data.setSeconds(data.getSeconds() + 1);
        relogio.innerHTML = data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'America/Fortaleza'
        });
    }, 1000);
  relogio.removeAttribute('pausado');
  iniciar.setAttribute('disabled', true);
}

function pausarRelogio() {
    relogio.setAttribute('pausado', '');
    iniciar.removeAttribute('disabled');
    clearInterval(timer);
    relogio.innerHTML = data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'America/Fortaleza'
        });
}

function zerarRelogio() {
    relogio.removeAttribute('pausado');
    iniciar.removeAttribute('disabled');
    clearInterval(timer);
    data.setSeconds(0);
    relogio.innerHTML = data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'America/Fortaleza'
    });
}