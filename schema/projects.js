const mongoose = require("mongoose")

const projectList = mongoose.Schema({
    title: {type: mongoose.Schema.Types.Mixed, required: true},
    published: Boolean,
    link: {type: mongoose.Schema.Types.Mixed, required: true},
    description: {type: mongoose.Schema.Types.Mixed, required: true},
    image: {type: mongoose.Schema.Types.Mixed, required: true},
    categories: {type: mongoose.Schema.Types.Mixed, required: true},
    reposed: Boolean,
    repository: {type: mongoose.Schema.Types.Mixed, required: true},
    projectID: {type: mongoose.Schema.Types.Mixed, required: true}
})

module.exports = mongoose.model("ProjectsList", projectList, "project_details");