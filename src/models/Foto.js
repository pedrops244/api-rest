import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/app.Config';

export default class Foto extends Model {
  static init(sequelize) {
    // Validação dos dados enviados.
    super.init({
      // Chave originalname não pode ser vazia.
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio',
          },
        },
      },
      // Chave filename não pode ser vazia.
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`;
        },
      },

    }, {
      sequelize,
      tableName: 'fotos',
    });
    return this;
  }

  // Método estático que associa este model(Foto) ao model Aluno, por meio da foreignKey 'aluno_id'.
  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
