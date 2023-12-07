const feedBack = require('../models/feedBack');

const addFeedBack = async (req, res, next) => {

    const mentorId = req.body.mentorId
    const domain=req.params
    query={_id:mentorId}
    options = { upsert: true, new: true, setDefaultsOnInsert: true };

    feedBack.findOneAndUpdate(query, update, options, function(error, result) {
        
        if (error) return;

        

    });
}