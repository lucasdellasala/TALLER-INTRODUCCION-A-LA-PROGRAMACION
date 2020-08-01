var team1 = ["Lucas", "Matías", "Nicolás", "Gianella", "Heidy", "Nicodav"];

function armarEquipos(lista){
    if(lista.length==4 || lista.length==6){
        //Mezclar la lista
        for(var i = lista.length-1; i>0 ; i--){
            var j = Math.floor(Math.random() * (i+1));
            var temporal;
            temporal = lista[i];
            lista[i] = lista[j];
            lista[j] = temporal;
        }
        //Armar los equipos
        var equipo1 = "Eq1: " + lista[0] + " " + lista[2] + " " + lista[4];
        var equipo2 = "Eq2: " + lista[1] + " " + lista[3]+ " " + lista[5];
        console.log(equipo1);
        console.log(equipo2);
    } else {
        console.log("Necesitas tener 4 o 6 personas para armar los equipos.");
    }
}

armarEquipos(team1);



