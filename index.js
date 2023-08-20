// Array de personas
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

// Función para mostrar un mensaje en el elemento con el id "resultado"
function mostrarMensaje(mensaje) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = mensaje;
}

// Función para mostrar un mensaje en el elemento con el id "mensajePersonas"
function mostrarMensajePersonas(mensaje) {
    const mensajePersonasElement = document.getElementById('mensajePersonas');
    mensajePersonasElement.textContent = mensaje;
}

// Función para mostrar un mensaje en el elemento con el id "mensajePromedio"
function mostrarMensajePromedio(mensaje) {
    const mensajePromedioElement = document.getElementById('mensajePromedio');
    mensajePromedioElement.textContent = mensaje;
}

// Obtener el elemento por su id
const mostrarConductoresButton = document.getElementById('mostrarConductores');
const mostrarPromedioButton = document.getElementById('mostrarPromedio');

// Agregar un evento de clic al botón "Mostrar Conductores"
mostrarConductoresButton.addEventListener('click', function() {
    const numConductores = Math.floor(Math.random() * 10) + 1; // Genera un número aleatorio entre 1 y 10
    mostrarMensaje("Cantidad de conductores: " + numConductores);
});

// Agregar un evento de clic al botón "Mostrar Promedio"
mostrarPromedioButton.addEventListener('click', function() {
    const promedio = personas.promedioEdades();
    mostrarMensajePersonas("Promedio de edades: " + promedio);
});

// Agregar un evento de carga para actualizar los elementos HTML
window.addEventListener('load', function() {
    actualizarElementosHTML();
});

// Función para actualizar los elementos HTML con los valores del LocalStorage
function actualizarElementosHTML() {
    // Recupera el valor almacenado en el LocalStorage para conductores
    let storedNumConductores = localStorage.getItem("cant_conduc")};

    function actualizarElementosHTML() {
        // Muestra el valor aleatorio en el elemento HTML para conductores
        document.getElementById("numConductores").textContent = "Cantidad de conductores: " + numConductores;
    }
    

    let numConductores = Math.floor(Math.random() * 10) + 1; // Genera un número aleatorio entre 1 y 10

    // Función para actualizar los elementos HTML con los valores del LocalStorage
function actualizarElementosHTML() {
    // Recupera el valor almacenado en el LocalStorage para hogares
    let storedNumHogares = localStorage.getItem("cant_hogar");

    // Muestra el valor en el elemento HTML para hogares
    if (storedNumHogares !== null) {
        document.getElementById("numHogares").textContent = "Cantidad de Hogares: " + storedNumHogares;
    }
}


// Función para calcular los costos totales de seguro de auto y hogar
function calcularCostosTotales() {
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

    // Mostrar los resultados en la consola
    console.log("El costo total del seguro de auto es: $" + costoTotalSeguroAuto);
    console.log("El costo total del seguro de hogar es: $" + costoTotalSeguroHogar);
}

// Llamar a la función para calcular los costos totales
calcularCostosTotales();

// Mostrar promedio de edades en la consola
console.log(personas.promedioEdades());
// Encontrar a una persona por nombre y mostrarla en la consola
console.log(personas.encontrarPersonaPorNombre('María'));
// Agregar una nueva persona al arreglo y mostrar el arreglo en la consola
personas.agregarPersona('Luis', 32);
console.log(personas); // Muestra el arreglo actualizado