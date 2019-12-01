const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CohortSchema = new Schema({
    number: Number
});

const CohortModel = mongoose.model("Cohort", CohortSchema);

module.exports = CohortModel;