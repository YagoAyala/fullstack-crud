import express from "express";
import routes from "./routes/users_routes.js"
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors())

app.use("/", routes)

app.listen(8800);