class Carro {
    private modelo: string;
    private ano: number;
    private cor: string;
    
    constructor(
        _modelo: string,
        _ano: number,
        _cor: string,
    ) {
        this.modelo = _modelo;
        this.ano = _ano;
        this.cor =_cor;

    }

// métodos GET e SET (encapsulamento)
public getModelo(): string{ 
        return this.modelo;
    }    
public setModelo(_modelo: string): void{
    this.modelo = _modelo;
}

public getAno(): number{
    return this.ano;
}
public setAno(_ano: number): void{
    this.ano = _ano
}

public getCor(): string{
    return this.cor;
}
public setCor(_cor: string): void{
    this.cor = _cor;
}


    public acelerar(velocidade: number): void {
        console.log(`${this.modelo} está acelerando a ${velocidade} km/h`)
    }

    public ligar(): boolean {
        const numeroAleatorio = Math.random();
        if(numeroAleatorio < 0.5){
            return true;
        } else {
            return false
        }
    }
}
export default Carro;