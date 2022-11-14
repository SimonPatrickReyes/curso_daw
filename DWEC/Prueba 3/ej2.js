const lanzamientos = {
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0
}
function lanzarDados() {
    for (let i = 0; i <= 36000; i++) {
        var dado1 = Math.round(Math.random() * 5) + 1;
        var dado2 = Math.round(Math.random() * 5) + 1;

        var resultado = dado1 + dado2

        lanzamientos[resultado] += 1
    }
    for (const [j,k] of Object.entries(lanzamientos)) {
        document.write('<br> Veces que el total de ambos dados ha sido ' + j + ' : ' + k)
    }
}


/*function lanzarDados() {
    for (let i = 0; i < 100; i++) {
    var dado1=Math.round(Math.random()*5)+1
    var dado2=Math.round(Math.random()*5)+1
    
    var resultado=(dado1+dado2)

    var lanzamientos=new Array;
    lanzamientos.push(resultado)
    }
    return(lanzamientos)
}

document.write(lanzarDados());*/