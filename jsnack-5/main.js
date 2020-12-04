/**
 * Scrivi una funzione che accetti tre argomenti:
 * un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
 * La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”
*/

/**
 * Restituisce un nuovo array contenente gli elementi compresi fra la posizione start (inclusa) e la posizione end (esclusa).
 * 
 * Il massimo valore possibile per end è la lunghezza dell'array sequence.
 * Se start ed end non sono posizioni valide per l'array sequence, o end non rispetta il vincolo precedente, allora la funzione restituisce null.
 * 
 * @param {array} sequence Array dal quale prendere gli elementi.
 * @param {number} start Posizione iniziale (inclusa).
 * @param {number} end Posizione finale (esclusa).
 * @return {array} Sezione dell'array desiderata se start ed end rispettano i vincoli richiesti, null altrimenti.
 */
function sliceInterval(sequence, start, end){
    var newSequence = [];
    if(start < 0 || end < 0 || start > sequence.length || end > sequence.length){
        return null;
    }

    for(var i = start; i < end; i++){
        newSequence.push(sequence[i]);
    }

    return newSequence;
}

var sequenza = [0, 1, 2, 3, 4, 5, 6];
var sottoSequenza = sliceInterval(sequenza, 1, 5);

console.log(sottoSequenza);