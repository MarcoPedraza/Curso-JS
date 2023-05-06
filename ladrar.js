ladrar(){
        if(this.especie == "perro"){
            document.write("¡WAW!" + "<br>")
        } else{
            document.write(`No puede ladrar ya que es un ${this.especie} <br>`)
        }
    }