const UN_SEGUNDO = 1; 
const UN_MINUTO = UN_SEGUNDO * 60;
const UNA_HORA = UN_MINUTO * 60;

  
function contarSeg(){
    var inputSeg = Number(document.getElementById("inputSeg").value);


    var InputHor = Math.floor((Number(document.getElementById("inputSeg").value) / UNA_HORA));
    document.querySelector("#horaenseg").innerHTML = `
    Esto son los segundos pasados a horas ${InputHor}
    `
    var segundos = inputSeg;

    document.getElementById("textosegundos").innerHTML = "<b>" + segundos + " segundos</b>";

    var interval = setInterval(function(){
        segundos--;
      document.getElementById("textosegundos").innerHTML = "<b>" + segundos + " segundos</b>";
      if( segundos == 0 ){
        document.getElementById("textosegundos").innerHTML = "<b>" + segundos + " segundos</b>";
        clearInterval(interval);
        
      }
    }, 1000);
  
}

function temporizador(){
horas = Number(document.getElementById("inputHor").value);
minutos = Number(document.getElementById("inputMin").value);
segundos = Number(document.getElementById("inputSeg").value);
segundosTotales = ((horas * UNA_HORA + minutos * UN_MINUTO + segundos * UN_SEGUNDO) + 1);
resto = 0;

let interval = setInterval(function(){
segundosTotales--
horas = Math.floor(segundosTotales / UNA_HORA)
document.querySelector("#textohoras").innerHTML = `
<h3> ${horas} horas </h3>
`;
resto = (segundosTotales % UNA_HORA);
minutos = Math.floor(resto / UN_MINUTO);
document.querySelector("#textominutos").innerHTML = `
<h3> ${minutos} minutos </h3>
`;
resto = (segundosTotales % UN_MINUTO);
segundos = resto;
document.querySelector("#textosegundos").innerHTML = `
<h3> ${segundos} segundos </h3>
`;
if (segundosTotales == 0) {
  clearInterval(interval);
  alert("Temporizador finalizado");
}

}, 1000)

}

/*function pruebando() {
  horas = 0 
  minutos = 2
  segundos = 12
  segundostotales = (horas * UNA_HORA + minutos * UN_MINUTO + segundos * UN_SEGUNDO)


var ciclo = setInterval(function(){
  segundostotales--
  console.log("los segundos totales son", segundostotales);
  horas = Math.floor(segundostotales / UNA_HORA);
  console.log("las horas totales son", horas);
  resto = (segundostotales % UNA_HORA);
  minutos = Math.floor(resto / UN_MINUTO);
  console.log("los minutos totales son", minutos);
  resto = (segundostotales % UN_MINUTO);
  segundos = resto;
  console.log("los segundos restantes son", segundos)
  if (segundostotales == 0) {
    clearInterval(ciclo);
    console.log("terminado");
  }
}, 1000)
}

pruebando(); */