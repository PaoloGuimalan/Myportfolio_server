const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
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
const WorkExp = require("./schema/workexp")

const server_app = app.listen(PORT, () => {
    console.log(`Port Running: ${PORT}`)
    connectMongo().then(() => {
        console.log("Database Initialized!");
    }).catch((err) => {
        console.log(err);
    })
});

app.get('/works', (req, res) => {

    ProjectsList.find({}, {title: 1, projectID: 1, image: 1}, (err, result) => {
        if(err){
            console.log(err);
            res.send({ status: false })
        }
        else{
            res.send(result);
            // console.log(result)
        }
    })

})

app.get('/workExp', (req, res) => {
    WorkExp.find({}, (err, result) => {
        if(err){
            console.log(err)
            res.send({ status: false })
        }
        else{
            res.send(result)
        }
    })
})

app.get('/project/:projectID', (req, res) => {

    const projectID = req.params.projectID;

    ProjectsList.findOne({projectID: projectID}, (err, result) => {
        if(err){
            console.log(err);
            res.send({ status: false })
        }
        else{
            res.send(result);
        }
    })

})