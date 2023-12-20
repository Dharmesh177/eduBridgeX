const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const instructorSchena = new Schema({
	name: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	inst_name: {
		type: String,
        required: false
	},
    year_of_exp:{
      type : String,
      required:false
    },
	email: {
		type: String,
		required: true
    },
    contact_number: {
		type: Number,
		required: false
    },
	date:{
		type: Date,
		required: false
	},

});

module.exports = Recruiter = mongoose.model("instructor", instructorSchena);