import { comentarios } from "./modulo.js"

const root = document.querySelector("#root")
const fragment = document.createDocumentFragment();
const plantilla = document.querySelector("#plantilla").content;
const section = document.createElement("section")
section.classList.add("cards")

console.log(plantilla)

comentarios().then((lista) => {
    lista.forEach(comentarios => {
        plantilla.querySelector("div > h2").textContent = `${comentarios.id} - ${comentarios.name}`;
        plantilla.querySelector("div > div > p").textContent = comentarios.email;
        plantilla.querySelector("div > div > p ~ p").textContent = comentarios.body;
        plantilla.querySelector("div").classList.add("card")

        const clone = document.importNode(plantilla, true)

        fragment.prepend(clone)
    });
    section.appendChild(fragment)
    root.appendChild(section)
});