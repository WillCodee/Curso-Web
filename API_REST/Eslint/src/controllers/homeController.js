import Aluno from '../models/Aluno'

class HomeController{
  async index(req,res){
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Silva',
      email: 'Mariam@gmail.com',
      idade:20,
      peso: 57,
      altura: 1.6,
    })
    res.json(novoAluno)
  }
}


export default new HomeController()
