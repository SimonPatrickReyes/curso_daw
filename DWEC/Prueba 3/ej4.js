class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre
        this.edad = edad
        this.genero = genero
    }
    getInfo() {
        return `nombre:${this.nombre}, edad: ${this.edad}, genero:${this.genero}`
    }


}

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre,edad,genero)
        this.curso = curso
        this.grupo = grupo
    }
    getInfo() {
        return `nombre:${this.nombre}, edad:${this.edad}, genero:${this.genero}`
    }

    matriculado() {
        return `nombre:${this.nombre}, edad:${this.edad}, genero:${this.genero}, curso:${this.curso}, grupo:${this.grupo}`
    }


}

class Profesor extends Persona {
    constructor(nombre, edad, genero, modulo, nivel) {
        super(nombre,edad,genero)
        this.modulo = modulo
        this.nivel = nivel
    }
    getInfo() {
        return `nombre:${this.nombre}, edad:${this.edad}, genero:${this.genero}`
    }
    imparte() {
            return `nombre:${this.nombre}, edad:${this.edad}, genero:${this.genero}+", modulo:${this.modulo}, nivel:${this.nivel}`
        }


}
const persona1 = new Persona('Raúl', 114, 'Hombre');
const estudiante1 = new Estudiante('Victor', 24, 'Hombre', '2º', 'B');
const profesor1 = new Profesor('Carmen', 19, 'Mujer', 'Impresion digital', 'Grado Medio');

document.write(persona1.getInfo());
document.write("<br>"+estudiante1.getInfo());
document.write("<br>"+profesor1.getInfo());