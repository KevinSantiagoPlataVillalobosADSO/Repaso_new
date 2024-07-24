export default seleccion

// let seleccion = (event, element) => {
//     console.log(element.value)
//     if(element.value == "Seleccionar"){
//         element.classList.remove("sucess")
//         element.classList.add("no_send")
//     }
//     else{
//         element.classList.remove("no_send")
//         element.classList.add("sucess")
//     }
// }

function seleccion(event, element){
    console.log(element.value)
    if(element.value == "Seleccionar"){
        element.classList.remove("sucess")
        element.classList.add("no_send")
    }
    else{
        element.classList.remove("no_send")
        element.classList.add("sucess")
    }
}