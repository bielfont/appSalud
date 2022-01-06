

class Bascula{
    constructor(){
        this.peso = []
        this.altura = []
        this.fecha = []
        this.anotacion = 0
     
    }
    obtenerNumeroAnotaciones(){
        console.log( this.anotaciones );
    


    }
    anotarPeso(peso, altura){
        this.anotacion +=1; //sumamos 1 a cada anotacion
        this.fecha.push(new Date()); // ingresamos fecha actual
        this.peso.push(peso);
        this.altura.push(altura);
        

    }
    obtenerPesoMaximo(){
        return Math.max(...this.peso);

    }
    obtenerPesoMinimo(){
        return Math.min(...this.peso);

    }
    calcularIMC(){
        let imc = this.peso[this.peso.length-1]/(this.altura[this.altura.length-1]*this.altura[this.altura.length-1]); // calculamos imc de la ultima anotacion
        return imc;

    }
    describirIMC(imc){ //comparadores peso
        if (imc < 16  ) return "Delgado Severo";
        if (imc < 17 && imc > 16 ) return "Delgado Moderado";
        if (imc < 18.5 && imc > 16) return "Delgado Normal";
        if (imc < 25 && imc > 18.5 ) return "Normal";
        if (imc < 30 && imc > 25) return "Sobrepeso";
        if (imc < 35 && imc > 30) return "Obeso I";
        if (imc < 40 && imc > 35) return "Obeso II";
        if (imc > 40 ) return "Obeso III";
        
    }
    
}

nota = new Bascula();
nota.anotarPeso(73,1.66);
nota.anotarPeso(63,1.36);
nota.anotarPeso(83,1.86);

//max = nota.obtenerPesoMaximo();
//min = nota.obtenerPesoMinimo();
//imc = nota.calcularIMC();
//imc2 = nota.describirIMC(imc);

//console.log(nota);
//console.log(max);
//console.log(min);
//console.log(imc);
//console.log(imc2);



class Paciente{
    constructor(){
        this.nombre = ["nom1"]
        this.apellido = ["apell1"]
        this.fecha = ["1/1/87"]
        
        
     
    }
    saludar(){
        console.log ('Hola ' + this.nombre);

    }
    obtenerNombre(){
        console.log(this.nombre);
        
    }
    modificarNombre(newnombre){
        console.log('Nombre Anterior ' + this.nombre);
        this.nombre.splice(0, 1, newnombre);
        console.log('Nombre Modificado ' + this.nombre);

        

    }
    obtenerApellidos(){
        console.log(this.apellido);

    }
    modificarApellidos(newapellido){
        console.log('Apellido Anterior ' + this.apellido);
        this.apellido.splice(0, 1, newapellido);
        console.log('Apellido Modificado ' + this.apellido);

    }
    obtenerFechaNacimiento(){
        console.log(this.fecha);

    }
    modificarFechaNacimiento(newfecha){
        console.log('Fecha Anterior ' + this.fecha);
        //console.log('Nueva Fecha ' + newfecha);
        this.fecha.splice(0, 1, newfecha);
        console.log('Fecha Modificada ' + this.fecha);

    }
    obtenerEdad(){
        //let edad = (this.fecha) - Date();
        //console.log ('Fecha Actual' + new Date());
        //console.log (' Fecha Nacimiento ' + this.fecha);
        //console.log (' Edad ' + edad);

        var hoy = new Date();
        var cumpleanos = new Date(this.fecha);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();

        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
            }

    console.log (edad);



    }
    modificarBascula(bascula){

    }
    obtenerBascula(){

    }
    calcularIMC(){

    }
}


//cliente = new Paciente();
//cliente.saludar();
//cliente.obtenerNombre();
//cliente.modificarNombre("Biel");
//cliente.obtenerApellidos();
//cliente.modificarApellidos("Font");
//cliente.obtenerFechaNacimiento();
//cliente.modificarFechaNacimiento('1/1/1986');
//cliente.obtenerEdad();




