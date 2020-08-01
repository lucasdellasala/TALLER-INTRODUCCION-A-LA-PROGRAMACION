var prompt = require('prompt');
var aE = require("./armarEquipos");

var jugadores = [];

prompt.start();
prompt.get(["p1","p2","p3","p4","p5","p6"], function (err, result) {
    
    if(result.p1 != ""){
        jugadores.push(result.p1);
    };
    if(result.p2 != ""){
        jugadores.push(result.p2);
    }
    if(result.p3 != ""){
        jugadores.push(result.p3);
    }
    if(result.p4 != ""){
        jugadores.push(result.p4);
    }
    if(result.p5 != ""){
        jugadores.push(result.p5);
    }
    if(result.p6 != ""){
        jugadores.push(result.p6);
    }

    console.log("Cantidad de jugadores: " + jugadores.length);

    aE.armarEquipos(jugadores);
});


