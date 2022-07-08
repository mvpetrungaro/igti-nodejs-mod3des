import serv from "../services/servico.service.js";

export default {

    async getServicos(req, res, next) {
        try {
            const servicos = await serv.getServicos(req.query.proprietario_id);
            res.send(servicos);
        } catch(err) {
            next(err);
        }
    },

    async getServico(req, res, next) {
        try {
            let id = req.params.id;

            const servico = await serv.getServico(id);
            res.send(servico);
        } catch(err) {
            next(err);
        }
    },

    async createServico(req, res, next) {
        try {
            let servico = req.body;

            if (!servico.descricao || !servico.valor || !servico.animal_id) {
                res.status(400);
                throw new Error("Descrição, Valor e Animal ID são obrigatórios");
            }

            try {
                servico = await serv.createServico(servico);
                res.send(servico);
            } catch (err) {
                if (err.name == "ForeignKeyViolationError") {
                    res.status(400);
                }

                throw err;
            }
        } catch(err) {
            next(err);
        }
    },

    async updateServico(req, res, next) {
        try {
            let servico = req.body;

            if (!servico.descricao || !servico.valor || !servico.animal_id || !servico.servico_id) {
                res.status(400);
                throw new Error("Descrição, Valor, Animal ID e Serviço ID são obrigatórios");
            }

            try {
                servico = await serv.updateServico(servico);
                res.send(servico);
            } catch (err) {
                if (err.name == "ForeignKeyViolationError") {
                    res.status(400);
                }

                throw err;
            }
        } catch(err) {
            next(err);
        }
    },

    async deleteServico(req, res, next) {
        try {
            let id = req.params.id;

            await serv.deleteServico(id);
            res.end();
        } catch(err) {
            next(err);
        }
    }
}