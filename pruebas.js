const apellidos = [
    "Aniston",
    "Cox",
    "Buffay",
    "Perry",
    "LeBlanc",
    "Schwimmer"
]
const indiceDePerry = apellidos.findIndex(apellido => apellido === "Perry")
console.log(indiceDePerry)

const peliculas = [
    { id: 1, nombre: "Thor" },
    { id: 2, nombre: "Ant-Man" },
    { id: 3, nombre: "Terminator" },
    { id: 4, nombre: "Ip Man" },
    { id: 5, nombre: "Rocky" },
]
peliculas.forEach(z => console.log(z))
const buscarpelicula = peliculas.findIndex(pelicula => pelicula.id === 3)
console.log(buscarpelicula)

console.log(peliculas[buscarpelicula].nombre)

const estaciones = ["Verano", "Otoño", "Invierno", "Primavera"];
estaciones.forEach(x => console.log(x)) /* con arrow functions */
estaciones.forEach(function (x) { console.log(x) }) /* con función anónima
*/

const valores = [200, 100, 500, 300, 250]
const nuevos_valores = valores.map(x => 2 * x)
console.log(nuevos_valores) /* [400, 200, 1000, 600, 500]*/

let trabajadores = [
    { nombre: "Contanza", cargo: "Chef" },
    { nombre: "Luis", cargo: "garzón" },
    { nombre: "Estefany", cargo: "Administradora" },
    { nombre: "Andrés", cargo: "Recepcionista" },
    { nombre: "Pedro", cargo: "garzón" },
    { nombre: "Felipe", cargo: "Aseo" },
    { nombre: "Maria", cargo: "garzón" },
    { nombre: "Diego", cargo: "garzón" },
]

const garzones = trabajadores.filter(garzon => garzon.cargo == "garzón")
console.log(garzones)

console.log(garzones.length)

const autosCompactos = [
    { marca: 'Toyota', modelo: 'Corolla', combustible: 'Gasolina' },
    { marca: 'Mazda', modelo: '3', combustible: 'Gasolina' },
    { marca: 'Honda', modelo: 'Civic', combustible: 'Gasolina' },
    { marca: 'Bmw', modelo: '116d', combustible: 'Diesel' },
];
const autosDeportivos = [
    { marca: 'Opel', modelo: 'Astra OPC', combustible: 'Gasolina' },
    { marca: 'Renault', modelo: 'Megane RS', combustible: 'Gasolina' },
    { marca: 'Mitsubishi', modelo: 'Lancer Evo', combustible: 'Gasolina' },
];
const autos = autosCompactos.concat(autosDeportivos);
console.log(autos);

const estudiantes = [
    { nombre: "Juan", nota: 3.4 },
    { nombre: "Laura", nota: 6 },
    { nombre: "Katherine", nota: 4.3 },
    { nombre: "Jonathan", nota: 5.4 }
];
const estudiantesOrdenado = estudiantes.sort((x, y) => y.nota - x.nota)
console.table(estudiantesOrdenado)