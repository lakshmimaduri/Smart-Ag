var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
const saltRounds = 10;
let mongoose = require('mongoose');
//load all Models
var Node = require("../models/node");
//require User model
var Node = mongoose.model("Node");

router.get("/", (req, res)=>{
    console.log("******* INSIDE GET All Nodes Route! ***********");
    Node.find()
    .then((result)=>{
        console.log('All Nodes:-->', result);
        res.status(200).json({message:"success!", allNodes: result});
    })
});

router.get("/:nodeId", (req, res)=>{
    console.log("******* INSIDE GET Each Node Route! ***********");
    let nodeId = Number(req.params.nodeId);
    Node.find({ID: nodeId})
    .then((result)=>{
        console.log('Get Each Node:-->', result[0]);
        res.status(200).json({message:"success!", eachNode: result[0]});
    })
});

router.get("/", (req, res)=>{
    console.log("******* INSIDE POST Node Route! ***********");
    let nodeId = Number(req.params.nodeId);
    Node.find({ID: nodeId})
    .then((result)=>{
        console.log('Get Each Node:-->', result[0]);
        res.status(200).json({message:"success!", eachNode: result[0]});
    })
});

module.exports = router;