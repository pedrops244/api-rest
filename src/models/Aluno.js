import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    // Validação dos dados enviados.
    super.init({
      // Chave nome precisa ter entre 3 e 255 caracteres e caso nao seja envia a msg de erro.
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres',
          },
        },
      },
      // Chave sobrenome precisa ter entre 3 e 255 caracteres e caso nao seja envia a msg de erro.
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa ter entre 3 e 255 caracteres',
          },
        },
      },
      // Chave email precisa ser única e válida e caso não seja envia a msg de erro.
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já existe.',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido!',
          },
        },
      },
      // Chave idade precisa ser um número inteiro e caso nao seja envia a msg de erro.
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número inteiro!',
          },
        },
      },
      // Chave peso precisa ser um número inteiro ou de ponto flutuante e caso nao seja envia a msg de erro.
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um número inteiro ou de ponto flutuante!',
          },
        },
      },
      // Chave altura precisa ser um número inteiro ou de ponto flutuante e caso nao seja envia a msg de erro.
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Altura precisa ser um número inteiro ou de ponto flutuante!',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  // Método estático que associa este model(Aluno) ao model Foto, por meio da foreignKey 'aluno_id'.
  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}
