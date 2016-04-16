$(function ()
{
  var matriz=""; var tam=3; var x=0; var random=[]; var numrandom; var dificultad=1;
  var nx; var puntos=0; var up=0; var evento=0;

nom_div("puntos").innerHTML=("<h3> puntos: "+puntos+"</h3>");


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

function inicgame() {
  sec();
  $(".celda").click(function celda(e)
  {
    nx=e.target.id;
    nx=nx.split("_");
    console.log(nx+" " +nx[1]);
    if (random.indexOf(Number(nx[1]))>=0) {
      puntos++;
      up++;
      nom_div("puntos").innerHTML=("<h3> puntos: "+puntos+"</h3>");


    } return celda;
  })

}

  function nom_div(div)
  {
      return document.getElementById(div);
  }
function randomC() {
  return 'red';
}
var contA=0;var tiempoe;
function sec()
{
  if (contA <=random.length)
  {
    tiempoe= setInterval(function()
     {
        $("#_"+random[contA]).css("background-color", randomC());
        contA++;
        sec2();
      },300);
  }
}

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

function sec2()
{
  var contB=0;
  if (contB<= random.length && contA === random.length)
  {
    setInterval(function ()
    {
      $("#_"+random[contB]).css("background-color","white");
      contB++;
      if (contB===random.length)
      {
          clearInterval(tiempoe);
          if (evento===1) {
            timer(t);
          }
      }
    },300);

  }
}

function comparacion()
{
  var comparacion=false;
  for (var i = 0; i < random.length; i++) {
    if (numrandom===random[i]) {
      comparacion=true;
    }
  }
return comparacion;
}


$("#inicio").click(function () {
  evento++;
  nom_div("dificultad").innerHTML = "dificultad: "+ dificultad;
  pag(3);
  inicgame();
  $("#inicio").fadeOut();
})
});
