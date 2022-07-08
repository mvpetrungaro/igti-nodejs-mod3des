import Sequelize from "sequelize";

export default new Sequelize(
    process.env.DB_CONN_STRING,
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
);
