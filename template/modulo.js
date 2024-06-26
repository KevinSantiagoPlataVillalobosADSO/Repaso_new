export const comentarios = async()=>{
    const solicitud = await fetch("https://jsonplaceholder.typicode.com/comments")
    const comentarios = await solicitud.json()
    console.log(comentarios)
    return comentarios
  }