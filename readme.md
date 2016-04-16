 -Juego de Memoria
  EL programa muestra un patrón en una matriz de 3x3 y el jugador dbe acercar con el patrón de forma ordenada y si es correcto, la dificultad aumenta, acelerando la velocidad de como se muestra el patrón.

Funciones del Programa

tiempo en segundos: Se crea la función timer para dar un valor real de segundos que serviran para una cuenta regresiva para repetir el patrón.
```
function timer()
{
  var seg=15;
  var t=setInterval(function ()
  {
    nom_div("t").innerHTML="00:"+ seg--;
    if (seg < 0) {
      clearInterval(t);
    }
  },1000);

}

```

Mostrar matriz: Se crea la función de la pagina "tam" de tamaño para que muestre celdas.
```
var pag =function (tam)
{
  matriz="<table id='matriz'>"
  for (var i = 0; i < tam; i++)
  {
    matriz += "<tr>";
    for (var j = 0; j < tam; j++)
    {
      x++;
        matriz += "<td>";
        matriz += "<div id= '_"+x+"'class='celda'></div>";
        matriz += "</td>";
    }
    matriz += "<tr>";
  }
  matriz += "</table>";
  $("#matrizz").append(matriz);
}
```

Random de secuencia: Se crea la función randomm que crea un array, con un for que recorre la matriz y crea el patrón de forma aleatoria.

```
function randomm()
{

    numrandom=Math.floor(Math.random()*((tam*tam)-1+1))+1;

}

var crandom = (function crandom(tam)
{
    for (var k = 0; k < tam; k++)
    {
      randomm();
      if (!comparacion()) {
        random.push(numrandom);
        console.log(numrandom);
      } else {
        k--;
        randomm();
      }
  }

    return crandom;
})(3);

```

variables
```
var matriz=""; var tam=3; var x=0; var random=[]; var numrandom; var dificultad=1;
var nx; var puntos=0; var up=0; var evento=0; var seg=15; var contA=0; contB; var tiempoe;
