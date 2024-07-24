export async function leer(){
    let response  = await fetch('http://localhost:3000/users');
    let datos = await response.json();
    let tabla = document.querySelector("table")
    let tbody = document.querySelector("tbody")

    let fragment_l = document.createDocumentFragment();
    datos.map((x)=>{
        let fila = document.createElement('tr')

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

        fila.appendChild(columna_n)
        fila.appendChild(columna_a)
        fila.appendChild(columna_doc)
        fila.appendChild(columna_c)
        fila.appendChild(columna_direccion)
        

        fragment_l.appendChild(fila)
    })

    tbody.appendChild(fragment_l)
}