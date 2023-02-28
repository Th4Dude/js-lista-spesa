'use strict'

/* ----------------------------------------------------------------------------------------------------- */

/* Ciclo for */

/*arry */

const listaIngredienti = ['pane', 'latte', 'vino', 'pasta', 'pizza congelata'];

/* arry */

const lista = document.getElementById("lista");   /* prendo elemento dal dom */

for(let i = 0 ; i < listaIngredienti.length; i++){
    console.log(listaIngredienti[i]);
    const item = document.createElement('li'); /* creo elemento nel dom */
    item.append(listaIngredienti[i]);  /* appendo la lista ingredienti all'item ovvero il li */
    lista.append(item); /* ora prendo la lista e gli appendo item ovvero la lista ingredienti */
}

/* Ciclo for */


/* ----------------------------------------------------------------------------------------------------- */

/* Ciclo while */

const listaIngredientiDue = ['cipolle','barbabietola' ,'cetrioli','patate','lamponi' ]

const listaDue = document.getElementById('lista_02')   /* prendo elemento dal dom */

let i = 0;  

while( i < listaIngredientiDue.length ) { 
    console.log(listaIngredientiDue[i])
    const itemDue = document.createElement('li'); /* creo elemento nel dom */
    itemDue.append(listaIngredientiDue[i]); /* appendo la lista ingredienti all'item ovvero il li */
    listaDue.append(itemDue); /* ora prendo la lista e gli appendo item ovvero la lista ingredienti */
    i++;
}

/* Ciclo while */

/* ----------------------------------------------------------------------------------------------------- */

