/* 🏆 Snack 2
Crea la funzione lanciaDado() che restituisce una Promise che, 
dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, 
nel 20% dei casi, il dado si "incastra" e la Promise
 va in reject. 
 
 🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
Modifica la funzione in creaLanciaDado(), che restituisce una closure 
che memorizza l'ultimo risultato. Se il numero esce due volte di fila, 
stampa "Incredibile!".*/

 const lanciaDado = () => {
        return new Promise((resolve, reject) => {
            console.log(`sto lanciando il dado...`);
            setTimeout(() => {
                const incastrato = Math.random() < 0.2;
                if(incastrato) {
                    reject(`il dado si è incastrato!!! Riprova !!!`)
                }else{
                    const risultato = Math.floor(Math.random() * 6) + 1;
                    resolve(risultato)
                }
            }, 3000)
            
        })
 }

 lanciaDado()
    .then(risultato => console.log(`il dado è sul`, risultato))
    .catch (err => console.error(err))


/* bonus */ 

const creaLanciaDado = () => {

let ultimoLancio = null

  return function (){
    return new Promise((resolve, reject) => {
        console.log(`sto lanciando il dado...`);
        setTimeout(() => {
            if(Math.random() < 0.2) {
                ultimoLancio = null
                reject(`il dado si è incastrato!!! Riprova !!!`)
            }else{
                const risultato = Math.floor(Math.random() * 6) + 1;
                if(risultato === ultimoLancio){
                    console.log(`incredibile`);   
                }
                ultimoLancio= risultato
                resolve(risultato)
            }
        }, 3000)
        
    })
  }
}

const lanciaDadoConMemoria = creaLanciaDado()
/* il bonus non è del tutto completo, bisognerebbe concatenare 
un secondo lancio, poichè in questo caso ricaricando la pagina, 
si riavvia il codice senza mai avere la possibilità di avere
due lanci realmente consecuitivi per il codice */
lanciaDadoConMemoria()
.then(risultato => console.log(`il dado è sul`, risultato))
.catch (err => console.error(err))