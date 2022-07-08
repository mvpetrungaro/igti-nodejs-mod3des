import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Proprietario from "./proprietario.model.js";

const Animal = db.define('animais', {
    animal_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false
    }
}/*, { underscored: true }*/);

Animal.belongsTo(Proprietario, { foreignKey: 'proprietario_id' });

export default Animal;