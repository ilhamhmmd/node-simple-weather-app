import { Sequelize } from "sequelize";

const db = new Sequelize('mern_db_basic','root','Linux.root@123', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;