const listar = (u) =>{
    let tabla = document.querySelector("table")
        let tbody = document.querySelector("tbody")

        let fragment_l = document.createDocumentFragment();
        let fila = document.querySelectorAll(".fila")
        fila.forEach((z) => {
            z.remove();
        })
        u.map((x)=>{
            let fila = document.createElement('tr')
            fila.classList.add("fila")
            fila.setAttribute("id", x.id)

            let columna_ID = document.createElement('td')
            columna_ID.innerText = x.id
            columna_ID.classList.add("id")

            let columna_n = document.createElement('td')
            columna_n.innerText = x.nombre

            let columna_a = document.createElement('td')
            columna_a.innerText = x.apellido

            let columna_doc = document.createElement('td')
            columna_doc.innerText = x.documento

            let columna_c = document.createElement('td')
            columna_c.innerText = x.correo

            let columna_direccion = document.createElement('td')
            columna_direccion.innerText = x.direccion

            let columna_edit = document.createElement('td')
            let btn_edit = document.createElement('button')
            btn_edit.textContent = "EDIT"
            btn_edit.classList.add("btn_edit")

            let btn_del = document.createElement('button')
            btn_del.textContent = "BORRAR"
            btn_del.classList.add("btn_del")

            columna_edit.append(btn_edit)
            columna_edit.append(btn_del)

            columna_direccion.innerText = x.direccion
            fila.appendChild(columna_ID)
            fila.appendChild(columna_n)
            fila.appendChild(columna_a)
            fila.appendChild(columna_doc)
            fila.appendChild(columna_c)
            fila.appendChild(columna_direccion)
            fila.appendChild(columna_edit)


            fragment_l.appendChild(fila)
        })

        tbody.appendChild(fragment_l)
}

export default listar