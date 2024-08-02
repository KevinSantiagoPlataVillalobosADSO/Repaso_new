import val from "./crud/MODULO/validar"



let form = document.querySelector("form")
let nombre = document.querySelector(".nombre")


form.addEventListener("submit", (event) => {
    let respuesta = val(event, "form [required]")
    const data = {
        nombre: nombre.value
    }
    if(respuesta){
        fetch('http://localhost:3000/documentos', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
    }
    form.reset(false)
    console.log("asd");
})