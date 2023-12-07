const express = require('express')
const mentorModel = require('../models/mentorModel')
const studentModel = require('../models/studentModel')
const verifyEmail = require('../verifyMail')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const studentSignUp = async (req, res, next) => {

    const { name, email, mobile, password, interest } = req.body;

    try {
        let userExist = await studentModel.findOne({ email: email })
        if (userExist) {
            res.status(400).json({
                success: false,
                message: "User is already exist"
            })
        }
        else {
            let newUser = new studentModel();
            newUser.name = name
            newUser.email = email
            newUser.mobile = mobile
            newUser.password = password
            newUser.interest = interest

            await newUser.save();
            return res.json({
                success: true,
                response: {
                    status: true,
                    message: "Your account Created Succefully",
                }
            })
        }
    }
    catch (err) {
        console.log("Error in student signUp: ", err);
    }
}


const mentorSignUp = async (req, res, next) => {

    let obj
    // console.log("user model ",user);
    const { email, password } = req.body
    try {
        const old = await mentorModel.findOne({ email: email })
        if (old == null) {
            // obj = new mentorModel();
            // obj.email = email
            // obj.name=name
            const pass = bcrypt.hashSync(password, 10)
            // obj.password = pass

            // await obj.save();
            const jsonObj = {
                email: email,
                password: pass
            }
            const token=jwt.sign(jsonObj,process.env.Key,{expiresIn:"2h"})
            console.log("token generated: ", token);

            const link = "http://localhost:5000/" + "verify/" + token;

            verifyEmail(link, email);
            res.status(200).json({
                success: true,
                message: "Verification mail sent succefully"
            })
        }
        else {
            console.log("old user : ", old);
            console.log("User already Exist");
        }
    }
    catch (err) {
        console.log("Error in signUp : ", err);
    }

    next()
}

const saveMentor = async (req, res, email) => {

    // const newMentor = mentorModel();
    let docLinks = []
    if (req.files.length > 0) {
        docLinks = req.files.map(file => {
            return file.location
        })
    }

    try {
        const newMentor = mentorModel()
        newMentor.name = req.body.name
        newMentor.email = req.body.email
        newMentor.password = req.body.password
        newMentor.moblle = req.body.moblle
        newMentor.language = req.body.language
        newMentor.intro = req.body.intro
        newMentor.qualification = req.body.qualification
        newMentor.institute = req.body.institute
        newMentor.photo = req.body.photo
        newMentor.district = req.body.district
        newMentor.state = req.body.state
        newMentor.expertise = req.body.expertise
        newMentor.docLink = docLinks

        await newMentor.save()
        res.status(200).json({
            success: true,
            message: "You SignedUp succefully Please Login"
        })
    }
    catch (err) {
        console.log("Server Error while saving Mentor: ", err);
        res.status(502).json({
            success: true,
            message: "Error : " + err
        })
    }
}


const loginMentor = async (req, res, next) => {

    const { email, password } = req.body
    try {
        // console.log("Email:",email," pass : ",password);
        const old = await mentorModel.findOne({ email: email })
        if (!old) {
            res.status(400).json({
                success: false,
                message: "User Does Not Exist"
            })
        }
        else {
            // console.log("old user",old);
            const checkPass = bcrypt.compare(password, old.password)
            if (checkPass) {
                const key = process.env.Key
                console.log("old(Json) ", old.email);
                const token = jwt.sign({ email: old.email }, key, { expiresIn: 30 * 24 * 60 * 60 })
                res.cookie("jwtToken", token, {
                    httpOnly: true,
                    sameSite: "strict"
                })
                res.status(200).json({
                    success: true,
                    message: "User LogggedIn",
                    token: token
                })
            }
        }
    }
    catch (err) {
        console.log("Error While login : ", err);
    }
    next()
}


const loginStudent = async (req, res, next) => {

    const { email, password } = req.body
    try {
        // console.log("Email:",email," pass : ",password);
        const old = await studentModel.findOne({ email: email })
        if (!old) {
            res.status(400).json({
                success: false,
                message: "User Does Not Exist"
            })
        }
        else {
            // console.log("old user",old);
            const checkPass = bcrypt.compare(password, old.password)
            if (checkPass) {
                const key = process.env.Key
                console.log("old(Json) ", old.email);
                const token = jwt.sign({ email: old.email }, key, { expiresIn: 30 * 24 * 60 * 60 })
                res.cookie("jwtToken", token, {
                    httpOnly: true,
                    sameSite: "strict"
                })
                res.status(200).json({
                    success: true,
                    message: "User LogggedIn",
                    token: token
                })
            }
        }
    }
    catch (err) {
        console.log("Error While login : ", err);
    }
    next()
}

module.exports = { studentSignUp, mentorSignUp, saveMentor, loginMentor, loginStudent };


// {
//     "name":"yash",
//     "email":"yashparsana135@gmail.com",
//     "password":"njsdfnkjsdfn",
//     "moblle":"",
//     "language":"",
//     "intro":"intro",
//     "qualification":["dfdf"],
//     "institute":"dfdf",
//     "photo":"Ddf",
//     "district":"df",
//     "state":"dfdf",
//     "expertise":["Ddg"],
//     "docLink":["dfdf"]
//   }