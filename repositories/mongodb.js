import { MongoClient } from "mongodb";

const getClient = () => new MongoClient(
    process.env.MONGODB_CONN_STRING,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

export { getClient };