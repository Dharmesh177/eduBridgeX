const User = require('../models/studentModel');

exports.getUserById = async (req,res) => {
    try {
        const result = await User.findById(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
    }
};

exports.getAllUser = async (req,res) => {
    try {
        const result = await User.find();
        res.status(200).json(result);
    } catch (err) {
        
    }
}