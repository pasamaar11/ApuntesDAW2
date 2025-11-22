var numerosA = new Array(3);
var numerosB = new Array(6);
var mediaA = 0;
var mediaB = 0;


function media(){
    for (let i = 0;i < numerosA.length;i++){
        numerosA[i] = Number(prompt("Escribe 3 numeros"));
        mediaA += numerosA[i];
    }

    for (let j = 0;j < numerosB.length;j++){
        numerosB[j] = Number(prompt("Escribe 6 numeros"));
        mediaB += numerosB[j];
    }

    mediaA = mediaA.toFixed(2) / numerosA.length;
    mediaB = mediaB.toFixed(2) / numerosB.length;

    mediaA = mediaA.toFixed(2);
    mediaB = mediaB.toFixed(2);

    return "Media del primer grupo: " + mediaA 
    + "\n" + "Media del segundo grupo: " + mediaB;
}

alert(media());
