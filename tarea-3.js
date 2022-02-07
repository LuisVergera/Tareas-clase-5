
const segundosEnUnMinuto= 60;
const minutosEnUnaHora= 60;

const $botonCalcular = document.querySelector("#calcular");

$botonCalcular.onclick = function(){
    let totalHoras= 0;
    let totalMinutos= 0;
    let totalSegundos= 0;

    const horasDeVideo= document.querySelectorAll(".horas-video")
    const minutosDeVideo= document.querySelectorAll(".minutos-video")
    const segundosDeVideo= document.querySelectorAll(".segundos-video")

    
    for (let i= 0;i<segundosDeVideo.length;i++){
        
        totalSegundos+= Number(segundosDeVideo[i].value)

        totalMinutos+= Math.floor (totalSegundos/segundosEnUnMinuto)

        totalSegundos%= segundosEnUnMinuto;
    }
    
    for (let i= 0; i<minutosDeVideo.length;i++){

        totalMinutos+=Number(minutosDeVideo[i].value)

        totalHoras+=Math.floor (totalMinutos/minutosEnUnaHora)

        totalMinutos%= minutosEnUnaHora;
    }

    
    for (let i= 0;i<horasDeVideo.length;i++){

        totalHoras+= Number(horasDeVideo[i].value);
    }

    
    let resultado = document.querySelector("#mostrar-resultado")

    resultado.innerText = `las clases tienen una duracion de ${totalHoras} horas ${totalMinutos} y ${totalSegundos}`
}
