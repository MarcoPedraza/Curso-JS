//Crea una calculadora que sea capaz de: sumar, restar, dividir, multiplicar. Hazla con funciones


const sumar = (num1,num2) =>{
    return parseInt(num1) + parseInt(num2)
}

const restar = (num1,num2) => {
    return parseInt(num1) - parseInt(num2)
}

const multiplicar = (num1,num2) => {
    return parseInt(num1) * parseInt(num2)
}

const dividir = (num1,num2) => {
    return parseInt(num1) / parseInt(num2)
}



alert ("Elige la operación que desees hacer")
let opcion = prompt("1) Sumar, 2) Restar, 3) Multiplicar, 4) Dividir")

//Suma

if (opcion == 1){
    let num1 = prompt("Ingresa el primer numero para sumar ")
    let num2 = prompt("Ingresa el segundo numero para sumar")
    resultado = sumar(num1,num2)
    alert(`Tu resultado es ${resultado}`)
}


else if (opcion == 2){
    let num1 = prompt("Ingresa el primer numero para restar ")
    let num2 = prompt("Ingresa el segundo numero para restar")
    resultado = restar(num1,num2)
    alert(`Tu resultado es ${resultado}`)
}

else if (opcion == 3){
    let num1 = prompt("Ingresa el primer numero para multiplicar ")
    let num2 = prompt("Ingresa el segundo numero para multiplicar")
    resultado = multiplicar(num1,num2)
    alert(`Tu resultado es ${resultado}`)
}

if (opcion == 4){
    let num1 = prompt("Ingresa el primer numero para dividir ")
    let num2 = prompt("Ingresa el segundo numero para dividir")
    resultado = dividir(num1,num2)
    alert(`Tu resultado es ${resultado}`)
}