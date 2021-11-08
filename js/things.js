var thingsJSON = 
'{ "things" : ['+
    '{ "id": "1","title": "Luna, asteroide"}, ' +
    '{ "id": "2","title": "puente"}, ' +
    '{ "id": "3","title": "libro"}, ' +
    '{ "id": "4","title": "Santuario, Iglesia"}, ' +
    '{ "id": "5","title": "varita mágica"}, ' +
    '{ "id": "6","title": "estrella fugaz"}, ' +
    '{ "id": "7","title": "Pintura"}, ' +
    '{ "id": "8","title": "Llave"}, ' +
    '{ "id": "9","title": "tipi"}, ' +
    '{ "id": "10","title": "Papeles"}, ' +
    '{ "id": "11","title": "Avión"}, ' +
    '{ "id": "12","title": "Linterna"}, ' +
    '{ "id": "13","title": "edificio"}, ' +
    '{ "id": "14","title": "Manzana"}, ' +
    '{ "id": "15","title": "Mano"}, ' +
    '{ "id": "16","title": "dados"}, ' +
    '{ "id": "17","title": "Lupa"}, ' +
    '{ "id": "18","title": "Huella"}, ' +
    '{ "id": "19","title": "Tijeras"}, ' +
    '{ "id": "20","title": "Cerradura"}, ' +
    '{ "id": "21","title": "Fuego"}, ' +
    '{ "id": "22","title": "Bolso o mochila"}, ' +
    '{ "id": "23","title": "Arcoiris"}, ' +
    '{ "id": "24","title": "Castillo"}, ' +
    '{ "id": "25","title": "Dinero"}, ' +
    '{ "id": "26","title": "Piràmide"}, ' +
    '{ "id": "27","title": "Árbol"}, ' +
    '{ "id": "28","title": "Flecha"}, ' +
    '{ "id": "29","title": "Látigo"}, ' +
    '{ "id": "30","title": "Bombilla"}, ' +
    '{ "id": "31","title": "casa"}, ' +
    '{ "id": "32","title": "Reloj"}, ' +
    '{ "id": "33","title": "Casa"}, ' +
    '{ "id": "34","title": "teléfono móvil"}, ' +
    '{ "id": "35","title": "Juguete"}, ' +
    '{ "id": "36","title": "Rayo"}, ' +
    '{ "id": "37","title": "Puesta de sol"}, ' +
    '{ "id": "38","title": "Copa"}, ' +
    '{ "id": "39","title": "ojo de cerradura"}, ' +
    '{ "id": "40","title": "flor"}, ' +
    '{ "id": "41","title": "Poción, experimento"}, ' +
    '{ "id": "42","title": "Mapa"}, ' +
    '{ "id": "43","title": "Sotano o trampilla"}, ' +
    '{ "id": "44","title": "Seta"}, ' +
    '{ "id": "45","title": "Riquezas, tesoro"}, ' +
    '{ "id": "46","title": "Montaña"}, ' +
    '{ "id": "47","title": "Huevo"}, ' +
    '{ "id": "48","title": "Pildora"}, ' +
    '{ "id": "49","title": "Gafas"}, ' +
    '{ "id": "50","title": "Camara"}, ' +
    '{ "id": "51","title": "Caldero, hechizo"}, ' +
    '{ "id": "52","title": "Hacha"}, ' +
    '{ "id": "53","title": "Corona"}, ' +
    '{ "id": "54","title": "Escalera"}, ' +
    '{ "id": "55","title": "Nota musical"}, ' +
    '{ "id": "56","title": "Joya, diamante"}, ' +
    '{ "id": "57","title": "Escudo"}, ' +
    '{ "id": "58","title": "Mar"}, ' +
    '{ "id": "59","title": "Cueva"}' +
']}';

