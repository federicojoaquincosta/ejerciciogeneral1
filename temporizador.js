const UN_SEGUNDO = 1000; 
const UN_MINUTO = UN_SEGUNDO * 60;
const UNA_HORA = UN_MINUTO * 60;

  
function contarSeg(){
    var inputSeg = Number(document.getElementById("inputSeg").value);
    var InputHor = Number(document.getElementById("inputHor").value);
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

//alert("Han pasado " + inputSeg + " segundos");


function contarMin(){
    
    var inputMin = Number(document.getElementById("inputMin").value);

    var minutos = inputMin;
    document.getElementById("textominutos").innerHTML = "<b>" + minutos + " minutos</b>";
    var interval = setInterval(function(){
        minutos--;
      document.getElementById("textominutos").innerHTML = "<b>" + minutos + " minutos</b>";
      if( minutos == 0 ){
        document.getElementById("textominutos").innerHTML = "<b>" + minutos + " minutos</b>";
        clearInterval(interval);
      }
    }, UN_MINUTO);
  
}

function contarHor(){
    
    var inputHor = Number(document.getElementById("inputHor").value);

    var horas = inputHor;
    document.getElementById("textohoras").innerHTML = "<b>" + horas + " minutos</b>";
    var interval = setInterval(function(){
        horas--;
      document.getElementById("textohoras").innerHTML = "<b>" + horas + " minutos</b>";
      if( horas == 0 ){
        document.getElementById("textohoras").innerHTML = "<b>" + horas + " minutos</b>";
        clearInterval(interval);
      }
    }, UNA_HORA);
  
}