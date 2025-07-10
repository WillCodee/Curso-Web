let proxID = 0;

class Livro{
    constructor(titulo,autor,ano){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.ID = proxID++
        this.status = 'disponivel'
    }
}

class Biblioteca{
    constructor(){
        this.livros=[]
    }

    adicionarLivro(titulo,autor,ano){
        const novoLivro = new Livro(titulo,autor,ano)
        

        const duplicatas = this.livros.find(livro => livro.autor === autor && livro.titulo === titulo)
        if(duplicatas){
            console.log('Já existe esse livro cadastrado na biblioteca.')
        }else{
            this.livros.push(novoLivro)
            console.log('Livro cadastrado na biblioteca.')
        }
    }

    emprestarLivro(titulo){
        const emprestimo = this.livros.find(livro => livro.status === 'disponivel' && livro.titulo === titulo)
        //.find() é usado em arrays para procurar o primeiro elemento que satisfaça uma determinada condição
        if(!emprestimo){
            console.log(`${titulo} não Disponivel`)
        }else{
            console.log(`${titulo} Disponivel para emprestimo. Emprestimo Realizado`)
            const livroSelecionado = emprestimo
            livroSelecionado.status = 'indisponivel'
        }
    }

    devolverLivro(titulo){
        const devolução = this.livros.find(livro => livro.status === 'indisponivel' && livro.titulo === titulo)
        if(!devolução){
            console.log(`Não foi Realizado Emprestimo com o Livro:"${titulo}". Livro Disponivel`)
        }else{
            console.log(`Devolução Realizada com Sucesso!`)
            const livroSelecionado = devolução
            livroSelecionado.status = 'disponivel'
        }
    }

    listaLivrosDisponiveis(){
        const LivrosDisponiveis = this.livros.filter(livro => livro.status === 'disponivel')
        console.log(LivrosDisponiveis)
    }

    listaLivrosIndisponiveis(){
        const LivrosIndisponiveis = this.livros.filter(livro => livro.status === 'indisponivel')
        console.log(LivrosIndisponiveis)
    }
}
//Criando a variavel que recebe os elementos da Classe Biblioteca
const minhaBiblioteca = new Biblioteca()

//Adicionando Livros Listas
minhaBiblioteca.adicionarLivro('Sherlock','Arthur Conan Doyle',1880)
minhaBiblioteca.adicionarLivro('1984','George Owell',1984)
minhaBiblioteca.adicionarLivro('Guerras Secretas','Marvel',1990)

//Emprestimo de Livros
minhaBiblioteca.emprestarLivro('1984')
console.log(minhaBiblioteca.livros)
minhaBiblioteca.emprestarLivro('1984')

//Devolução de Livros
minhaBiblioteca.devolverLivro('1984')
minhaBiblioteca.devolverLivro('Sherlock')

minhaBiblioteca.emprestarLivro('Guerras Secretas')

//Lista de Livros Disponiveis e Indisponivei
minhaBiblioteca.listaLivrosDisponiveis()
minhaBiblioteca.listaLivrosIndisponiveis()

minhaBiblioteca.adicionarLivro('Sherlock','Arthur Conan Doyle',1880)