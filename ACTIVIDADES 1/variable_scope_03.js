/**
 * global vs local
 * nested scopes
 */

 var scope = "global scope"; //declaración variable global

 function checkscope() {
     
     var scope = "local scope"; //otra variable con el mismo nombre pero local
     
     function nested() {
         
         var scope = "nested scope"; //otra variable local con el mismo nombre
         return scope; //devuelve el valor de la variable que se encuentra en esta función 
     }
 
     return nested(); 
 }
 
 console.log(checkscope());              // => "nested scope"
 console.log(scope);                     // => "global scope"