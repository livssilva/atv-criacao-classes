import Carro from "./Carro.js";

let carro1: Carro = new Carro("Ford Mustand", 1975, "Preto");

let ligado: boolean = carro1.ligar();

if(ligado){
    carro1.acelerar(200);
}else{
    console.log(`O carro não está ligado`)
}