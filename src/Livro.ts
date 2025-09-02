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

    public ler(): void{
        console.log(`O nome do livro é "${this.titulo}" do autor ${this.autor} e tem ${this.paginas} páginas.`)
    }

    public exibirDetalhes(): void {
        console.log(`Romeu e Julieta representa um dos maiores clássicos da literatura mundial e uma das obras mais emblemáticas de Shakespeare.`)
    }

  }
  export default Livro;