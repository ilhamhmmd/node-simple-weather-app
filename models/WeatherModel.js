import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Weather = db.define('weathers', {
    lat: {
        type: DataTypes.STRING(50)
    },
    lon: {
        type: DataTypes.STRING(50)
    },
    timezone: {
        type: DataTypes.STRING(80)
    }
}, {
    freezeTableName: true
});

export default Weather;