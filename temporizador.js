const UN_SEGUNDO = 1; 
const UN_MINUTO = UN_SEGUNDO * 60;
const UNA_HORA = UN_MINUTO * 60;

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

