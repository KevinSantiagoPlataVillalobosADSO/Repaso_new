export default val

let tipo_d = document.querySelector(".select_doc")


function val(event, form){
    event.preventDefault();
    let inpus_r = document.querySelectorAll(form)
    let pasar = true
    inpus_r.forEach((x) => {
        if(x.value == "" || x.classList.contains("no_send")){
            if(tipo_d.value == "Seleccionar"){
                tipo_d.classList.add("no_send")
            }
            x.classList.add("no_send")
            pasar = false
        }
    })
    return pasar
}



