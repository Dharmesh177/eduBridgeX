const Course = require('../models/courseModel');

exports.addNewCourse = async (req,res) => {
    try {
        const formdata = req.body;
        const newCourse = new Course({
            title: formdata.title,
            imageUrl: formdata.imgURL,
            category: formdata.category,
            difficultyLevel: formdata.difficultyLevel,
            description: formdata.description,
            whatYouWillLearn: formdata.benifits,
            duration: formdata.duration,
            requirements: formdata.requirements,
            videos: formdata.videos,
            instructor: formdata.instructor,
        });
        const result = await newCourse.save();
        if(result) {
            res.status(200).json({"success":true,"msg":"New Course Added Successfully"});
        } else {
            res.status(200).json({"success":false,"msg":"Try Again, course not added successfully"});
        }
    } catch (err) {
        console.log("error while addNewCourse");
        res.status(500).json({"msg":"internal server error"});
    }
};

exports.getAllCourses = async (req,res) => {
    try {
        const result = await Course.find();
        if(result.length == 0) {
            res.status(500).json({"msg": "NO Courses awailable"});
            return;
        } else {
            res.status(200).json(result);
        }
    } catch (err) {
        console.log("error while getAllCourses");
        res.status(500).json({"msg":"internal server error"});
    }
};

exports.getCourseById = async (req,res) => {
    try {
        const result = await Course.findById(req.params.id);
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(200).json({"msg": "NO Courses awailable"});
            return;
        }
    } catch (err) {
        console.log("error while getCourseById");
        res.status(500).json({"msg":"internal server error"});
    }
}

exports.deleteCourseById = async (req,res) => {
    try {
        const result = await Course.deleteOne({_id: req.params.id});
        if(result) {
            res.status(200).json({"msg":"Course deleted"});
        } else {
            res.status(200).json({"msg": "Error in deleting course"});
            return;
        }
    } catch (err) {
        console.log("error while deleteCourseById");
        res.status(500).json({"msg":"internal server error"});
    }
}