/**
 * global vs local
 * function scope and hoisting
 */

 var scope = "global"; //declaración variable global

function f() {

    var scope; //declaración de variable local scope
    console.log(scope); //no tiene valor declarado
    scope = "local"; //instanciamos la variable local
    console.log(scope); //printamos el valor de la variable scope
}

f();

console.log(scope); //printa el valor de la variable global scope