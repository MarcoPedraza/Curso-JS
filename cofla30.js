

class celulares{
    constructor(color,peso,rdp,rdc,ram){
        this.color = color
        this.peso = peso
        this.resolucionDePantalla = rdp
        this.resolucionDeCamara = rdc
        this.memoriaRam = ram
        this.encendido = false
    }
    presionarBotonEncendido(){
        if (this.encendido == false){
            alert("celular prendido")
            this.encendido = true
        }
        else{
            alert("celular apagado")
            this.encendido = false
        }
    }

    reiniciar(){
        if (this.encendido == true){
            alert("reiniciando celular")
        }
        else{
            alert("El celular esta apagado")
        }
    }

    tomarFotos(){
        alert(`Foto tomada en una resolucion de ${this.resolucionDeCamara}`)
    }

    grabarVideo(){
        alert(`Grabando video en ${this.resolucionDeCamara}`)
    }

    mobileInfo(){
        return `
        Color: ${this.color}</br>
        Peso:  ${this.peso}</br>
        Tamaño:  ${this.tamaño}</br>
        Resolucion de video  ${this.resolucionDeCamara}</br>
        Memoria Ram  ${this.memoriaRam}</br>
        
        `
    }
    
}

class CelularAltaGama{
    constructor(color,peso,tamaño,rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram)
        
        
    }
}

celular1 = new celulares ("rojo","150g","5"," hd","1GB")
celular2 = new celulares ("negro","155g","5.4","full hd","2GB")
celular3 = new celulares ("blanco","15046g","5.9","full hd","2GB")


document.write(`
${celular1.mobileInfo()} <br>
${celular2.mobileInfo()} <br>
${celular3.mobileInfo()} <br>
`)

// celular1.presionarBotonEncendido()
// celular1.tomarFotos()
// celular1.grabarVideo()
// celular1.reiniciar()
// celular1.presionarBotonEncendido()