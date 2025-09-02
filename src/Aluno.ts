class Aluno{
    // atributos
    private nome: string;
    private matricula: number;
    private curso: string;

    constructor(
         _nome: string,
        _matricula: number,
        _curso: string,
    ) {
        this.nome = _nome;
        this.matricula = _matricula;
        this.curso = _curso;
    }  

public getNome(): string{ 
        return this.nome;
    }    
public setNome(_nome: string): void{
    this.nome = _nome;
}

public getMatricula(): number{
    return this.matricula;
}
public setMatricula(_matricula: number){
    this.matricula = _matricula;
}

public getCurso (): string{
    return this.curso;
}
public setCurso(_curso: string){
    this.curso = _curso;
}

    // método
    public estudar(materia: string): void{
        console.log(`O aluno ${this.nome} está estudando sobre ${materia}.`)
    }

    public entregarAtividade(): void{
        console.log(`O aluno ${this.nome} entregou a atividade.`)
    }
}

export default Aluno;