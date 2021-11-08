/*************** GENERADOR HISTORIES ALEATORIES ***************/
var aleatori_things = 0;
var aleatori_char = 0;
var aleatori_actions = 0;
var aleatori_emotions = 0;

var totalThings = 0;
var totalChar = 0;
var totalActions = 0;
var totalEmotions = 0;

var num_paraules_t = 1;
var num_paraules_c = 1;
var num_paraules_a = 1;
var num_paraules_e = 1;

function change_n_words(kind, np){
  if (kind == 1){
    num_paraules_t = np;
  }else if(kind == 2){
    num_paraules_c = np;
  }else if(kind == 3){
    num_paraules_a = np;
  }else if(kind == 4){
    num_paraules_e = np;
  }
}

function generarDados(){
  document.getElementById("keywords_result").innerHTML = "";
  var word = "";
  for(var i =0; i<num_paraules_t; i++){
    word = giveThings();

    var newSpan = document.createElement("span");
    var addWord = document.createTextNode(word);
    newSpan.appendChild(addWord); 
    newSpan.classList.add("badge");
    newSpan.classList.add("badge-danger");
    document.getElementById("keywords_result").appendChild(newSpan);
  }
  for(var i =0; i<num_paraules_c; i++){
    word = giveChar();

    var newSpan = document.createElement("span");
    var addWord = document.createTextNode(word);
    newSpan.appendChild(addWord); 
    newSpan.classList.add("badge");
    newSpan.classList.add("badge-success");
    document.getElementById("keywords_result").appendChild(newSpan);
  }
  for(var i =0; i<num_paraules_a; i++){
    word = giveActions();

    var newSpan = document.createElement("span");
    var addWord = document.createTextNode(word);
    newSpan.appendChild(addWord); 
    newSpan.classList.add("badge");
    newSpan.classList.add("badge-info");
    document.getElementById("keywords_result").appendChild(newSpan);
  }
  for(var i =0; i<num_paraules_e; i++){
    word = giveEmotions();

    var newSpan = document.createElement("span");
    var addWord = document.createTextNode(word);
    newSpan.appendChild(addWord); 
    newSpan.classList.add("badge");
    newSpan.classList.add("badge-warning");
    document.getElementById("keywords_result").appendChild(newSpan);
  } 
}

function giveThings(){
  var obj = JSON.parse(thingsJSON);
  totalThings = Object.keys(obj.things).length;

  aleatori_things = Math.round(Math.random() * (totalThings - 0) +0);  
  return obj.things[aleatori_things].title;
}

function giveChar(){
  var obj = JSON.parse(charactersJSON);
  totalChar = Object.keys(obj.characters).length;

  aleatori_char = Math.round(Math.random() * (totalChar - 0) +0);  
  return obj.characters[aleatori_char].title;
}

function giveActions(){
  var obj = JSON.parse(actionsJSON);
  totalActions = Object.keys(obj.actions).length;

  aleatori_actions = Math.round(Math.random() * (totalActions - 0) +0);  
  return obj.actions[aleatori_actions].title;
}

function giveEmotions(){
  var obj = JSON.parse(emotionsJSON);
  totalEmotions = Object.keys(obj.emotions).length;

  aleatori_emotions = Math.round(Math.random() * (totalEmotions - 0) +0);  
  return obj.emotions[aleatori_emotions].title;
}
