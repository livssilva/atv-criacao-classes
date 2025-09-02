class Livro{
    private titulo: string;
    private autor: string;
    private paginas: number;

constructor(
         _titulo: string,
        _autor: string,
        _paginas: number,

    ) {
        this.titulo = _titulo;
        this.autor = _autor;
        this.paginas = _paginas;
    }  

public getTitulo(): string{ 
        return this.titulo;
    }    
public setTitulo(_titulo: string): void{
    this.titulo = _titulo;
}

public getAutor(): string{
    return this.autor;
}
public setAutor(_autor: string){
    this.autor = _autor;
}

public getPaginas(): number{
    return this.paginas;
}
public setPaginas(_paginas: number){
    this.paginas = _paginas;
}


public ler(): void{
        console.log(`O nome do livro é "${this.titulo}" do autor ${this.autor} e tem ${this.paginas} páginas.`)
    }

public exibirDetalhes(): void {
        console.log(`Romeu e Julieta representa um dos maiores clássicos da literatura mundial e uma das obras mais emblemáticas de Shakespeare.`)
    }
}
  export default Livro;