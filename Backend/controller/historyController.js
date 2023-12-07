const history = require('../models/historyModel')

const gethistoryById = async (req, res, next) => {
    
    let myhistory;

    try {
        let id = req.params;

        myhistory = history.find({ id: id });
    }
    catch (err)
    {
        console.log("Error while finding history usong id : ", err);
        res.status(400).json({
            success: false,
            messaage:"History cannot be found"
        })
    }
    if (!myhistory)
    {
        res.status(404).json({
            success: false,
            message:"History No found"
        })
    }
    res.status(200).json({
        success: true,
        myhistory
    })

}

const addHistory = async (req, res, next) => {
    
    try {
        
        const { session,domain, time, duration, S_with,reviews } = req.body
        
    
        let myhistory = new history();
        let id=req.params
        myhistory.id = id
        myhistory.session = session
        myhistory.domain=domain
        myhistory.time = time
        myhistory.duration = duration
        myhistory.with = S_with
        myhistory.reviews = reviews
        myhistory.save();
        res.status(200).json({
            success: true,
            message:"History is saved"
        })
    }
    catch (err)
    {
        console.log("Error whie adding history : ", err);
        res.status(400).json({
            success: false,
            message:"History can not be added"
        })
    }
}
module.exports = { gethistoryById, addHistory };