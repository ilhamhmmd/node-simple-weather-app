import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users', {
    // name: DataTypes.STRING,
    name: {
        type: DataTypes.STRING(50)
    },
    username: {
        type: DataTypes.STRING(80)
    },
    gender: {
        type: DataTypes.STRING(10)
    },
    password: {
        type: DataTypes.STRING
    },
    refresh_token: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true
});

export default User;