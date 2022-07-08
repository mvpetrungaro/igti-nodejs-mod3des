import Proprietario from "../models/proprietario.model.js";

export default {

    async getProprietarios() {
        return await Proprietario.findAll();
    },

    async getProprietario(id) {
        return await Proprietario.findByPk(id);
    },

    async createProprietario(proprietario) {
        return await Proprietario.create(proprietario);
    },

    async updateProprietario(proprietario) {
        await Proprietario.update(proprietario, {
            where: {
                proprietario_id: proprietario.proprietario_id
            }
        });

        return await this.getProprietario(proprietario.proprietario_id);
    },

    async deleteProprietario(id) {
        await Proprietario.destroy({
            where: {
                proprietario_id: id
            }
        });
    }
}
