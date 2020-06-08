const Course = require("../models/Course")
const mongoose = require("mongoose")

module.exports = {
    //  Returns a random course
    index: (req, res) => {
        Course.find({})
            .then(results => {
                let random = Math.floor(Math.random() * results.length)
                res.json(results[random])
            })
            .catch(err => {
                console.log(err)
                res.json("Invalid ID")
            })
    },
    create: (req, res) => {
        Course.create(req.body)
            .then(result => {
                res.json(result)
            }).catch(err => console.log(err))
    },
    showId: (req, res) => {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.json("Invalid ID")
            return
        }

        Course.findByIdAndUpdate({ "_id": req.params.id })
            .then(result => {
                res.json(result)
            }).catch(err => console.log(err))
    },
    edit: (req, res) => {
        Course.findOneAndUpdate({ "_id": req.params.id }, req.body, { new: true, useFindAndModify: false })
            .then(result => {
                res.json(result)
            }).catch(err => console.log(err))
    },
    delete: (req, res) => {
        Course.findOneAndDelete({ "_id": req.params.id })
            .then(result => {
                res.json(result)
            }).catch(err => console.log(err))
    },
    showTitle: (req, res) => {
        Course.find({ title: req.params.title })
            .then(result => {
                res.json(result)
            }).catch(err => console.log(err))
    },
    searchSubcategories: (req, res) => {
        Course.find({ "primary_subcategory": req.params.query })
            .then(result => {
                res.json(result)
            }).catch(err => console.log(err))
    },
}
