import repo from "../repositories/post.repository.js";

export default {

    async getPosts() {
        return await repo.getPosts();
    },

    async createPost(post) {
        await repo.createPost(post);
    },

    async createComentario(comentario) {

        const post = await repo.getPost(comentario.post_id);

        if (!post) {
            throw { name: "ForeignKeyViolationError", message: "Post não encontrado" };
        }

        if (!post.comentarios) {
            post.comentarios = [];
        }

        post.comentarios.push({
            nome: comentario.nome,
            conteudo: comentario.conteudo
        });

        await repo.updatePost(post);
    }
}
