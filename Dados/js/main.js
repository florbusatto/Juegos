var jugador1;
var jugador2;
var dados=[01,02,03,04,05,06];

 function seleccionarTurno(){
    jugador1=document.getElementById("jugador").innerHTML = dados[Math.floor(6*Math.random())];
    alert('Màquina preparandose para lanzar dados');
    jugador2=document.getElementById("cpu").innerHTML = dados[Math.floor(6*Math.random())];
   
   if (jugador1>jugador2) {
    alert("El numero  mayor fue :\t"+jugador1+"\n Inicia el usuario");
    alert('Por favor lance los dados');
   }else{
    alert("El numero mayor fue :\t"+jugador2+"\n Inicia CPU"); 
    alert('Por favor lance los dados');
   }
 }
 function juego(){

 }  
 function lanzarDado(){
    if(this.seleccionarTurno == onclick){
       document.getElementById('dice').innerHTML = dado[Math.floor(6*Math.random())];
    }else{
        alert('Por favor  primero juegue el turno');
    }	
}