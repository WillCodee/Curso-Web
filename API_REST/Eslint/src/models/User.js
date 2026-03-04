import Sequelize, { Model } from 'sequelize'
import bcryptjs from 'bcryptjs'

export default class User extends Model{
  static init(sequelize){
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: { //Campo para validar o nome
          len:{ // Verifica o tamanho
            args:[3,255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          }
        }
      },

      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          isEmail:{
            msg: 'Email já Existe',
          }
        }
      },

      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },

      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: { //Campo para validar o nome
          len:{ // Verifica o tamanho
            args:[6,50],
            msg: 'A senha bprecisa ter entre 6 e 50 caracteres',
          }
        }
      },
      // Criar um campo que não existe na base de dados
      // O Usuario vai digitar a senha e com base nisso vai gerar o hash
    },{
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      user.password_hash = await bcryptjs.hash(user.password,8)
    })

    return this
  }
}
