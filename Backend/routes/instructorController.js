const express = require('express')
const instructorModel = require('../models/instructorModel')
// const studentModel = require('../models/studentModel')
// const verifyEmail = require('../verifyMail')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const InstructorSignUp = async (req, res, next) => {

    const { name,password,inst_name,year_of_exp,email,contact_number } = req.body;

    try {
        let userExist = await instructorModel.findOne({ email: email })
        if (userExist) {
            res.status(400).json({
                success: false,
                message: "Instructor is already exist"
            })
        }
        else {
            let newUser = new instructorModel();
            newUser.name = name
            newUser.email = email
            newUser.inst_name = inst_name
            newUser.contact_number = contact_number
            newUser.year_of_exp = year_of_exp
            newUser.password = password

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



const loginInstructor = async (req, res, next) => {

    const { email, password } = req.body
    try {
        // console.log("Email:",email," pass : ",password);
        const old = await instructorModel.findOne({ email: email })
        if (!old) {
            res.status(400).json({
                success: false,
                message: "Instructor Does Not Exist"
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
                    message: "Instructor LogggedIn",
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


module.exports = { InstructorSignUp, loginInstructor };


