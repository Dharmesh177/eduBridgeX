const blog = require('../models/blogMode')


const addBlog = async (req, res, next) => {

    res.set('Access-Control-Allow-Origin', '*');

    try {
        // const { name, mentorId, speaker, time, duration, description, image } = req.body;
        const { title, mentor, date, tag, like,type, feedback } = req.body;
        let newblog = new blog();
        newblog.title = title;
        newblog.mentor = mentor;
        newblog.date = date;
        newblog.tag = tag;
        newblog.like = like;
        newblog.type = type;
        newblog.feedback = feedback;
        await newblog.save();
        res.status(200).json({
            success: true,
            message: "Event is saved", newblog
        })
    }
    catch (err) {
        console.log("Error while saving new event : ", err);
        res.status(400).json({
            success: false,
            message: "Event can not be saved"
        })
    }


}

const getAllBlogs = async (req, res, next) => {

    let myblogs;
    try {
        myblogs = blog.find();
    }
    catch (err) {
        console.log("Error while fetching all blogs", err);
        res.status(400).json({
            success: false,
            message: "Blogs are not avaiable right now"
        })
    }
    if (!myblogs) {
        res.status(404).json({
            success: false,
            message: "Blogs are not found"
        })
    }
    res.status(200).json({
        success: true,
        blogs
    })
}

const getBlogsByAuthorId = async (req, res, next) => {

    let id = req.params
    let myblogs;
    try {
        myblogs = blog.find({ _id: id }).populate('mentor')
    }
    catch (err) {
        console.log("Error while fetching blogs by author id: ", err);
        res.status(400).json({
            success: false,
            message: "Blogs are not found"
        })
    }
    if (!myblogs) {
        res.status(404).json({
            success: false,
            message: "Blogs are not found"
        })
    }
    res.status(200).json({
        success: true,
        myblogs
    })
}

module.exports = { getAllBlogs, getBlogsByAuthorId ,addBlog};
