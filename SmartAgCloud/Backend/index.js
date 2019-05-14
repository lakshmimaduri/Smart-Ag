//USERS
var Users = [
  {
    username: "user1",
    password: "pass1",
    email: "user1@smartag",
    userType: "farmer",
    img: "https://previews.123rf.com/images/hermandesign2015/hermandesign20151706/hermandesign2015170600062/79452046-cartoon-young-farmer-holding-rake.jpg"
  },
  {
    username: "user2",
    password: "pass2",
    email: "user2@smartag",
    userType: "farmer",
    img: "https://fscomps.fotosearch.com/compc/CSP/CSP747/cartoon-farmer-holding-a-rake-clipart__k25862630.jpg"
  },
  {
    username: "user3",
    password: "pass3",
    email: "user3@smartag",
    userType: "farmer",
    img:"https://91b6be3bd2294a24b7b5-da4c182123f5956a3d22aa43eb816232.ssl.cf1.rackcdn.com/contentItem-1595389-8065286-7n6suyy1y3mwo-or.png"
  },
  {
    username: "user7",
    password: "pass7" ,
    email: "user7@smartag.com",
    userType: "iot_support",
    img: "https://previews.123rf.com/images/lawangdesign/lawangdesign1608/lawangdesign160800009/63132421-cartoon-young-farmer-holding-rake.jpg"
  },
  {
    username: "user10",
    password: "pass10" ,
    email: "user10@smartag.com",
    userType: "infrastructure_manager",
    img:"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX24560947.jpg"
  }
];

//SENSORS
var Sensors = [
  {
    sensorType: "",
    status: "on",
    x_coordinate: 37.3229,
    y_coordinate: -122.0321,
    data: {
        //timestamp: ISODate(),
        type: "g/m3",
        value: 12.23
      },
    farmerID: 1,
    //farmerID: {type: Schema.Types.ObjectId},
    nodeID: 1,
    ID: 1,
    sensor_desc:"sensor1 desc",
    sensor_name: "sensor1"
  },
  {
    sensorType: "temperature",
    status: "on",
    x_coordinate: 37.3229,
    y_coordinate: -122.0321,
    data: {
        type: "F",
        value: 23.67
      },
    farmerID: 1,
    nodeID: 1,
    ID: 2,
    sensor_desc:"sensor2 desc",
    sensor_name: "sensor2"
  },
  {
    sensorType: "soil nutrition",
    status: "on",
    x_coordinate: 37.4323,
    y_coordinate: -121.8995,
    data: {
        type: "pH",
        value: 15.78
      },
    farmerID: 1,
    nodeID: 1,
    ID: 3,
    sensor_desc:"sensor3 desc",
    sensor_name: "sensor3"
  }];

//NODE
var Node = [
  {
    status: "on",
    x_coordinate: 56.45647,
    y_coordinate: 55.3458,
    farmerID: 1,
    //farmerID: {type: Schema.Types.ObjectId},
    humidity_sensor_vacancy: false,
    temperature_sensor_vacancy: false,
    moisture_sensor_vacancy: true,
    soil_nutrition_sensor_vacancy: false,
    ID: 1
  },
  {
    status: "on",
    x_coordinate: 67.235678,
    y_coordinate: 46.3354,
    farmerID: 1,
    //farmerID: {type: Schema.Types.ObjectId},
    humidity_sensor_vacancy: false,
    temperature_sensor_vacancy: false,
    moisture_sensor_vacancy: true,
    soil_nutrition_sensor_vacancy: false,
    ID: 2
  },
  {
    status: "on",
    x_coordinate: 14.8024,
    y_coordinate: 87.3567,
    farmerID: 1,
    //farmerID: {type: Schema.Types.ObjectId},
    humidity_sensor_vacancy: false,
    temperature_sensor_vacancy: false,
    moisture_sensor_vacancy: true,
    soil_nutrition_sensor_vacancy: false,
    ID: 1
  }];


var Requests = [
  {
    requestType: "Add",
    sensorType: "Humidity",
    sensorLocation: "Area1"
  },
  {
    requestType: "Remove",
    sensorType: "Humidity",
    sensorLocation: "Area3"
  },
  {
    requestType: "Add",
    sensorType: "Humidity",
    sensorLocation: "Area2"
  }
];

var express = require("express");
var app = express();
//var morgan = require("morgan");
var passport = require("passport");
var bodyParser = require("body-parser");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var cors = require("cors");
// const routes = require("./routeHandler/routes");
// var { mongoose } = require("./configDB/db");
const multer = require("multer");

// const mongo = require('./mongo')();

//mongodb+srv://maahiSAC:<password>@cluster0-hueue.mongodb.net/test?retryWrites=true

// const db = require('./config/db');

//for mongo calls without kafka
// try {
//     db.connect();
//     console.log("Mongo connected!")
// }
// catch (e) {
//     console.log('Error connecting to Mongo Atlas: ->',e);
// }

//----------------------------------------S3----------------------------------------------
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://s3.us-east-2.amazonaws.com/linkedin-images"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Cache-Control", "no-cache");
  next();
});

/* Very important syntax. USes Amazon S3 storage for images and files(cloud tech)
var aws = require('aws-sdk'),
    bodyParser = require('body-parser'),
    multerS3 = require('multer-s3');

aws.config.update({
    secretAccessKey: '',
  
    accessKeyId: '',
   
    region: 'us-east-2',
    ACL:'public-read'

});

var app = express(),
    s3 = new aws.S3();

app.use(bodyParser.json());

var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'linkedin-images',
        key: function (req, file, cb) {
            console.log("file---",file);
            console.log("req----",req.body.applicantEmail);
            var name = file.fieldname+req.body.applicantEmail
           // console.log("filename is",name)
            //cb(null, file.originalname); //use Date.now() for unique file keys
            cb(null,name); //use Date.now() for unique file keys
        }
    })
});

*/

//---------------------------------------------------------------------------------------

//require("./configDB/passport")(passport);

//use cors to allow cross origin resource sharing
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

//use express session to maintain session data
app.use(
  session({
    secret: "cmpe273_kafka_passport_mongo",
    resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    duration: 60 * 60 * 1000, // Overall duration of Session : 30 minutes : 1800 seconds
    activeDuration: 5 * 60 * 1000
  })
);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//Routes ExpressJS

const { users, iot, nodes, sensors } = require("./routeHandler");

app.use("/users", users);
app.use("/iot", iot);
app.use("/nodes", nodes);
app.use("/sensors", sensors);
//Allow Access Control

//Leaving some sample routes for reference. Compare with project to understand
//app.use("/recruiter", routes.Recruiter);
//app.use("/applicant", routes.User);
//app.use("/applicant/search", routes.Search);

//Uses Multer. Example. Has to be updated for SmartAgCloud appplication
//app.post("/resume", upload.array("resume", 4), (req, res) => {
//console.log("Req : ",req);
//console.log("Resume Image : ", req.body);
//res.send();
//});

//To list all routes in the application
// app._router.stack.forEach(function(r){
//   if (r.route && r.route.path){
//     console.log(r.route.path)
//   }
// })

app.listen(3001);
console.log("Server Listening on port 3001");
