const Course = require("../models/Course")

module.exports = {
    index: (req, res) => {
        Course.find({})
            .then(result => {
                res.json(result)
            })
    },
    showId: (req, res) => {
        Course.find({ "_id": req.params.id })
            .then(result => {
                res.json(result)
            })
    },
    showTitle: (req, res) => {
        Course.find({ title: req.params.title })
            .then(result => {
                res.json(result)
            })
    },
    create: (req, res) => {
        Course.create(req.body)
            .then(result => {
                res.json(result)
            })
    },
    edit: (req, res) => {
        Course.findOneAndUpdate({ "_id": req.params.id }, req.body, { new: true, useFindAndModify: false })
            .then(result => {
                res.json(result)
            })
    },
    delete: (req, res) => {
        Course.findOneAndDelete({ "_id": req.params.id })
            .then(result => {
                res.json(result)
            })
    }
}
