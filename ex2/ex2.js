/* 🏆 Snack 2
Crea la funzione lanciaDado() che restituisce una Promise che, 
dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, 
nel 20% dei casi, il dado si "incastra" e la Promise
 va in reject. */

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