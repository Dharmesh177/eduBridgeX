var express = require("express");
var router = express.Router();
const jwt = require('jsonwebtoken')

// Load  model
const Recruiter = require("../models/recruiterModel.js");


router.get("/s", function(req, res) {
	res.send("API is working properly !");
});

// Getting all the recruiters
router.get("/recruiter", function(req, res) {
    Recruiter.find(function(err, recruiters) {
		if (err) {
			console.log(err);
		} else {
			res.json(recruiters);
		}
	})
});

// get a recruiter by his email
router.post("/get_a_recruiter_by_email",(req,res) => {
    var email = req.body.email;
    var query = { email: email };
    Recruiter.findOne(query, function(err , resp){
        if (err) throw err;
    })
    .then(resp => {
        res.status(200).json(resp);
        console.log(resp);
        return resp;
    })
});


// Add a recruiter to db
router.post("/recruiter/add", (req, res) => {
    const newRecruiter = new Recruiter({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        type: req.body.type,
        date: req.body.date,
        bio: req.body.bio_recruiter,
        contact_number: req.body.contact_number,
    });
    newRecruiter.save()
    .then(recruiter => {
        res.status(200).json({message : "recruiter added successfullyy !!!"} );
    })
    .catch(err => {
        res.status(400).send(err);
    });
});

//edit recruiter profile
router.post('/edit_recruiter_profile', (req, res) => {
    console.log(req);
    var query = {email:req.body.email };
    var set = { $set:{
        bio: req.body.bio,
        contact_number: req.body.contact_number,       
        name: req.body.name,          
    }}
    Recruiter.updateOne(query , set, function(err, resp){
        if (err) throw err;
    })
    .then(resp => {
        res.status(200).json(resp);
        console.log(resp);
        return resp;
    });    
});


router.post("/login", (req, res) => {
    try {
        const email = req.body.email;
	// Find user by email
        Recruiter.findOne({ email }).then(user => {
            // Check if user email exists
            if (!user) {
                return res.status(404).json({
                    error: "Email not found",
                });
            }
            else{
                const token = jwt.sign({ email:user.email, name: user.name }, process.env.key, { expiresIn: 30 * 24 * 60 * 60 })
                res.cookie("jwtToken", token, {
                    httpOnly: true,
                    sameSite: "strict"
                })
                res.status(200).json({
                    success: true,
                    message: "Recruiter LogggedIn",
                    token: token,
                    user: user
                })
            }
        });
    } catch (err) {
        console.log("error while recruiter login");
        res.status(500).json({"msg":"internal server error"});
    }
});




module.exports = router;