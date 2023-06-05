
let prompt = require("prompt-sync");

// let nombre = "Julio";

// (nombre === "Alvaro") 
//     ? console.log("Si, el alumno se llama Álvaro")
//     : console.log("No, el alumno no se llama Álvaro")

// let dia = "Lunes";
// let felicidad;

// (dia === "Lunes")
//     ? felicidad = false
//     : felicidad = true;

// console.log(felicidad);

// let numero = 3;

// (numero > 5) ? console.log("si") : console.log("no");

// let edad = 15;

// while(edad < 18){

//     console.log(`Tienes ${edad} años y eres menor......`)
//     edad++;
// }


// console.log(`Tienes ${edad} años y eres mayor de edad......`)

// for(let i = 1; i <= 20; i++){

//     console.log(i);
// }

// const Sumar = (a,b) => {

//     return  a + b;

// }


// let resultado;

// for(let i = 0; i < 3; i++){

//     resultado= Sumar(665,1);
//     console.log(resultado);
// }

// let arrayConsolas = ["Master System", "Game Gear", "Sega Saturn", "MegaCD", "32X", "Dreamcast"];

// console.log(arrayConsolas.length);

// arrayConsolas.push("Playstation");

// console.log(arrayConsolas);

// arrayConsolas.pop();

// console.log(arrayConsolas);

// arrayConsolas.unshift("Nintendo NES");

// console.log(arrayConsolas);

// arrayConsolas.shift();

// console.log(arrayConsolas);

// arrayConsolas.splice(3, 2, "Samsung Saturn");

// console.log(arrayConsolas);

// let arrayConsolasNintendo = ["NES", "SNES", "Virtual Boy", "N64", "GameCube", "Wii"];

// let arrayNinten2 = arrayConsolasNintendo.slice(2,4);

// console.log(arrayNinten2);

// let hobbiesDavid = ["videojuegos", "escalada", "futbol", "informatica"];

// let hobbiesAlvaro = ["senderismo", "musica", "comida", "tecnología"];

// let hobbiesDavidMasAlvaro = hobbiesDavid.concat(hobbiesAlvaro);

// // console.log(hobbiesDavidMasAlvaro);

// let cadenaDelArray= hobbiesAlvaro.toString();
// let cadenaDelArray2 = hobbiesAlvaro.join(" / ");

// console.log(cadenaDelArray2)


// let array1 = [1,2,3,4,5];

// array1.reverse()

// console.log(array1)

// let nombresClase = ["Maxi","Alvaro","Francisco","David"];

// nombresClase.sort()

// console.log(nombresClase.indexOf("Maxi"));

// let arrayJuegos = ["Zelda","Diablo","Final Fantasy","Dark side detective"];

// (arrayJuegos.includes("Dark side detective"))
//     ? console.log("Si lo incluye")
//     : console.log("No lo incluye")


// for(let i = 0; i < arrayJuegos.length; i++){
//     console.log(arrayJuegos[i]);
// }

// let arrayNumeros = [4,6,8,90,678];

// arrayNumeros.forEach(
//     num => {
//         arrayNumeros.push(num * 2)
//     }
// )

// console.log(arrayNumeros);

// let singulares = ["manzana", "platano", "pera", "fresa"];

// let plurales = singulares.map(
//     fruta => {
//         return fruta + "s"
//     }
// )

// console.log(plurales)

// let arrayBebidas = ["zumo de naranja", "baileys", "coca-cola", "vino", "agua"];

// let filtradas = arrayBebidas.filter(
//     bebida =>  bebida != "agua"
// )

// console.log(filtradas)


let arrayComidas = ["Hamburguesa", "Tacos", "Ramen", "Doritos", "Fruta"];

let encontrado = arrayComidas.find(
    objetivo => objetivo == "Verde"
)

console.log(encontrado);

