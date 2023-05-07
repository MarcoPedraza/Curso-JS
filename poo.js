//  BASICO DE LA PROGRAMACION ORIENTADA A OBJETOS

class Animal {

    constructor(especie,edad,color){  //el this solo se pone en el constructor

        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
     verInformacion = ()=>{
         document.write(this.info + "<br>")
    }   
}

class Perro extends Animal {             //Esto recoge todos los datos de la clase animal pero ademas añade algunos exclusivos de el perro
    constructor(especie,edad,color,raza){
        super(especie,edad,color)
        this.raza = raza 
    }
    ladrar(){
        alert("WAW")
    }
    
    static ladrar(){    //ESTA FUNCION SE VA A PODER USAR SIN TENER QUE CREAR EL OBJETO PERRO
                        // PORQUE NO USA NADA DEL CONSTRUCTOR
        alert("WAW")
    }

    set setRaza(newName){
        this.raza = newName;
    }

    get getRaza(){
        return this.raza
    }
}



//PARA MODIFICAR EL VALOR DE UNA PROPIEDAD DE LA CLASE USAMOS UNA
//FUNCION CON SE








let perro = new Perro("perro",5,"marron","doberman")
let gato = new Animal("gato",2,"negro")
let pajaro = new Animal("pajaro",1,"verde")


/*document.write(perro.info)
document.write(gato.info)
document.write(pajaro.info)*/   //Todo esto se puede hacer con un metodo(funcion dentro de la clase)

perro.setRaza = "Pedro"
document.write(perro.raza)

// perro.ladrar();
// gato.ladrar()