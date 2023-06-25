import "dotenv/config";
import express from "express";
import mainPageRouter from "./routes/mainPageRoutes";
import towerRouter from "./routes/towerRoutes";

const app = express();
const port = process.env.APP_PORT;

app.use(express.json());

app.get("/", mainPageRouter);
app.get("/tower", towerRouter);

app.listen(port, () => {
    console.log(`running on ${port}`);
})
