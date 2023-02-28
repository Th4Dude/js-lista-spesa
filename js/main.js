'use strict'

const listaIngredienti = ['pane', 'latte', 'vino', 'pasta', 'pizza congelata']
console.log(listaIngredienti)

const lista = document.getElementById("lista");

for(let i = 0 ; i < listaIngredienti.length; i++){
    console.log(listaIngredienti[i]);
    const item = document.createElement('li');
    item.append(listaIngredienti[i]);
    lista.append(item)
}










