
const segundosEnUnMinuto= 60;
const minutosEnUnaHora= 60;

const $botonCalcular = document.querySelector("#calcular");

$botonCalcular.onclick = function(){
    let totalHoras= 0;
    let totalMinutos= 0;
    let totalSegundos= 0;

    const horasDeVideo= Number(document.querySelectorAll(".horas-video").value)
    const minutosDeVideo= Number(document.querySelectorAll(".minutos-video").value)
    const segundosDeVideo= Number(document.querySelectorAll(".segundos-video").value)

    for (let i = 0;i<horasDeVideo.length;i++){

        totalHoras+= Number(horasDeVideo[i].value);
    }

    for (let j= 0; j<minutosDeVideo.length;j++){

        totalMinutos+=Number(minutosDeVideo[j].value)

        if (totalMinutos>minutosEnUnaHora){
            return totalHoras++
        }
    }

    for (let k= 0;k<segundosDeVideo.length;k++){
        
        totalSegundos+= Number(segundosDeVideo[k].value)

        if (totalSegundos>segundosEnUnMinuto){
            return minutos++
        }
    }

    let resultado = document.querySelector("#mostrar-resultado")

    resultado.innerText = `las clases tienen una duracion de ${totalHoras} horas ${totalMinutos} y ${totalSegundos}`
}
