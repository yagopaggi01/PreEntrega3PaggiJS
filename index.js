localStorage.removeItem("cant_conduc");
localStorage.removeItem("cant_hogar");

// Función para calcular el precio del seguro de auto
function calcularSeguroAuto(edad, marca) {
let precioBase = 2000;

// Verificar la edad del conductor
if (edad < 25) {
    precioBase += 500; // Aplicar recargo por ser menor de 25 años
}

// Verificar la marca del auto
switch (marca) {
    case "Ford":
        precioBase += 1000;
    break;
    case "Chevrolet":
        precioBase += 800;
    break;
    case "Toyota":
        precioBase += 1200;
    break;
    default:
        precioBase += 500;
}

    return precioBase;
}

// Función para calcular el precio del seguro de hogar
function calcularSeguroHogar(tamano, ubicacion) {
    let precioBase = 1500;

// Verificar el tamaño del hogar
    if (tamano > 200) {
        precioBase += 500; // Aplicar recargo por ser un hogar grande
}

// Verificar la ubicación del hogar
if (ubicacion === "Ciudad") {
    precioBase += 800;
}

return precioBase;
}

// Función para mostrar el resultado del cotizador
function mostrarResultado(precio) {
    console.log("El precio del seguro es: $" + precio);
}

// Obtener la cantidad de conductores y hogares mediante el prompt
let numConductores = parseInt(prompt("Ingrese la cantidad de conductores:"));
localStorage.setItem("cant_conduc", numConductores);

let numHogares = parseInt(prompt("Ingrese la cantidad de hogares:"));
localStorage.setItem("cant_hogar", numHogares);


let costoTotalSeguroAuto = 0;
let costoTotalSeguroHogar = 0;

// Calcular seguro de auto para cada conductor
for (let i = 1; i <= numConductores; i++) {
let edadConductor = parseInt(prompt("Ingrese la edad del conductor " + i + ":"));
let marcaAuto = prompt("Ingrese la marca del auto del conductor " + i + ":");

let precioSeguroAuto = calcularSeguroAuto(edadConductor, marcaAuto);
costoTotalSeguroAuto += precioSeguroAuto;
}

// Calcular seguro de hogar para cada hogar
for (let i = 1; i <= numHogares; i++) {
let tamanoHogar = parseInt(prompt("Ingrese el tamaño del hogar " + i + " (en metros cuadrados):"));
let ubicacionHogar = prompt("Ingrese la ubicación del hogar " + i + ":");

let precioSeguroHogar = calcularSeguroHogar(tamanoHogar, ubicacionHogar);
costoTotalSeguroHogar += precioSeguroHogar;
}

console.log("El costo total del seguro de auto es: $" + costoTotalSeguroAuto);
console.log("El costo total del seguro de hogar es: $" + costoTotalSeguroHogar);


let personas = [
{ nombre: 'Juan', edad: 25 },
{ nombre: 'María', edad: 30 },
{ nombre: 'Carlos', edad: 28 },
];

// Método para obtener el promedio de edades de todas las personas
Array.prototype.promedioEdades = function () {
if (this.length === 0) return 0;

const sumaEdades = this.reduce((acumulador, persona) => acumulador + persona.edad, 0);
return sumaEdades / this.length;
};

// Método para encontrar una persona por su nombre
Array.prototype.encontrarPersonaPorNombre = function (nombre) {
return this.find((persona) => persona.nombre === nombre);
};

// Método para agregar una nueva persona al arreglo
Array.prototype.agregarPersona = function (nombre, edad) {
this.push({ nombre, edad });
};

// Función para mostrar un alert con la cantidad de conductores almacenada en el LocalStorage
function mostrarCantidadConductores() {
    // Recupera el valor almacenado en el LocalStorage
    let storedNumConductores = localStorage.getItem("cant_conduc");

    // Muestra un alert con la cantidad de conductores
    if (storedNumConductores !== null) {
        alert("Cantidad de conductores: " + storedNumConductores);
    } else {
        alert("No se ha almacenado la cantidad de conductores.");
    }
}

// Función para actualizar los elementos HTML con los valores del LocalStorage
function actualizarElementosHTML() {
    // Recupera el valor almacenado en el LocalStorage para conductores
    let storedNumConductores = localStorage.getItem("cant_conduc");
    
    // Muestra el valor en el elemento HTML para conductores
    if (storedNumConductores !== null) {
        document.getElementById("numConductores").textContent = "Cantidad de conductores: " + storedNumConductores;
    }

    // Recupera el valor almacenado en el LocalStorage para hogares
    let storedNumHogares = localStorage.getItem("cant_hogar");
    
    // Muestra el valor en el elemento HTML para hogares
    if (storedNumHogares !== null) {
        document.getElementById("numHogares").textContent = "Cantidad de Hogares: " + storedNumHogares;
    }
}

// Asigna la función al evento click del botón
document.getElementById("mostrarConductores").addEventListener("click", mostrarCantidadConductores);

// Ejecuta la función para actualizar los elementos HTML después de que la página se haya cargado
window.addEventListener('load', function() {
    actualizarElementosHTML();
});

// Asigna la función al evento click del botón
document.getElementById("mostrarConductores").addEventListener("click", mostrarCantidadConductores);


console.log(personas.promedioEdades()); // Muestra el promedio de edades
console.log(personas.encontrarPersonaPorNombre('María')); // Encuentra a la persona con nombre 'María'
personas.agregarPersona('Luis', 32); // Agrega una nueva persona al arreglo
console.log(personas); // Muestra el arreglo actualizado