var charactersJSON = 
'{ "characters" : ['+
    '{ "id": "1","title": "abeja"}, ' +
    '{ "id": "2","title": "escarabajo"}, ' +
    '{ "id": "3","title": "tortuga"}, ' +
    '{ "id": "4","title": "ovejas"}, ' +
    '{ "id": "5","title": "alienígena"}, ' +
    '{ "id": "6","title": "paracaidista"}, ' +
    '{ "id": "7","title": "Germenes"}, ' +
    '{ "id": "8","title": "fantasma"}, ' +
    '{ "id": "9","title": "Bandido"}, ' +
    '{ "id": "10","title": "Ladron"}, ' +
    '{ "id": "11","title": "Pirata"}, ' +
    '{ "id": "12","title": "Vikingo"}, ' +
    '{ "id": "13","title": "Caballero"}, ' +
    '{ "id": "14","title": "Princesa"}, ' +
    '{ "id": "15","title": "Elefante"}, ' +
    '{ "id": "16","title": "Ciego"}, ' +
    '{ "id": "17","title": "Cuervo"}, ' +
    '{ "id": "18","title": "Gigante"}, ' +
    '{ "id": "19","title": "Enano"}, ' +
    '{ "id": "20","title": "Duende"}, ' +
    '{ "id": "21","title": "Cangrejo"}, ' +
    '{ "id": "22","title": "Guardia"}, ' +
    '{ "id": "23","title": "Pulpo o calamar"}, ' +
    '{ "id": "24","title": "Sheriff"}, ' +
    '{ "id": "25","title": "Calavera, esqueleto"}, ' +
    '{ "id": "26","title": "Rey"}, ' +
    '{ "id": "27","title": "Embaucador"}, ' +
    '{ "id": "28","title": "Serpiente"}, ' +
    '{ "id": "29","title": "Mono"}, ' +
    '{ "id": "30","title": "Bruja"}, ' +
    '{ "id": "31","title": "Lobo"}, ' +
    '{ "id": "32","title": "Malo"}, ' +
    '{ "id": "33","title": "Angel"}, ' +
    '{ "id": "34","title": "Demonio"}, ' +
    '{ "id": "35","title": "Vecina"}, ' +
    '{ "id": "36","title": "Camarera"}, ' +
    '{ "id": "37","title": "DJ"}, ' +
    '{ "id": "38","title": "músico"}, ' +
    '{ "id": "39","title": "Policia"}, ' +
    '{ "id": "40","title": "Ganadero, pastor"}, ' +
    '{ "id": "41","title": "Agricultor, payes"}, ' +
    '{ "id": "42","title": "Abogado"}, ' +
    '{ "id": "43","title": "Profesor"}, ' +
    '{ "id": "44","title": "Informatico"}, ' +
    '{ "id": "45","title": "Dibujante, artista"}, ' +
    '{ "id": "46","title": "Jardinero"}, ' +
    '{ "id": "47","title": "Viejo"}, ' +
    '{ "id": "48","title": "Niño o niña"}, ' +
    '{ "id": "49","title": "Mago"}, ' +
    '{ "id": "50","title": "Madre coraje"}, ' +
    '{ "id": "51","title": "Padre solitario"}, ' +
    '{ "id": "52","title": "Borracho"}, ' +
    '{ "id": "53","title": "Monstruo"}, ' +
    '{ "id": "54","title": "Soldado"}, ' +
    '{ "id": "55","title": "Chica guapa"}, ' +
    '{ "id": "56","title": "Escursionista"}, ' +
    '{ "id": "57","title": "Turista"}, ' +
    '{ "id": "58","title": "Chef"}, ' +
    '{ "id": "59","title": "Escritor"}' +
']}';

var actionsJSON = 
'{ "actions" : ['+
    '{ "id": "1","title": "dormir"}, ' +
    '{ "id": "2","title": "Dialogar, hablar"}, ' +
    '{ "id": "3","title": "llenar"}, ' +
    '{ "id": "4","title": "gritar"}, ' +
    '{ "id": "5","title": "cavar"}, ' +
    '{ "id": "6","title": "descansar"}, ' +
    '{ "id": "7","title": "pelear"}, ' +
    '{ "id": "8","title": "bailar"}, ' +
    '{ "id": "9","title": "Levantar"}, ' +
    '{ "id": "10","title": "toser"}, ' +
    '{ "id": "11","title": "llevar"}, ' +
    '{ "id": "12","title": "caminar"}, ' +
    '{ "id": "13","title": "traer"}, ' +
    '{ "id": "14","title": "rebotar"}, ' +
    '{ "id": "15","title": "Contar"}, ' +
    '{ "id": "16","title": "Capturar, atrapar"}, ' +
    '{ "id": "17","title": "escalar"}, ' +
    '{ "id": "18","title": "acordar"}, ' +
    '{ "id": "19","title": "Patada, chutar"}, ' +
    '{ "id": "20","title": "comer"}, ' +
    '{ "id": "21","title": "Saltar"}, ' +
    '{ "id": "22","title": "cortar"}, ' +
    '{ "id": "23","title": "caer"}, ' +
    '{ "id": "24","title": "chocar"}, ' +
    '{ "id": "25","title": "dibujar"}, ' +
    '{ "id": "26","title": "llorar"}, ' +
    '{ "id": "27","title": "golpear"}, ' +
    '{ "id": "28","title": "esconder"}, ' +
    '{ "id": "29","title": "ir"}, ' +
    '{ "id": "30","title": "jugar"}, ' +
    '{ "id": "31","title": "escuchar"}, ' +
    '{ "id": "32","title": "preguntar"}, ' +
    '{ "id": "33","title": "llamar puerta"}, ' +
    '{ "id": "34","title": "colgar"}, ' +
    '{ "id": "35","title": "Decidir, elegir"}, ' +
    '{ "id": "36","title": "reir"}, ' +
    '{ "id": "37","title": "Despertar"}, ' +
    '{ "id": "38","title": "mirar"}, ' +
    '{ "id": "39","title": "alcanzar"}, ' +
    '{ "id": "40","title": "darse golpe"}, ' +
    '{ "id": "41","title": "Construir"}, ' +
    '{ "id": "42","title": "Secar"}, ' +
    '{ "id": "43","title": "Adivinar"}, ' +
    '{ "id": "44","title": "Tocar, sentir"}, ' +
    '{ "id": "45","title": "Dar"}, ' +
    '{ "id": "46","title": "Leer"}, ' +
    '{ "id": "47","title": "Herir"}, ' +
    '{ "id": "48","title": "Girar"}, ' +
    '{ "id": "49","title": "Perder"}, ' +
    '{ "id": "50","title": "Recordar, pensar"}, ' +
    '{ "id": "51","title": "Apretar"}, ' +
    '{ "id": "52","title": "Empujar"}, ' +
    '{ "id": "53","title": "Robar"}, ' +
    '{ "id": "54","title": "Quemar"}, ' +
    '{ "id": "55","title": "Cocer"}, ' +
    '{ "id": "56","title": "Mezclar"}, ' +
    '{ "id": "57","title": "Luchar"}, ' +
    '{ "id": "58","title": "Combatir"}, ' +
    '{ "id": "59","title": "Podar"}' +
