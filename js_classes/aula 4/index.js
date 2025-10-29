class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume(){
        this.volume += 2;
    }
    
    //metodo de instancia
    diminuirVolume(){
        this.volume -= 2;
    }

    //metodo estatico
    static trocaPilha() {
        console.log('Ok, trocar pilha'); 
    }
}

const controle1 = new ControleRemoto('lg');