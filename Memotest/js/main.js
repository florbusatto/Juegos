var fichas = [{ 
               'personaje':'Thor', 
               'img':'img/cartas/carta1.jpg' 
              },{ 
              'personaje':'SpiderMan', 
              'img':'img/cartas/carta2.jpg' 
              },{ 
              'personaje':'BlackWidow', 
              'img':'img/cartas/carta3.jpg' 
              },{ 
             'personaje':'IronMan', 
             'img':'img/cartas/carta4.jpg' 
              },{ 
              'personaje':'Hulk',
              'img':'img/cartas/carta5.jpg' 
              },{ 
              'personaje':'Captain', 
              'img':'img/cartas/carta6.jpg' 
              }]  

var ficha1 = ''; 
var ficha2 = '';
var contador = 0;   
var intentos = 0;
var delayCarta = 1200  


var legotest = document.getElementById('legotest');
var grilla = document.createElement('section');
grilla.setAttribute('class', 'grilla');
legotest.appendChild(grilla); 

var grillaArmada= fichas.concat(fichas).sort(function(){
    return 0.5 - Math.random();
});

grillaArmada.forEach(function (e){
var personaje = e.personaje,
img = e.img;

var ficha = document.createElement('div');
ficha.classList.add('ficha');
ficha.dataset.personaje = personaje;

var front = document.createElement('div');
front.classList.add('front');

var back = document.createElement('div');
back.classList.add('back');
back.style.backgroundImage = 'url(' + img + ')';

grilla.appendChild(ficha);
ficha.appendChild(front);
ficha.appendChild(back);
    
});

var match = function match() {
    var matched = document.querySelectorAll('.matched');
    matched.forEach(function (ficha) {
      ficha.classList.add('match');
    });
  };

var resetMatch = function resetMatch(){
    ficha1 = '';
    ficha2 = '';
    contador = 0;
    arregloHack = null;
    
var matched = document.querySelectorAll('.matched');
    matched.forEach(function (ficha) {
    ficha.classList.remove('matched');
  });  
};

grilla.addEventListener('click', function (event) {
var clicked = event.target;
  if (clicked.nodeName === 'SECTION' || clicked.parentNode.classList.contains('matched') || clicked.parentNode.classList.contains('match')) {
  return;
}
    
if (contador < 2) {
    contador++;
     if (contador === 1) {
         ficha1 = clicked.parentNode.dataset.personaje;  
         clicked.parentNode.classList.add('matched');
     } else {
        ficha2 = clicked.parentNode.dataset.personaje; 
        clicked.parentNode.classList.add('matched');
     }
  
if (ficha1 && ficha2) {
  if (ficha1 === ficha2) {
  setTimeout(match, delayCarta);
  }
  setTimeout(resetMatch, delayCarta);
  }
      
if (contador!=2){
  intentos++
  console.log("cantidad de intentos " + intentos);
  var mostrarIntento = document.getElementById('intentos');
  mostrarIntento.innerHTML = 'Cantidad de intentos: ' + (24 - intentos);
  }
}

if (ficha1===ficha2){
    var finjuego = document.getElementsByClassName('match');       
if (finjuego.length == 10) {  
    setTimeout (function(){alert("Excelsior!!"); }, 2000);
    setTimeout (function() {location.reload(); }, 3500); 
    }
}
    
if (intentos > 23 && finjuego.length != 10){
    setTimeout (function(){ alert("You lose!"); }, 1000)
    setTimeout (function() {location.reload(); }, 1500); 
    }
});

/*var saludo;
var nombre = prompt("¿Cuál es tu nombre?")*/