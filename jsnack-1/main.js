/*
    Crea 10 oggetti che rappresentano una zucchina,
    indicando per ognuna varietà, peso e lunghezza.
    Calcola quanto pesano tutte le zucchine.
*/

class Zucchina{
    constructor(varieta, peso, lunghezza){
        this.varieta = varieta;
        this.peso = peso;
        this.lunghezza = lunghezza;
    }
}
var zucchine = [];
zucchine.push(new Zucchina("Chiara di Faenza", 120, 14));
zucchine.push(new Zucchina("Nera di Milano", 55, 8));
zucchine.push(new Zucchina("Romanesca", 140, 16));
zucchine.push(new Zucchina("Lunga fiorentina", 225, 24));
zucchine.push(new Zucchina("Siciliana", 450, 35));
zucchine.push(new Zucchina("Striata di Napoli", 75, 10));
zucchine.push(new Zucchina("Bianca triestina", 115, 12));
zucchine.push(new Zucchina("Tonda di Piacenza", 300, 20));
zucchine.push(new Zucchina("Tonda di Nizza", 225, 25));
zucchine.push(new Zucchina("Tonda di Firenze", 250, 30));
var pesoTotale = 0;
for(var i=0; i<zucchine.length; i++){
    pesoTotale += zucchine[i].peso;
}

console.log(`Il peso totale è di ${pesoTotale} grammi`);