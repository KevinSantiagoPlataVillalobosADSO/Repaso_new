export default vacio

let nombre = document.querySelector(".name")
let last = document.querySelector(".lastname")
let doc = document.querySelector(".doc")
let mail = document.querySelector(".email")
let tipo_d = document.querySelector(".select_doc")
let direccion = document.querySelector(".direc")


function vacio(){
    if(nombre.value == "" || last.value == "" || doc.value == "" || tipo_d == "Seleccionar" || mail.value == "" || direccion.value == ""){
        return true
    }
    
    else{
        return false
    }
}
