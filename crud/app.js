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
option();



//regex
    let letras_r = /^[a-zA-Z]{3,}$/
    let numeros = /^[0-9]{5,}$/
    //regex del email https://w3.unpocodetodo.info/utiles/regex-ejemplos.php?type=email
    let email = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
//
let btn = document.querySelector(".btn")
let form = document.querySelector("form")
let nombre = document.querySelector(".name")
let last = document.querySelector(".lastname")
let doc = document.querySelector(".doc")
let mail = document.querySelector(".email")
let tipo_d = document.querySelector(".select_doc")
let direccion = document.querySelector(".direc")

if(nombre.value == "" && last.value == "" && doc.value == "" && mail.value == ""){
    btn.setAttribute("disabled", "true")
}



form.addEventListener('keyup', function () {
    if(letras_r.test(nombre.value)){
        btn.removeAttribute("disabled"); 
        nombre.classList.remove("no_send")
        nombre.classList.add("sucess")
    }

    else if(nombre.value == ""){
        btn.setAttribute("disabled", "true")
        nombre.classList.remove("no_send")
        nombre.classList.remove("sucess")
    }

    else{
        btn.setAttribute("disabled", "true")
        nombre.classList.remove("sucess")
        nombre.classList.add("no_send")
    }

    if(letras_r.test(last.value)){
        btn.removeAttribute("disabled"); 
        last.classList.remove("no_send")
        last.classList.add("sucess")
    }

    else if(last.value == ""){
        btn.setAttribute("disabled", "true")
        last.classList.remove("no_send")
        last.classList.remove("sucess")
    }

    else{
        btn.setAttribute("disabled", "true")
        last.classList.remove("sucess")
        last.classList.add("no_send")
    }

    if(numeros.test(doc.value)){
        btn.removeAttribute("disabled");
        doc.classList.remove("no_send")
        doc.classList.add("sucess")
    }

    else if(doc.value == ""){
        btn.setAttribute("disabled", "true")
        doc.classList.remove("no_send")
        doc.classList.remove("sucess")
    }

    else{
        btn.setAttribute("disabled", "true")
        doc.classList.remove("sucess")
        doc.classList.add("no_send")
    }

    if(email.test(mail.value)){
        btn.removeAttribute("disabled"); 
        mail.classList.remove("no_send")
        mail.classList.add("sucess")
    }

    else if(mail.value == ""){
        btn.setAttribute("disabled", "true")
        mail.classList.remove("no_send")
        mail.classList.remove("sucess")
    }

    else{
        btn.setAttribute("disabled", "true")
        mail.classList.remove("sucess")
        mail.classList.add("no_send")
    }
})


console.log(nombre.value)

const form_v = (event) =>{
    const datos = {
        "nombre": nombre.value,
        "apellido": last.value,
        "documento": doc.value,
        "tipo_doc": tipo_d.value,
        "correo": mail.value,
        "direccion": direccion.value
    }

    event.preventDefault();
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

form.addEventListener('submit', form_v)
