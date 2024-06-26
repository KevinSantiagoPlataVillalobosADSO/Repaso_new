import { post } from "./modulo.js";

const $root = document.querySelector("#root")
const container = document.querySelector(".container")

const div = document.createElement("div")
let form = document.createElement("form")
let text = document.createElement("input")
let sud = document.createElement("input")

text.setAttribute("type", "text")
sud.setAttribute("type", "submit")
sud.setAttribute("value", "enviar")


text.classList.add("input")
sud.classList.add("sud")

const regex = /^[0-9]{1,2}$/;

form.appendChild(text)
form.appendChild(sud)

$root.insertBefore(form, $root.firstChild)
// $root.insertBefore(sud, $root.firstChild)
// $root.insertBefore(text, $root.firstChild)


$root.appendChild(div)


const agregar_post = (event) =>{
    event.preventDefault();
    if(regex.test(text.value)){
        text.classList.remove("no_send")
        post(text.value)
        .then((response) => {
            const fragment = document.createDocumentFragment();
            console.log(response)
            let card = document.createElement("div")
            card.classList.add("card")
            let h2 = document.createElement("h2")
            h2.innerText = `${response.id} - ${response.title}`;
            card.appendChild(h2)
            let p = document.createElement("p")
            p.innerText = response.body;
            card.appendChild(p)
    
            // container.prepend(card)
    
            fragment.appendChild(card)
            container.insertBefore(fragment, container.firstChild)
            
        })
        .catch();
    }
    else{
        alert("No se permite campos vacios ni caracteres que no sean numeross")   
        text.classList.add("no_send")
    }
    
}
form.addEventListener('submit', agregar_post)
// sud.addEventListener('click', agregar_post)
form.addEventListener('keyup', function () {
    if(regex.test(text.value)){
        sud.removeAttribute("disabled"); 
        text.classList.remove("no_send")
        text.classList.add("sucess")
    }
    else{
        sud.setAttribute("disabled", "true"); 
        text.classList.remove("sucess")
        text.classList.add("no_send")
    }
})