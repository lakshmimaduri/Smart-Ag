//Here we state the path to where all the routes are. The routes will be in linkedINController
//CHeck the sample project to understand and compare
//Has to be modified. GIven are smaples.

var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
const saltRounds = 10;
let mongoose = require('mongoose');
//load all Models
var User = require("../models/user");
//require User model
var User = mongoose.model("User");

router.get('/signup', (req, res)=>{
	console.log('*****Inside POST for Signup******');
    console.log('name',request.body.username);
    console.log('email',request.body.email);
    console.log('password',request.body.password);
    let uname = request.body.name;
    let uemail = request.body.email;
    let upassword = request.body.password;
    let id;
    const user = new User({username:uname, password:upassword, email:uemail, userType:"farmer"});
    user.save()
    .then((res)=>{
        console.log('Farmer saved successfully',res);
        return response.status(200).json({message:"success"});
    })
    .catch((err)=>{
        console.log('Error creating faculty user:',err);
    })
	res.send("Hello!");
})

router.post('/login', (req, res)=>{
	console.log('Inside login POST');
    console.log('Request Body: ', req.body);

    //Kafka request 
    User.findOne({
        'username': req.body.username
    }, (err, user) => {
        console.log("find one user done!")
        if (err) {
            console.log("Unable to fetch user details.", err);
            // callback(err, null);
        }
        else {
            if(user){
                console.log("User details ", user);
                //if (!bcrypt.compareSync(msg.password, user.password)) {                
                if (req.body.password !== user.password) {                
                    console.log('Invalid Credentials!');
                    res.status(404).json({message:'Invalid Credentials!'});
                    // callback(null, null);                
                }
                else {
                    req.session.user = user;
                    //const token = jwt.sign(user.toJSON(), config.secret, { expiresIn: 86400 * 7 });
                    //console.log('User from login:', user, 'Token from login: ', token);
                    let userData = {userid:user._id, user_type: user.userType};
                    console.log('User Data:',userData);
                    res.status(200).json(JSON.stringify(userData));
                }
            }
            else{
                res.writeHead(401,
                    {
                        'Content-type': 'text/plain'
                    })
                    console.log('****Invalid Credentials****!');
                    res.end('Invalid Credentials!');
            }
        }
})

});

module.exports = router;

