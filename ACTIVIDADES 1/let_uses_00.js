/**
 * Variables declaradas por let tienen por alcance el bloque
 * en el que se han definido, así mismo, como en cualquier bloque interno. 
 * De esta manera, let trabaja muy parecido a var. 
 * La más notable diferencia es que el alcance de una variable var es la función contenedora.
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/let
 */


 function varTest() {

    var x = 31;

    if (true) {
        var x = 71; //es la misma variable que la que está fuera del if
        console.log(x);         // 71
    }

    console.log(x);             // 71
}


function letTest() {

  var x = 31;
  
  if (true) {
      let x = 71; //es una variable direfente a la var x      
      console.log(x);           // 71
    }
    
    console.log(x);             // 31
}


function hoistingTest() {

    console.log(w); //variable indefinida anteriormente 
    // console.log(z);               // ReferenceError

    var x = 31; //definimos variable x
    let y = 91; //definimos variable x
    u = 1; //definimos variable global                        
    
    if (true) {
        let x = 71; //variable diferencia a la var x
        console.log(x);           // 71
        console.log(y);//no existe la variable y dentro del if, pero printa la variable let y que se encuentra fuera  // 91
        let z = 101; //declaración de variable que no se va a usar
        var w = 1001; //declaración de variable
    }
      
    console.log(x);               // 31
    // console.log(z);             // ReferenceError
    console.log(w);               // 1001
  }


varTest();

letTest();

hoistingTest();

console.log(u); //variable global declarada dentro de una función          