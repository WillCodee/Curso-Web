import Sequelize, { Model } from 'sequelize'

export default class Aluno extends Model{
  static init(sequelize){
    super.init({
      nome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      email: Sequelize.STRING,
      idade: Sequelize.STRING,
      peso: Sequelize.FLOAT,
      altura: Sequelize.FLOAT,
    },{
      sequelize,
    });
    return this
  }
}
