import { datos } from "./datos.js"

const dom = document;
const $padre = dom.querySelector('.container')
const p = dom.createElement('p');  
const texto = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae quo, aliquid impedit iste similique, ex aut ipsum maiores minima nesciunt nihil illo tempore reiciendis!";

p.innerText = texto;
$padre.appendChild(p)
const d2 = dom.createElement('p');  
const texto2 = "dos texto ome";
d2.innerText = texto2;
$padre.appendChild(d2)
const $lista = dom.querySelector('div.container > div.card > ul.list')
console.log($lista);


const li1 = dom.createElement('li')
let fragment = document.createDocumentFragment();
console.log(datos)
let name = ""
datos.map((x) => {
    let item = dom.createElement('li');
    item.innerText = x.nombre;
    fragment.appendChild(item);
    // console.log(x.nombre)
    item.classList.add('item')
})  

$lista.appendChild(fragment)