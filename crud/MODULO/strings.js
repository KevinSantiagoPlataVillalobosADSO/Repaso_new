export default letras

// const letras_d = (event, element) => {
//     console.log(event);
//     let letras_r = /^[a-zA-Zá-ÿ\s]+$/
//     if(letras_r.test(event.key)){
//         console.log("si")
//         element.classList.remove("no_send")
//         element.classList.add("sucess")
//         if(element.value == ""){
//             console.log("no2");
//             element.classList.remove("sucess")
//             element.classList.add("no_send")
//         }
//     }
//     else{
//         event.preventDefault();
//     }
// };

function letras(event, element) {
    let letras_r = /^[a-zA-Zá-ÿ\s]+$/
    if(letras_r.test(event.key)){
        element.classList.remove("no_send")
        element.classList.add("sucess")
        if(element.value == ""){
            element.classList.remove("sucess")
            element.classList.add("no_send")
        }
    }
    else{
        event.preventDefault();
    }
}