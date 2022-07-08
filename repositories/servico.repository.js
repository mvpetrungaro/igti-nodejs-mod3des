import Servico from "../models/servico.model.js";
import Animal from "../models/animal.model.js"

export default {

    async getServicos() {
        return await Servico.findAll();
    },

    async getServicosByProprietarioId(proprietario_id) {
        return await Servico.findAll({
            include: [{
                model: Animal,
                attributes: [],
                where: {
                    proprietario_id
                }
            }]
        });
    },

    async getServico(id) {
        return await Servico.findByPk(id);
    },

    async createServico(servico) {
        return await Servico.create(servico);
    },

    async updateServico(servico) {
        try {
                await Servico.update(servico, {
                where: {
                    servico_id: servico.servico_id
                }
            });

            return await this.getServico(servico.servico_id);
        } catch (err) {
            throw err;
        }
    },

    async deleteServico(id) {
        await Servico.destroy({
            where: {
                servico_id: id
            }
        });
    }
}
