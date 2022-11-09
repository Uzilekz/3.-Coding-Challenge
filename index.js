// TEST EVALUATOR
function rendimiento (nota){
    nota = prompt("Dime tu nota del 0 al 10");
    
    if (nota>=0 && nota<=2) {
        alert("Muy mal")
    }else if (nota >=2 && nota<=5) {
        alert("Mal")
    }else if (nota >=5 && nota<=6) {
        alert("Tan cerca pero tan lejos")
    }else if (nota >=6 && nota<=8) {
        alert("Bien")
    }else if (nota >=8 && nota<=10) {
        alert("Muy bien")
    }
}

let button1 = document.getElementById("1");
button1.addEventListener("click", rendimiento);










// THE BIGGEST ONE
function biggestOne (num1, num2, palabra) {
    num1 = prompt("Dime un numero");
    num2 = prompt("Dime otro numero");
    palabra = prompt("Dime una palabra");
    
    if(num1 > num2) {
        alert("El " + num1 + " es el numero mas grande.")
    } else if (num2 > num1) {
        alert("El " + num2 + " es el numero mas grande.")
    } else if (num1 == num2) {
        alert('La primera letra es: ' + palabra.charAt(0) + '\nLa ultima letra es: ' + palabra.charAt(palabra.length - 1))
    }
}

let button2 = document.getElementById("2");
button2.addEventListener("click", biggestOne);










// FROOTLOOP
let frutasYVerduras = [
    {fruta:"banana"},
    {verdura:"apio"},
    {fruta:"manzana"},
    {fruta:"frutilla"},
    {verdura:"zanahoria"},
    {fruta:"kiwi"},
    {fruta:"sandia"},
    {fruta:"melon"},
    {verdura:"repollo"},
    {fruta:"mango"}
]

function filtrar() {
    let frutas = frutasYVerduras.filter(frutas => frutas.fruta)
    alert("Las frutas de la lista:\n\n" + JSON.stringify(frutas));
}

let button3 = document.getElementById("3");
button3.addEventListener("click", filtrar);










// SODA DISPENSER
let unidades = [6, 2, 7, 5];
let gaseosas = ["Coca Cola", "Sprite", "Fanta", "Seven up"];

function dispenserGaseosas(){
    let stock = [];

    for (i = 0; i < gaseosas.length; i++) {
        let cantidad = unidades[i];
        let Marca = gaseosas[i];

        let objetoGaseosa = {
            Marca: Marca,
            cantidad: cantidad
        };
        stock.push(objetoGaseosa);
    }
    alert("Hay en stock:\n\n" + JSON.stringify(stock));
}

let button4 = document.getElementById("4");
button4.addEventListener("click", dispenserGaseosas);










// AÑO DE NACIMIENTO
function agregarAño(){
    let personas = [
        {nombre: "Juan", edad: 19},
        {nombre: "Mario", edad: 22}
    ];

    for(let i = 0; i < personas.length; i++){
        let año = new Date().getFullYear() - personas[i].edad;
        personas[i].añoDeNacimiento = año;
    }
    alert(JSON.stringify(personas));
}

let button5 = document.getElementById("5");
button5.addEventListener("click", agregarAño);