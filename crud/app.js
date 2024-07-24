import { leer } from './MODULO/leer.js'
import letras from './MODULO/strings.js'
import num from './MODULO/number.js'
import ema_il from './MODULO/email.js'
import seleccion from './MODULO/seleccion.js'
import direc from './MODULO/direc.js'
import vacio from './MODULO/validar.js'

let btn = document.querySelector(".btn")
let form = document.querySelector("form")
let nombre = document.querySelector(".name")
let last = document.querySelector(".lastname")
let doc = document.querySelector(".doc")
let mail = document.querySelector(".email")
let tipo_d = document.querySelector(".select_doc")
let direccion = document.querySelector(".direc")
let check = document.querySelector(".check")
let inputs = document.querySelectorAll("input")
let select = document.querySelector("select")

leer()

async function option(){
    let response = await fetch("http://localhost:3000/documentos")
    let data = await response.json();
    console.log(data)
    const select = document.querySelector("select")
    const fragment = document.createDocumentFragment();
    data.forEach( x => {
        let option = document.createElement("option")
        option.textContent = x.nombre;
        fragment.appendChild(option)
    });
    select.appendChild(fragment)
}

if(check.checked){
    btn.classList.add("btn")
    btn.classList.remove("disabled")
}
else{
    btn.classList.add("disabled")
    btn.classList.remove("btn")
    btn.setAttribute("disabled", "true")
}
option();

nombre.addEventListener('keyup', (event) => {
    letras(event, nombre)
})

nombre.addEventListener('keypress', (event) => {
    letras(event, nombre)
})
nombre.addEventListener('blur', (event) => {
    letras(event, nombre)
})

last.addEventListener('keyup', (event) => {
    letras(event, last)
})

last.addEventListener('keypress', (event) => {
    letras(event, last)
})

last.addEventListener('blur', (event) => {
    letras(event, last)
})


mail.addEventListener("keyup", (event) => {
    ema_il(event, mail)
})

mail.addEventListener("change", (event) => {
    ema_il(event, mail)
})


doc.addEventListener('keyup', (event)=>{
    num(event, doc)
})

doc.addEventListener('blur', (event)=>{
    num(event, doc)
})

tipo_d.addEventListener('blur', (event) => {
    seleccion(event, tipo_d)
})
tipo_d.addEventListener('click', (event) => {
    seleccion(event, tipo_d)
})

let cambia = (event) => {
    if(check.checked){
        btn.removeAttribute("disabled")
        btn.classList.add("btn")
        btn.classList.remove("disabled")
    }
    else{
        btn.classList.add("disabled")
        btn.classList.remove("btn")
        btn.setAttribute("disabled", "true")
    }
}

check.addEventListener("change", (event) => {
    cambia(event, check)
})

direccion.addEventListener('keyup', (event) => {
    direc(event, direccion)
})


const form_v = (event) =>{
    if(vacio()){
        event.preventDefault();
        alert("Ingrese todos los campos")
        inputs.forEach((x)=>{
            if(x.classList.contains( 'sucess' )){
                
            }
            else{
                x.classList.add("no_send")
            }

            if(!select.classList.contains('sucess')){
                select.classList.add('no_send')   
            }

            if(x.classList.contains('no_send')){
                form.event.preventDefault();
            }
            
        })        
    }
    else{
        console.log(event)
        const datos = {
            "nombre": nombre.value,
            "apellido": last.value,
            "documento": doc.value,
            "tipo_doc": tipo_d.value,
            "correo": mail.value,
            "direccion": direccion.value
        }
        fetch('http://localhost:3000/users', {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {"Content-type": "application/json;charset=UTF-8"}
          })
          .then(response => response.json()) 
          .then(json => alert("Registrado con exito", console.log(json)))
          .catch(err => {
            console.log("error", err)
            alert("No se registro")
          });
        
        form.reset()
        btn.setAttribute("disabled", "true")
        let inputs = document.querySelectorAll("input")
        inputs.forEach(x => {
            x.classList.remove("sucess")
        })
    }
}

form.addEventListener('submit', form_v)

//regex
    
    //regex del email https://w3.unpocodetodo.info/utiles/regex-ejemplos.php?type=email
    
//