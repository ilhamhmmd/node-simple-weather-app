import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import db from "./config/Database.js";

const app = express();
const port = 5000;

try {
    db.authenticate();
    // db.sync();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.use(cors());
app.use(express.json());

app.use(UserRoute);

app.listen(port, ()=> {
    console.log(`Server up and running on port ${port}`);
});