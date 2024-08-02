const sel = async()=>{
    let response = await fetch("http://localhost:3000/documentos")
    let data = await response.json();
    return data
    
}

export default sel