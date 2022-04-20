import Weather from "../models/WeatherModel.js";

export const getWeather = async (req, res) => {
    try {
        const response = await Weather.findAll({
            attributes: ['id', 'lat', 'lon', 'timezone', 'createdAt']
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(`Terjadi kesalahan : ${error.message}`);
    }
}

export const getWeatherById = async (req, res) => {
    try {
        const response = await Weather.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(`Terjadi kesalahan : ${error.message}`);
    }
}

export const createWeather = async (req, res) => {
    try {
        await Weather.create(req.body);
        res.status(201).json({
            msg: "Weather succesfully created"
        });
    } catch (error) {
        console.log(`Terjadi kesalahan : ${error.message}`);
        res.status(500).json({
            msg: error
        });
    }
}

export const updateWeather = async (req, res) => {
    try {
        await Weather.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            msg: "Weather succesfully updated"
        });
    } catch (error) {
        console.log(`Terjadi kesalahan : ${error.message}`);
    }
}

export const deleteWeather = async (req, res) => {
    try {
        await Weather.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            msg: "Weather succesfully deleted"
        });
    } catch (error) {
        console.log(`Terjadi kesalahan : ${error.message}`);
    }
}