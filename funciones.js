let frase = `Hola ${nombre}! Como estás?`;


function saludar(nombre){
    document.write(frase)
}

const saludar = function(nombre){
    document.write(frase)
}

const saludar = (nombre) => document.write(frase)


saludar ("Pedro")