import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Foto from '../models/Foto';

// Models criados.
const models = [Aluno, User, Foto];

// Criação da conexão entre os models criado e a BD.
const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));

// Se algum dos models tiver o método associate, o mesmo é executado na conexão.
models.forEach((model) => model.associate && model.associate(connection.models));
