const resources = require('../models/resourcesModel')

const addresources = async (req, res, next) => {


    try {
        const { name, provider, tags, description, pdfLink } = req.body
        let newresource = new resources();
        newresource.name = name
        newresource.provider = provider
        newresource.description = description
        newresource.tags = tags
        newresource.pdfLink = pdfLink

        newresource.save();

        res.status(200).json({
            succes: true,
            message: "Resources added succefully", newresource
        })
    }
    catch (err) {
        console.log("Error while adding new resources : ", err);
        res.status(400).json({
            succes: false,
            message: "Resources is not added"
        })
    }
}
const getAllresources = async (req, res, next) => {

    let myresources;
    try {
        myresources = await resources.find().populate('provider');
    }
    catch (err) {
        console.log("Error while fetching all resources : ", err);
        res.status(400).json({
            success: false,
            message: "Can not get resources"
        })
    }
    if (!myresources) {
        return res.status(404).json({
            success: false,
            message: "Resources can not be found"
        })
    }
    res.status(200).json({
        success: true,
        myresources
    })

}

const getResourcesByMentorId = async (req, res, next) => {

    // let id = req.params;
    // let myresources;
    // try {
    //     myresources = resources.findOne({ _id: id }).populate('provider')
    // }
    // catch (err) {
    //     console.log("Error while fetching resources by :", err);
    //     res.status(400).json({
    //         success: false,
    //         message: "Resources are not avaiable"
    //     })
    // }
    // if (!myresources) {
    //     res.status(404).json({
    //         success: false,
    //         message: "Resources can not be found"
    //     })
    // }
    // res.status(200).json({
    //     success: true,
    //     myresources
    // })
    const { id } = req.params

    if (id) {
        resources.findOne({ provider: id })
            .populate('provider')
            .exec((error, resources) => {
                if (error) {
                    return res.status(400).send({ error: error })
                }
                if (resources) {
                    return res.status(200).send({ resources })
                }

            })
    } else {
        return res.status(200).send({ error: "params required" })
    }
}

module.exports = { addresources, getAllresources, getResourcesByMentorId };