']}';

var emotionsJSON = 
'{ "emotions" : ['+
    '{ "id": "1","title": "Tristeza"}, ' +
    '{ "id": "2","title": "Felicidad"}, ' +
    '{ "id": "3","title": "miedo"}, ' +
    '{ "id": "4","title": "Valentia"}, ' +
    '{ "id": "5","title": "Enojado"}, ' +
    '{ "id": "6","title": "Feroz"}, ' +
    '{ "id": "7","title": "Amor"}, ' +
    '{ "id": "8","title": "Odio"}, ' +
    '{ "id": "9","title": "Ira"}, ' +
    '{ "id": "10","title": "Alivio"}, ' +
    '{ "id": "11","title": "Alegría"}, ' +
    '{ "id": "12","title": "Compasión"}, ' +
    '{ "id": "13","title": "Remordimiento"}, ' +
    '{ "id": "14","title": "Culpa"}, ' +
    '{ "id": "15","title": "Verguenza"}, ' +
    '{ "id": "16","title": "Inseguridad"}, ' +
    '{ "id": "17","title": "Timidez"}, ' +
    '{ "id": "18","title": "Confusión"}, ' +
    '{ "id": "19","title": "Asombro"}, ' +
    '{ "id": "20","title": "ASco"}, ' +
    '{ "id": "21","title": "Hostilidad"}, ' +
    '{ "id": "22","title": "Aceptación"}, ' +
    '{ "id": "23","title": "Incomprensión"}, ' +
    '{ "id": "24","title": "Soledad"}, ' +
    '{ "id": "25","title": "Nostalgia"}, ' +
    '{ "id": "26","title": "Aburrimiento"}, ' +
    '{ "id": "27","title": "Ilusión"}, ' +
    '{ "id": "28","title": "Euforia"}, ' +
    '{ "id": "29","title": "Decepción"}, ' +
    '{ "id": "30","title": "Frustración"}, ' +
    '{ "id": "31","title": "Admiración"}, ' +
    '{ "id": "32","title": "Envidia"}, ' +
    '{ "id": "33","title": "Deseo"}, ' +
    '{ "id": "34","title": "Satisfacción"}, ' +
    '{ "id": "35","title": "Orgullo"}, ' +
    '{ "id": "36","title": "Placer"}, ' +
    '{ "id": "37","title": "Gratitud"}, ' +
    '{ "id": "38","title": "Ternura"}, ' +
    '{ "id": "39","title": "Desamparo"}, ' +
    '{ "id": "40","title": "Sonrojado"}, ' +
    '{ "id": "41","title": "Juzgar"}, ' +
    '{ "id": "42","title": "Ofensa"}, ' +
    '{ "id": "43","title": "Rechazo"}, ' +
    '{ "id": "44","title": "Fracaso"}, ' +
    '{ "id": "45","title": "Tensión"}, ' +
    '{ "id": "46","title": "Dolor"}, ' +
    '{ "id": "47","title": "Cobardía"}, ' +
    '{ "id": "48","title": "Inferioridad"}, ' +
    '{ "id": "49","title": "Angustia"}, ' +
    '{ "id": "50","title": "Flojera"}, ' +
    '{ "id": "51","title": "Amargura"}, ' +
    '{ "id": "52","title": "Codícia"}, ' +
    '{ "id": "53","title": "Desespero"}, ' +
    '{ "id": "54","title": "Asombro"}, ' +
    '{ "id": "55","title": "Gozo"}, ' +
    '{ "id": "56","title": "Paz"}, ' +
    '{ "id": "57","title": "Esperanza"}, ' +
    '{ "id": "58","title": "Aprecio"}, ' +
    '{ "id": "59","title": "Desprecio"}' +
']}';