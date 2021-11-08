/*************** PERSONATGES ***************/
var aleatoriArq = 0;
var aleatoriCD = 0;
var aleatoriPecu = 0;
var totalArq = 0;
var totalCD = 0;
var totalPecu = 0;

changePersonatge();

// Change Personatges
function changePersonatge(){
  changeArquetip();
  changeCaracter();
  changePecu();
}

// Change arquetip
function changeArquetip(){
  var obj = JSON.parse(arquetipsJSON);
  totalArq = Object.keys(obj.arquetip).length;
  
  aleatoriArq = Math.round(Math.random() * (totalArq - 0) +0);
  document.getElementById("arq_name").innerHTML = obj.arquetip[aleatoriArq].name;
  document.getElementById("arq_positive").innerHTML = obj.arquetip[aleatoriArq].positive;
  document.getElementById("arq_negative").innerHTML = obj.arquetip[aleatoriArq].negative;
  document.getElementById("arq_description1").innerHTML = obj.arquetip[aleatoriArq].description1;
  document.getElementById("arq_description2").innerHTML = obj.arquetip[aleatoriArq].description2;
}

// Change Caracter Dominant
function changeCaracter(){
  var objcd = JSON.parse(caractersJSON);
  totalCD = Object.keys(objcd.caracters).length;

  aleatoriCD = Math.round(Math.random() * (totalCD - 0) +0);  
  document.getElementById("cd_name").innerHTML = objcd.caracters[aleatoriCD].name;
  document.getElementById("cd_description").innerHTML = objcd.caracters[aleatoriCD].description;
}

// Change Peculiaridad
function changePecu(){
  var objcd = JSON.parse(pecuJSON);
  totalPecu = Object.keys(objcd.curiosities).length;

  aleatoriPecu = Math.round(Math.random() * (totalPecu - 0) +0);  
  document.getElementById("pecu_name").innerHTML = objcd.curiosities[aleatoriPecu].name;
}
