const mongoose = require("mongoose")

const workexp = mongoose.Schema({
    position: {type: mongoose.Schema.Types.Mixed, required: true},
    company: {type: mongoose.Schema.Types.Mixed, required: true},
    duration: {type: mongoose.Schema.Types.Mixed, required: true}
})

module.exports = mongoose.model("WorkExp", workexp, "work_exp");