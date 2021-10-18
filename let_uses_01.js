/**
 * Ejemplos de uso de Let:
 * - Reemplazar var en bucles for
 * - Definicion de variables en un bloque:
 *   block vs lexical scope
 */

 function oddsums(n) {

    let total = 0, result = []; //instanciamos las variables que vamos a usar más adelante
    
    for(let x = 1; x <= n; x++) { //se define dentro del bucle la variable let x
        let odd = 2*x-1; //se declara la variable let odd, que es un calculo 
        total += odd;
        result.push(total);
    }

    console.log(x);              // que sucede y por que?
    // console.log(odd);            // que sucede y por que?
    // console.log(total);          // que sucede y por que?
    
    return result; //devuelve el array con los totales 
}

console.log(oddsums(5));            // Returns [1,4,9,16,25]