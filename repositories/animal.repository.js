import Animal from "../models/animal.model.js";

export default {

    async getAnimais() {
        return await Animal.findAll();
    },

    async getAnimaisByProprietarioId(proprietario_id) {
        return await Animal.findAll({
            where: {
                proprietario_id
            }
        });
    },

    async getAnimal(id) {
        return await Animal.findByPk(id);
    },

    async createAnimal(animal) {
        return await Animal.create(animal);
    },

    async updateAnimal(animal) {
        try {
                await Animal.update(animal, {
                where: {
                    animal_id: animal.animal_id
                }
            });

            return await this.getAnimal(animal.animal_id);
        } catch (err) {
            throw err;
        }
    },

    async deleteAnimal(id) {
        await Animal.destroy({
            where: {
                animal_id: id
            }
        });
    }
}
