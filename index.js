import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import WeatherRoute from "./routes/WeatherRoute.js";
import db from "./config/Database.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = 5000;

try {
    // db.authenticate();
    db.sync();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.use(cookieParser());
app.use(cors({credentials: true, origin:'http://localhost:3000'}));
// app.use(cors());
app.use(express.json());

app.use(UserRoute);
app.use(WeatherRoute);

app.listen(port, ()=> {
    console.log(`Server up and running on port ${port}`);
});