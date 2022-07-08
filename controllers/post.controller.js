import serv from "../services/post.service.js";

export default {

    async getPosts(req, res, next) {
        try {
            const posts = await serv.getPosts();
            res.send(posts);
        } catch(err) {
            next(err);
        }
    },

    async createPost(req, res, next) {
        try {
            let post = req.body;

            if (!post.titulo || !post.conteudo) {
                res.status(400);
                throw new Error("Título e Conteúdo são obrigatórios");
            }

            await serv.createPost(post);
            res.end();
        } catch(err) {
            next(err);
        }
    },

    async createComentario(req, res, next) {
        try {
            let comentario = req.body;

            if (!comentario.nome || !comentario.conteudo || !comentario.post_id) {
                res.status(400);
                throw new Error("Nome, Conteúdo e Post ID são obrigatórios");
            }

            try {
                await serv.createComentario(comentario)
                res.end();
            } catch (err) {
                if (err.name == "ForeignKeyViolationError") {
                    res.status(400);
                }

                throw err;
            }
        } catch(err) {
            next(err);
        }
    }
}