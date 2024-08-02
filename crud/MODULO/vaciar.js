export default vaciar

function vaciar(event){
    event.preventDefault();
    let vacio = document.querySelectorAll("form > [required]")
    vacio.forEach((x) => {
        if(x.classList.contains("select_doc")){
            x.value = "Seleccionar"
            x.classList.remove("sucess")
        }
        else if(x.classList.contains("check")){
            x.prop("checked", false);
        }
        else{
            x.value = "";
            x.classList.remove("sucess")
        }
    })
}
