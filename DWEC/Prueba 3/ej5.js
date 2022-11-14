class Persona {
    constructor(id, nombre, apellidos, fecha_nacimiento) {
        this.id = id
        this.nombre = nombre
        this.apellidos = apellidos
        this.fecha_nacimiento = fecha_nacimiento
    }
    concentrarse() {
    }
    getInfo() {
        return `id:${this.id}, nombre:${this.nombre}, apellidos:${this.apellidos}, fecha_nacimiento:${this.fecha_nacimiento}`
    }
}

class CEO extends Persona {
    constructor(id, nombre, apellidos, fecha_nacimiento, jefes_asignados) {
        super(id, nombre, apellidos, fecha_nacimiento)
        this.jefes_asignados = jefes_asignados

    }
    viajar() { }
    añadir_jefes() { }
    dirigir_jefes() { }
    getInfo() {
        return `id:${this.id}, nombre:${this.nombre}, apellidos:${this.apellidos}, fecha_nacimiento:${this.fecha_nacimiento}, jefes_asignados:${this.jefes_asignados}`
    }
}

class Jefe extends Persona {
    constructor(id, nombre, apellidos, fecha_nacimiento, dpto_responsable, equipo) {
        super(id, nombre, apellidos, fecha_nacimiento)
        this.dpto_responsable = dpto_responsable
        this.equipo = equipo

    }
    añadir_al_equipo() { }
    reunirse_con_equipo() { }
    getInfo() {
        return `id:${this.id}, nombre:${this.nombre}, apellidos:${this.apellidos}, fecha_nacimiento:${this.fecha_nacimiento}, dpto_responsable:${this.dpto_responsable}, equipo:${this.equipo}`
    }
}

class Programador extends Persona {
    constructor(id, nombre, apellidos, fecha_nacimiento, titulacion, experiencia) {
        super(id, nombre, apellidos, fecha_nacimiento)
        this.titulacion = titulacion
        this.experiencia = experiencia

    }
    programar() { }
    getInfo() {
        return `id:${this.id}, nombre:${this.nombre}, apellidos:${this.apellidos}, fecha_nacimiento:${this.fecha_nacimiento}, titulacion:${this.titulacion}, experiencia:${this.experiencia}`
    }
}

const persona1 = new Persona('01', 'Raul', 'Rodriguez', '05-09-2000');
const CEO1 = new CEO('02', 'Carmen', 'De Mairena', '07-12-1200', '4');
const Jefe1 = new Jefe('03', 'Joselu', 'Martinez', '24-03-2001', 'Marketing', 'Equipo 1');
const Programador1 = new Programador('04', 'Esperanza', 'Aguirre', '24-03-1821', 'Técnica de BackEnd', 'Nula');

document.write(persona1.getInfo());
document.write("<br>" + CEO1.getInfo());
document.write("<br>" + Jefe1.getInfo());
document.write("<br>" + Programador1.getInfo());