//Crear una clase padre
//crear una clase que herede de la clase padre
//Ambas clases deben de tener al menos dos metodos
//Deben recibir objetos (clases)
    //Los objetos recibidos deben tener otro objeto como propiedad

//clase padre
class videojuego {
    constructor(titulo, genero){
        this.titulo = titulo;
        this.genero = genero; 
    }

    repro(){
        console.log(`Demo de "${this.titulo}" - ${this.genero}`);
    }

    jugar(jugador){
        console.log(`${jugador.nombre} esta jugando a "${this.titulo}`)
    }
}

//clase hijo
class RPG extends videojuego {
    constructor(titulo, genero, mundo){
        super(titulo, genero);
        this.mundo = mundo;
    }

    explorar(personaje){
        console.log(`${personaje.nombre} explora el mundo ${this.mundo}`)
    }   
    
    muerte(personaje){
        console.log(`${personaje.nombre} fue asesinado por Tidus`)
    }  
}

class Jugador{
    constructor(nombre){
        this.nombre = nombre;
    }
}

class Personaje{
    constructor(nombre){
        this.nombre = nombre;
    }
}

const jugador1 = new Jugador('Emmanuel');
const RPGpersonaje = new RPG('Dark Souls III', 'RPG', 'Road of Sacrifices');
const character = new Personaje('Squall Leonhart');

RPGpersonaje.repro();
RPGpersonaje.jugar(jugador1);
RPGpersonaje.explorar(character);
RPGpersonaje.muerte(character);
