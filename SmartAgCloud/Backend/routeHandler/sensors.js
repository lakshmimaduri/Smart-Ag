var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
const saltRounds = 10;
let mongoose = require('mongoose');
//load all Models
var Sensor = require("../models/sensor");
//require User model
var Sensor = mongoose.model("Sensor");

router.get("/", (req, res)=>{
    console.log("******* INSIDE GET All Sensors Farmer Route! ***********");
    Sensor.find({farmerID:1})
    .then((result)=>{
        console.log('All Nodes:-->', result);
        res.status(200).json({message:"success!", allFarmerSensors: result});
    })
});

router.get("/:sensorId", (req, res)=>{
    console.log("******* INSIDE GET Each Node Route! ***********");
    let sensorId = Number(req.params.sensorId);
    Sensor.find({ID: sensorId})
    .then((result)=>{
        console.log('Get Each Sensor:-->', result[0]);
        res.status(200).json({message:"success!", eachSensor: result[0]});
    })
});

module.exports = router;