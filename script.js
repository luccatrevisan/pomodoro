let ciclo = document.getElementById('ciclo');
let hora = document.getElementById('hora');
let tempoRestante = document.getElementsByClassName('tempoRestante');

function startPomodoro(){
    /*
    ao clicar:
        pega o valor de ciclo ou de hora
            ignora hora por enquanto. foca no ciclo
        com esse valor, determina o tempo total
    */
    tempoRestante = (Number(ciclo.value) * 30) / 60 //em horas
    console.log(tempoRestante)
}

function selectHeader(){
    /*
    display none vem por padrão
    se clicar no label, display select
    
    */
}