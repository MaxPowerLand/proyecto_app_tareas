const fs = require("fs");

let datajson = fs.readFileSync("./data/tareas.json");

let json = JSON.parse(datajson);


function listar () {
console.log('Listado de Tareas');
console.log('-------------------')
    json.forEach((element, i) => { 
    console.log(`${i + 1}. ${element.titulo} - ${element.estado}`)
});
}

switch (process.argv[2]) {
    case `listar`:
        listar();
        break;
    case undefined:
        console.log('Atenciòn - Tienes que pasar una acciòn \nLas acciones disponibles son listar \n----------------------------------');
        break;
    default :
        console.log('No Entiendo què quieres hacer \nLas acciones disponibles son: listar\n------------------------------------------');
}