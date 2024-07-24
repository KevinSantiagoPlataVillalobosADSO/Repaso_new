export default num;

// const num = (event, element) => {
//     console.log(event)
//     let numeros = /^[0-9+\s]$/
//     if(numeros.test(event.key)){
//         console.log("entra");
//         element.classList.remove("no_send")
//         element.classList.add("sucess")
        
//     }
//     else{
//         if(element.value == ""){
//             element.classList.remove("sucess")
//             element.classList.add("no_send")
//         }
//         event.preventDefault();
//     }
// };

function num (event, element){
    console.log(event)
    let numeros = /^[0-9+\s]$/
    if(numeros.test(event.key)){
        console.log("entra");
        element.classList.remove("no_send")
        element.classList.add("sucess")
        
    }
    else{
        if(element.value == ""){
            element.classList.remove("sucess")
            element.classList.add("no_send")
        }
        event.preventDefault();
    }
}