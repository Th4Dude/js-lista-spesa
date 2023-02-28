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












/* This code creates a new <p> element:
const para = document.createElement("p");

To add text to the <p> element, you must create a text node first. This code creates a text node:
const node = document.createTextNode("This is a new paragraph.");

Then you must append the text node to the <p> element:
para.appendChild(node);

Finally you must append the new element to an existing element.

This code finds an existing element:
const element = document.getElementById("div1");

This code appends the new element to the existing element:
element.appendChild(para);
 */