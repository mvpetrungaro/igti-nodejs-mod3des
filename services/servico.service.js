import repo from "../repositories/servico.repository.js";
import animalRepository from "../repositories/animal.repository.js";

export default {

    async getServicos(proprietario_id) {
        if (proprietario_id) {
            return await repo.getServicosByProprietarioId(proprietario_id);
        } else {
            return await repo.getServicos();
        }
    },

    async getServico(id) {
        return await repo.getServico(id);
    },

    async createServico(servico) {

        const animal = await animalRepository.getAnimal(servico.animal_id);

        if (!animal) {
            throw { name: "ForeignKeyViolationError", message: "Animal não encontrado" };
        }

        return await repo.createServico(servico);
    },

    async updateServico(servico) {

        const animal = await animalRepository.getAnimal(servico.animal_id);

        if (!animal) {
            throw { name: "ForeignKeyViolationError", message: "Animal não encontrado" };
        }
        
        return await repo.updateServico(servico);
    },

    async deleteServico(id) {
        await repo.deleteServico(id);
    }
}
