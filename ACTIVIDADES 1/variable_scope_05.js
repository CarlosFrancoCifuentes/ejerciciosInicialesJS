/**
 * global vs local
 * function scope and hoisting
 */

 var scope = "global"; //se declara variable global scope

 function f() {
 
     console.log(scope); // variable indefinida
     var scope = "local"; //declaración de variable
     console.log(scope); // printa el valor de la variable scope
 }
 
 f();
 
 console.log(scope); // printa la variable scope global 