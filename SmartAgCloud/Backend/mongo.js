//Connecting to mongodb

var mongoose = require('mongoose');
//var env = process.env.NODE_ENV || "development";
var env = "development";
var config = require('./configDB/mongo')[env];

module.exports = () => {
    //var envUrl = proccess.env[config.use_env_variable];
    var localUrl = `mongodb://${config.host}/${config.database}`;
    //var mongoUrl = envUrl ? envUrl : localUrl;
    var mongoUrl = localUrl;
    return mongoose.connect(mongoUrl);
};