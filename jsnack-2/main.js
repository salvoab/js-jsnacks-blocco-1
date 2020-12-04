/*
    Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/

/**
 * Restituisce una stringa girata rispetto a quella passato come argomento.
 * 
 * @param {string} word Stringa da girare.
 * @return {string} Stringa girata.
 */
function reverseString(word){
    var reversed = '';
    for(var i = word.length-1; i >= 0; i--){
        reversed += word[i];
    }
    return reversed;
}

var parola = 'Ciao';
console.log(reverseString(parola));