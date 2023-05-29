const express = require("express");
const db = require("./config/connection");
//const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
//app.use(routes);

StartApp();

async function StartApp() {
    const dbConn = await db.once("open", async () => {
        const appInst = await app.listen(PORT);

        console.log(`App Listening on ${PORT}`);
    });
}