/**
 * global vs local
 */

 var scope = "global"; //declaración variable var scope

 function checkscope() {
     var scope = "local"; //se declara otra variable scope local
     return scope; //devuelve el valor de la variable local scope
 }
 
 console.log(checkscope());      // => "local"