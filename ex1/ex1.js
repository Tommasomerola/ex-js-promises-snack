/* 
Crea una funzione getPostTitle(id) che accetta un id e 
restituisce una Promise che recupera il titolo di un post
 dal link https://dummyjson.com/posts/{id}


🎯 Bonus: Ottieni l'intero post con l'autore
Crea una funzione getPost(id) che recupera l'intero post. 
Concatena una seconda chiamata che aggiunge una proprietà 
user che contiene i dati dell'autore, 
recuperati dalla chiamata https://dummyjson.com/users/{post.userId}. */


function getPostTitle (id) {
    return new Promise ((resolve, reject) => {
        fetch (`https://dummyjson.com/posts/${id}`)
        .then(res => res.json())
        .then(post => resolve(post.title))
        .catch(reject)
    });

}

getPostTitle(1)
    .then(title => console.log(`titolo del post`, title))
    .catch(err => (err));



 /* bonus */   



function getPost (id) {
    return new Promise ((resolve, reject) => {
        fetch (`https://dummyjson.com/posts/${id}`)
        .then(res => res.json())
        .then(post => {
            fetch(`https://dummyjson.com/users/${post.userId}`)
            .then(res=>res.json())
            .then(user=>resolve({...post, user}))
            .catch(reject)
        })
        .catch(reject)
    });

}

getPost(1)
    .then(post => console.log(` Post completo `, post))
    .catch(err => (err));