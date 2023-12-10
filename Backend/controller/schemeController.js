const scholarShipModel = require('../models/scholarShipModel');
const scheme = require('../routes/schemeRoute');

exports.addNewScheme = async(req,res)=> {
    try {
        const formData = req.body;

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
        console.log(error);
    }

}