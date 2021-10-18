/**
 * global vs local
 * var to declare local variables
 */

 scope = "global"; //se declara la variable global scope

 function checkscope2() {
     
     scope = "local"; //cambiamos el valor de la variable global scope
     myscope = "local"; //declaramos variable global myscope
 
     return [scope, myscope]; //devuelve los valores de scope y myscope
 }
 
 console.log(checkscope2()); //devuelve el return de la función 
 
 console.log(scope); //la variable global ha cambiado 
 console.log(myscope); //devuelve la variable global myscope declarada dentro de la función 