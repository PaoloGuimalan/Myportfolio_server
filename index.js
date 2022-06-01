const express = require("express");
const app = express();
const PORT = 3001 || process.env.PORT;
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const connectionMongo = require("./connections/connections");

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200
}))

async function connectMongo(){
    return mongoose.connect(connectionMongo.url, connectionMongo.params)
}

const ProjectsList = require("./schema/projects");

const server_app = app.listen(PORT, () => {
    console.log(`Port Running: ${PORT}`)
    connectMongo().then(() => {
        console.log("Database Initialized!");
    }).catch((err) => {
        console.log(err);
    })
});

app.get('/works', (req, res) => {

    ProjectsList.find((err, result) => {
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })

})