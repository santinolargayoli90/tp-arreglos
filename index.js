//actividad 1
let jugadores = ["jesus", "valentino", "facu", "juan", "thiago"];
//actividad 2
let puntajes = [];
for (let i = 0; i < 5; i++) {
    let puntaje = Number(prompt(`Ingresa el puntaje de ${jugadores[i]}:`));
    puntajes.push(puntaje);
}
//actividad 3
let jugadorMaxPuntaje
let maxPuntaje  = puntajes[0];

for (let i = 1; i < puntajes.length; i++) {
    if (puntajes[i] > maxPuntaje) {
        maxPuntaje = puntajes[i];
        jugadorMaxPuntaje = jugadores[i];
    }
}
console.log(`El puntaje más alto es ${maxPuntaje} y corresponde a ${jugadorMaxPuntaje}.`);

//actividad 4
let minPuntaje = puntajes[0];
for (let i = 1; i < puntajes.length; i++) {
    if (puntajes[i] < minPuntaje) {
        minPuntaje = puntajes[i];
    }
}
console.log(`El puntaje más bajo es ${minPuntaje}.`);

// 5. Agregar un jugador y su puntaje
const nuevoJugador = prompt('Ingrese el nombre del nuevo jugador:');
const nuevoPuntaje = Number(prompt(`Ingrese el puntaje para ${nuevoJugador}:`));
jugadores.push(nuevoJugador);
puntajes.push(nuevoPuntaje);

// 6. Mostrar en la consola la cantidad de puntajes guardados
console.log(`Cantidad de puntajes guardados: ${puntajes.length}.`);

// 7. Modificar los puntajes de los últimos dos jugadores
if (puntajes.length >= 2) {
    const nuevoPuntaje1 = Number(prompt('Ingrese el nuevo puntaje para el anteúltimo jugador:'));
    const nuevoPuntaje2 = Number(prompt('Ingrese el nuevo puntaje para el último jugador:'));
    puntajes[puntajes.length - 2] = nuevoPuntaje1;
    puntajes[puntajes.length - 1] = nuevoPuntaje2;
} else {
    console.log('No hay suficientes jugadores para modificar.');
}
