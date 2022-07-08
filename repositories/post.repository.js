import { ObjectId } from "mongodb";
import { getClient } from "./mongodb.js";

export default {

    async getPosts() {

        const client = getClient();

        try {

            await client.connect();
            
            return await client.db("igti").collection("posts").find().toArray();
        } catch (err) {

            throw err;
        } finally {

            await client.close();
        }
    },

    async getPost(id) {

        const client = getClient();

        try {

            await client.connect();
            
            return await client.db("igti").collection("posts").findOne({
                _id: ObjectId(id)
            });
        } catch (err) {

            throw err;
        } finally {

            await client.close();
        }
    },

    async createPost(post) {

        const client = getClient();

        try {

            await client.connect();

            await client.db("igti").collection("posts").insertOne(post);
        } catch (err) {

            throw err;
        } finally {

            await client.close();
        }
    },

    async updatePost(post) {

        const client = getClient();

        try {

            await client.connect();

            await client.db("igti").collection("posts").updateOne({
                _id: ObjectId(post._id)
            }, {
                $set: {...post}
            });
        } catch (err) {

            throw err;
        } finally {

            await client.close();
        }
    }
};