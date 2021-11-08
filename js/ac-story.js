/*************** GENERADOR HISTORIES ALEATORIES ***************/
var aleatoriCuando = 0;
var aleatoriProta = 0;
var aleatoriDebe = 0;
var aleatoriGenero = 0;
var aleatoriPelis = 0;

var totalCuando = 0;
var totalProta = 0;
var totalDebe = 0;
var totalGenero = 0;
var totalPelis = 0;

changeHistoria();

// Change Historia
function changeHistoria(){
  changeCuando();
  changeProta();
  changeDebe();
  changeGenero();
  changePelis();
}

function changeCuando(){
  var obj = JSON.parse(cuandoJSON);
  totalCuando = Object.keys(obj.cuando).length;

  aleatoriCuando = Math.round(Math.random() * (totalCuando - 0) +0);  
  document.getElementById("cuando").innerHTML = obj.cuando[aleatoriCuando].name;
}

function changeProta(){
  var obj = JSON.parse(protaJSON);
  totalProta = Object.keys(obj.prota).length;

  aleatoriProta = Math.round(Math.random() * (totalProta - 0) +0);  
  document.getElementById("prota").innerHTML = obj.prota[aleatoriProta].name;
}

function changeDebe(){
  var obj = JSON.parse(debeJSON);
  totalDebe = Object.keys(obj.debe).length;

  aleatoriDebe = Math.round(Math.random() * (totalDebe - 0) +0);  
  document.getElementById("debe").innerHTML = obj.debe[aleatoriDebe].name;
}

function changeGenero(){
  var obj = JSON.parse(generoJSON);
  totalGenero = Object.keys(obj.genero).length;

  aleatoriGenero = Math.round(Math.random() * (totalGenero - 0) +0);  
  document.getElementById("genero").innerHTML = obj.genero[aleatoriGenero].name;
}

function changePelis(){
  var obj = JSON.parse(pelisJSON);
  totalPelis = Object.keys(obj.pelis).length;

  aleatoriPelis = Math.round(Math.random() * (totalPelis - 0) +0);  
  document.getElementById("pelis").innerHTML = obj.pelis[aleatoriPelis].name;
}


function saveHistoria(){
  var textoFinal ="";
  var when = document.getElementById("cuando").innerHTML;
  var prota = document.getElementById("prota").innerHTML;
  var hasto = document.getElementById("debe").innerHTML;
  var genre = document.getElementById("genero").innerHTML;
  var film = document.getElementById("pelis").innerHTML;

  textoFinal = "Cuando " + when + ", " + prota + " debe " + hasto + ". \n\nUlitiza el género: " + genre + ". \nO inspírate con esta película: " + film;
  document.getElementById("textarea").innerHTML = textoFinal;
}

function copyResult(){
  var content = document.getElementById("textarea").innerHTML;
  navigator.clipboard.writeText(content)
        .then(() => {
        console.log("Text copied to clipboard...")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })

}



