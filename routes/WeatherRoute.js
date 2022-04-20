import express from "express";
import { 
    getWeather, getWeatherById, createWeather, updateWeather, deleteWeather
} from "../controllers/WeatherController.js";

const weatherRouter = express.Router();

weatherRouter.get('/weathers', getWeather);
weatherRouter.get('/weather/:id', getWeatherById);
weatherRouter.post('/weather', createWeather);
weatherRouter.patch('/weather/:id', updateWeather);
weatherRouter.delete('/weather/:id', deleteWeather);

export default weatherRouter;