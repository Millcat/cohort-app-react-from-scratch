const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    cohortID: {
        type: Schema.Types.ObjectId,
        ref: "Cohort"
    }
});

const StudentModel = mongoose.model("Student", StudentSchema);

module.exports = StudentModel;