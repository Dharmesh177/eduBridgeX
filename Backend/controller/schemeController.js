const scholarShipModel = require('../models/scholarShipModel');
const Scheme = require('../models/scholarShipModel');

exports.addNewScheme = async(req,res)=> {
    try {
        const formData = req.body;
        // console.log("hello");
        const que = req.body.questions;
        const ans = req.body.answers;
        const newScheme = new scholarShipModel({
            title: formData.scheme_name,
            description: formData.detail,
            benifits: formData.benifits,
            eligibility: formData.eligibility,
            docRequired: formData.documents,
            steps: formData.application_step,
            organization: formData.org_name,
            FAQ: que.map((itm, index) => {
                return{"question": itm, "answer": ans[index]};
            }), 
            tags: formData.tags,
            reference: formData.ref,
        });
        const temp = newScheme.save();
        if(temp) {
            res.status(200).json({"success": true, "msg": "new Scheme added successfully"});
        } else {
            res.status(500).json({"success": false, "msg": "server error while adding new Scheme"});
        }
    } catch (error) {
        console.log("error while adding new scheme");
        console.log(error);
    }
};

exports.getAllSChemes = async (req,res) => {
    try {
        // console.log("hello");
        const allSchemes = await Scheme.find();
        // console.log(allSchemes);
        if(allSchemes) {
            res.status(200).json({allSchemes});
        } else {
            res.status(500).json({"success":false,"msg":"server error while fetching allSchemes"});
        }
    } catch (err) {
        res.status(500).json({"msg":"internal server error"});
        console.log("error while fetching allSchemes");
        console.log(err);
    }
};

exports.deleteAllScheme = async (req,res) => {
    try {
        console.log("hello");
        await Scheme.deleteMany();
        res.status(200).json({"msg": "deleted all messages"});
    } catch (error) {
        res.status(500).json({"msg":"internal server error"});
        console.log("error while deleting ALL SCHEMES");
    }
}

exports.getSchemesFromTag = async (req,res) => {
    try {
        const tag = req.params.tag;
        console.log(tag);
        const result = await Scheme.find({tags: {$in: [tag]}});
        console.log(result);
        if(result.length > 0) {
            res.status(200).json({result});
        } else {
            res.status(200).json({"msg":"no scheme for given tag"});
        }
    } catch (err) {
        res.status(500);
        console.log("error while getSchemesFromTag");
    }
}