import { data } from "./datos.js";
console.log(data)
let dom = document;
let fragment = document.createDocumentFragment();
const $padre = dom.querySelector(".container") 

let cards = dom.createElement('div')
cards.classList.add("cards")
$padre.appendChild(cards)

data.map((obj) => {

    let item = dom.createElement('div');
    fragment.appendChild(item);

    //card header
    let card__header = dom.createElement('div')
    card__header.classList.add('card__header')

        //HEADER_TITLE
        let card__title = dom.createElement('h2')
        card__title.innerText = obj.title
        card__title.classList.add('card__title')
        card__header.appendChild(card__title)
        item.appendChild(card__header)
        //HEADER_TITLE
        
    //card header

    //card_body
    let card__body = dom.createElement('div')
    card__body.classList.add('card__body')
    //card_body

    //img_body
    let img = dom.createElement('img')
    img.setAttribute("src", obj.src)
    img.classList.add("card__img")
    img.setAttribute("alt", "img")
    card__body.appendChild(img)
    //img_body

    //p_bodyy
    let p = dom.createElement('p')
    p.classList.add("card__paragraph")
    p.innerText = obj.pharagraf
    card__body.appendChild(p)
    //p_bodyy

    //button_a
    let a = dom.createElement('a')
    a.setAttribute("href", obj.url)
    a.classList.add("button")
    //button_a

    //span_button
    let span = dom.createElement('span')
    span.innerText = "Saber más";
    span.classList.add("button_text")
    a.appendChild(span)
    //span_button

    //icono_button
    let i = dom.createElement('i')
    i.setAttribute("class","bx bxs-chevron-right button__icon")
    a.appendChild(i)
    //icono_button
    
    card__body.appendChild(a)

    item.appendChild(card__body)
    item.classList.add('card')
})
cards.appendChild(fragment)

// let fragment_title = dom.createDocumentFragment;
// let fragment_body = dom.createDocumentFragment;

// let arraycard = [...$padre.children];
// arraycard.map((a, i) => {
//     let card_title = dom.createElement('div')
//     let card_body = dom.createElement('div')
//     console.log(a)
//     fragment_title.appendChild(card_title);
//     fragment_body.appendChild(card_body);


//     card_title.classList.add('card__title')
//     card_body.classList.add('card__body')
// })
// console.log(arraycard)






