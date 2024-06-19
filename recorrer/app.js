let win = window;
let dom = document
let body = dom.body

let divs = dom.querySelectorAll('div');
let div = dom.querySelector('div')
let form = dom.forms
let link = dom.links
let imagenes = dom.images;
let porId = dom.getElementById('documento')
let Idnew = dom.querySelector('#documento')
let porclase = dom.querySelectorAll('.container')
let poratrib = dom.getElementsByName('search')

let item = dom.querySelectorAll('ul.list > li.item')


console.log(win)
console.log(dom)
console.log(dom.doctype)
console.log(dom.body)
console.log(dom.body.children[0])


let array = [...body.children]

console.log(array)

console.log(divs)
console.log(div)
console.log(form)
console.log(link)
console.log(imagenes)


console.log()
console.log(item)

    // let api = document.getElementById('api')
    // console.log(api)
    // api.innerHTML('QUE ES API???')
    // console.log()


const $padre = dom.getElementById('cards');

console.log($padre.children)
console.clear();
let arrayip = [...$padre.children]
arrayip.map((a, i) => {

    if(i % 2 != 0){
        a.classList.toggle('bg_w')
        let arrayip2 = [...a.children]
        arrayip2.map((e, f) => {
            if(f % 2 != 0){
                // console.log(e.children)
                let arrayip3 = [...e.children]
                arrayip3.map((q, j) => {
                    if(j % 2 != 0){
                        console.log(q)
                        q.classList.toggle('color')
                    }
                })
            }
        })
    }
})

const $form = dom.getElementById('search');
$form.setAttribute("enctype", "multipart/form-data")
// $form.setAttribute("autocomplete", "off")
const $btn = dom.querySelector('input')
$btn.setAttribute("type", "search")
console.log($btn)

$btn.removeAttribute("placeholder")

//custom properties css
const $html = dom.documentElement
// console.log($html)
// const ore = getComputedStyle($html).getPropertyValue('--ore');
// $html.style.setProperty("--ore", "#ffff")
// const whiter = getComputedStyle($html).getPropertyValue('--whiter');
// $html.style.setProperty("--whiter", "#333333")
// console.log(ore)

const $parra = dom.querySelector('#elementos')
$parra.innerHTML = "EL <b>DOM ES PA PROGRAMADORES</b> QUE LE <br> SABEN C:"
console.log($parra)

