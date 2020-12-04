/**
 * Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli
 * elementi da uno e dall’altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

/**
 * Fonde due array prendendo alternativamente gli elementi da uno e dall’altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
 * Se i due array non hanno dimensione uguale, allora restituisce null.
 * 
 * @param {array} arrayOne Primo array della fusione.
 * @param {array} arrayTwo Secondo array della fusione.
 * @return {array} Array fuso se arrayOne e arrayTwo hanno la stessa lunghezza, null altrimenti.
 */
function mergeArray(arrayOne, arrayTwo){
    var mergedResult = [];
    if(arrayOne.length !== arrayTwo.length){
        return null;
    }
    
    for(var i=0; i < arrayOne.length; i++){
        mergedResult.push(arrayOne[i]);
        mergedResult.push(arrayTwo[i]);
    }

    return mergedResult;
}

var arrayUno = ['a', 'b', 'c'];
var arrayDue = [1, 2, 3];

var arrayFusione = mergeArray(arrayUno, arrayDue);
console.log(arrayUno.toString());
console.log(arrayDue.toString());
console.log(arrayFusione.toString());