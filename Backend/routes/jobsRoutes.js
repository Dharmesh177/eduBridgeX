var express = require("express");
var router = express.Router();
const Job = require("../models/jobsModel");

router.get("/s", function(req, res) {
	res.send("API is working properly !");
});
// get all jobs
router.get("/jobs", function(req, res) {
    Job.find(function(err, Jobs) {
		if (err) {
			console.log(err);
		} else {
			res.json(Jobs);
		}
	})
});

// get job by id
router.get("/job/:id",function(req,res){
    const { id } = req.params

    if (id) {
        console.log(id);
        Job.findOne({ _id: id })
        .then(resp => {
            res.status(200).json(resp);         
            console.log(resp);
            return resp;
        })
        .catch(resp => {
            res.status(400).json(err);
            console.log(err);
            return err;
        });
    } else {
        return res.status(200).send({ error: "params required" })
    }
});

// find all the non-deleted jobs for applicant
router.get("/job/view_for_applicant",(req,res) => {
    var email = req.body.email_rec;
    Job.find({status:"present" , deadline_of_application: { $gt : Date.now() } })    
    .then(resp => {
        res.status(200).json(resp);
        console.log(resp);
        return resp;
    })
    .catch(resp =>{
        res.status(400).json(err);
        console.log(err);
        return err;
    });
});

// find all job from perticular recruiter
router.post("/job/search",(req,res) => {
    var job_ka_title = req.body.job_title;
    Job.find({status:"present", title: job_ka_title })
    .then(resp => {
        res.status(200).json(resp);         
        console.log(resp);
        return resp;
    })
    .catch(resp => {
        res.status(400).json(err);
        console.log(err);
        return err;
    });
});
// title: 'SDE Intern',
//   name_recruiter: 'dharmesh',
//   email_recruiter: 'dvala@gmail.com',
//   max_applications: 100,
//   max_positions: 5,
//   number_of_positions_filled: 0,
//   date_of_posting: 2023-12-10T05:55:41.481Z,
//   deadline_of_application: 2024-10-11T18:30:00.000Z,
//   required_skills: 'nodejs reactjs',
//   type_of_job: 'Private',
//   duration: 3,
//   salary_per_month: 50000,
//   rating: 0,
//   rate_count: 0,
//   status: 'present',
//   _id: new ObjectId("657552dd124d9c04d59b739e")

//find all the jobs of perticular duration 
router.post("/job/filterbyduration",(req,res) => {
    var job_ka_duration = req.body.job_duration;
    console.log(res.body)
    Job.find({status:"present", duration: { $lt: job_ka_duration} })
    .then(resp => {
        res.status(200).json(resp);         
        console.log(resp);
        return resp;
    })
    .catch(resp => {
        res.status(400).json(err);
        console.log(err);
        return err;
    });
});

// find all job of perticular job type (job type filter)
router.post("/job_type_filter",(req,res) => {
    var job_ka_type = req.body.job_ka_type;
    Job.find({status:"present", type_of_job: job_ka_type })
    .then(resp => {
        res.status(200).json(resp);         
        console.log(resp);
        return resp;
    })
    .catch(resp => {
        res.status(400).json(err);
        console.log(err);
        return err;
    });
});

// find all job of between a range of salary (job salary filter)
router.post("/salaryfilter",(req,res) => {
    var minimumsalary = req.body.min;
    var maximumsalary = req.body.max;
    Job.find({status:"present", salary_per_month: { $gte: minimumsalary, $lte: maximumsalary }})
    .then(resp => {
        res.status(200).json(resp);         
        console.log(resp);
        return resp;
    })
    .catch(resp => {
        res.status(400).json(err);
        console.log(err);
        return err;
    });
});

// find all job from perticular recruiter
router.post("/job/view",(req,res) => {
    var email = req.body.email_rec;
    Job.find({email_recruiter: email , status:"present" , deadline_of_application : { $gt : Date.now() } })
    .then(resp => {
        res.status(200).json(resp);
        console.log(resp);
        return resp;
    })
});

// delete a job by recruiter
router.post("/job/delete",(req,res) => {
    var id = req.body.id;
    var query = { _id: id };
    var set = { $set: { status: "deleted" } };
    Job.updateMany(query , set , function(err , resp){
        if (err) throw err;
    })
    .then(resp => {
        res.status(200).json(resp);
        console.log(resp);
        return resp;
    })
});

// get a job by id
router.post("/get_a_job_by_id",(req,res) => {
    var id = req.body.id;
    var query = { _id: id };
    Job.findOne(query, function(err , resp){
        if (err) throw err;
    })
    .then(resp => {
        res.status(200).json(resp);
        console.log(resp);
        return resp;
    })
});

// Add a job
router.post('/job/add', (req, res) => {
    console.log(req);
    Job.findOne({email_recruiter : req.body.email_recruiter , title:req.body.title})
    .then(jobb =>{
        let job = new Job({
            title: req.body.title,
            max_applications: req.body.max_applications,
            max_positions:  req.body.max_positions,
            deadline_of_application: req.body.deadline_of_application,
            required_skills: req.body.required_skills,
            type_of_job: req.body.type_of_job,
            salary_per_month: req.body.salary_per_month,
            name_recruiter: req.body.name_recruiter,
            email_recruiter: req.body.email_recruiter,
            date_of_posting: Date.now(),
            status: "present",
            apply_link: req.body.apply_link,
            others: req.body.others
        });
        console.log(job);
        job.save()
        .then(job => {
            res.status(200).json(job);
        })
        .catch(err => {
            console.log(err);
            res.status(400).send(err);
        });
    })
});

// Add a job
router.post('/job/edit', (req, res) => {
    console.log(req);
    Job.findOne({email_recruiter : req.body.email_recruiter , title:req.body.title})
    .then(jobb =>{
        var query = {email_recruiter:req.body.email_recruiter , title:req.body.title};
        var set = { $set:{
            // title: req.body.title,
            max_applications: req.body.max_applications,
            max_positions:  req.body.max_positions,
            deadline_of_application: req.body.deadline_of_application,
            required_skills: req.body.required_skills,
            type_of_job: req.body.type_of_job,
            salary_per_month: req.body.salary_per_month,
            name_recruiter: req.body.name_recruiter,
            email_recruiter: req.body.email_recruiter,
            // date_of_posting: Date.now(),
            apply_link: req.body.apply_link,
            others: req.body.others,
            status: "present"                    
        }}
        Job.updateOne(query , set, function(err, resp){
            if (err) throw err;
        })
        .then(resp => {
            res.status(200).json(resp);
            console.log(resp);
            return resp;
        });
    })
});
module.exports = router;