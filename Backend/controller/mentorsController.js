const { STATES } = require("mongoose");
const mentor = require('../models/mentorModel');
const runReccomendedModel = require("../recom");

const getRecommendedMentors = async (req, res, next) => {
    const { interest } = req.params
    let data = await runReccomendedModel(interest);
    data = JSON.parse(data);
    const columns = data.columns;
    let recommendedUsers = data.data.map((mentor) => {
        const newObject = {}
        mentor.map((property, index) => {
            newObject[columns[index]] = property;
        })
        return newObject;
    })
    const recommendedMentors = recommendedUsers.filter((user, index) => {
        if (index < 5) {
            return user
        }
    });

    // console.log('recommendedUsers', recommendedMentors);
    return res.status(200).json({
        success: true,
        recommendedMentors: recommendedMentors
    })
}

const getAllMentors = async (req, res, next) => {

    let users;
    try {
        users = await mentor.find();
    }
    catch (err) {
        return res.status(400).json({
            success: false,
            message: err.message
        })
    }
    if (!users) {
        return res.status(404).json({
            success: false,
            message: "User Not Found"
        })
    }
    return res.status(200).json({ success: true, users })
}

const getMentorById = async (req, res, next) => {

    var user;
    try {
        user = await mentor.findOne({ _id: req.params.id })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err
        })
    }
    if (!user) {
        res.status(400).json({
            success: false,
            message: "User not Exist"
        })
    }
    return res.status(200).json({ success: true, user });
}

const addMentorwithId = async (req, res) => {

    let newmentor = new mentor();
    try {
        let { id } = req.params;
        const { mentor, photo, followers, language, experience, industry, domain, tools, district, state, intro } = req.body;
        newmentor._id = id;
        newmentor.mentor = mentor;
        newmentor.photo = photo
        newmentor.followers = followers
        newmentor.language = language;
        newmentor.experience = experience;
        newmentor.industry = industry;
        newmentor.domain = domain
        newmentor.tools = tools
        newmentor.district = district;
        newmentor.state = state
        newmentor.intro = intro

        await newmentor.save();
        res.status(200).json({
            success: true,
            message: "Mentor Addaed",
            newmentor
        })
    }
    catch (err) {
        console.log("Error while adding new mentor : ", err);
        res.status(400).json({
            success: false,
            message: "Mentor can not be added"
        })
    }

};

const addNewMentor = async (req,res) => {
    try {
        const formdata = req.body;
        const newMentor = new mentor({
            name: formdata.name,
            email: formdata.email,
            moblle: formdata.mobile,
            password: formdata.password,
            language: formdata.language,
            intro: formdata.intro,
            // qualification: formdata.qualification,
            institute: formdata.institute,
            photo: formdata.photo,
            district: formdata.district,
            state: formdata.state,
            expertise: formdata.expertise,
            // docLink: formdata.docLink,
        });
        await newMentor.save();
    } catch (err) {
        console.log(err);
    }
}

const deleteMentorByEmail = async (rew,res) => {
    try {
        const result = await mentor.deleteOne({email: req.params.email});
        res.status(200).json(result);
    } catch (err) { 
        console.log(err);
    }
}

module.exports = { getAllMentors, getMentorById, addMentorwithId, getRecommendedMentors, addNewMentor, deleteMentorByEmail };
