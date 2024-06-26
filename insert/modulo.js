export const post = async(id)=>{
    const solicitud = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const comentarios = await solicitud.json()
    return comentarios
  }