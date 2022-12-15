//Callbacks

const paises=["Francia","España","Portugal"];

let hora=Date.now(); 

function mostrarPaises() {
    setTimeout(()=>{
        console.log(hora);
    },1000);
}

mostrarPaises();