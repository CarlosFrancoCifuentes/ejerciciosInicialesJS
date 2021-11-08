/**
 * global vs local
 * function scope and hoisting
 */

 function test(o) {
    
    var i = 0; //variable local declarada
    
    if (typeof o == "object") {
        
        var j = 0; //declaración variable local
    
        for(var k=0; k < 10; k++) { //se declara localmente k
            console.log(k);             // print numbers 0 through 9
        }
    
        console.log(k);                 // prints 10
    }
    
    console.log(j);                     // j is defined, but may not be initialized
}

o = {};
test(o);