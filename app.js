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
console.log( item)

    // let api = document.getElementById('api')
    // console.log(api)
    // api.innerHTML('QUE ES API???')
    // console.log()
