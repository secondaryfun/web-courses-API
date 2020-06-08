const Category = require("../models/Category")
const mongoose = require("mongoose")

module.exports = {
    //  Returns a random course
    index: (req, res) => {
        Category.find({})
            .then(results => {
                res.json(results)
            })
            .catch(err => {
                console.log(err)
                res.json("Invalid ID")
            })
    },
    create: (req, res) => {
        Category.create(req.body)
            .then(result => {
                res.json(result)
            }).catch(err => console.log(err))
    },
    showId: (req, res) => {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.json("Invalid ID")
            return
        }

        Category.findByIdAndUpdate({ "_id": req.params.id })
            .then(result => {
                res.json(result)
            }).catch(err => console.log(err))
    },
    edit: (req, res) => {
        Category.findOneAndUpdate({ "_id": req.params.id }, req.body, { new: true, useFindAndModify: false })
            .then(result => {
                res.json(result)
            }).catch(err => console.log(err))
    },
    delete: (req, res) => {
        Category.findOneAndDelete({ "_id": req.params.id })
            .then(result => {
                res.json(result)
            }).catch(err => console.log(err))
    },
    showTitle: (req, res) => {
        Category.find({ title: req.params.title })
            .then(result => {
                res.json(result)
            }).catch(err => console.log(err))
    },
    query: (req, res) => {
        if (!req.query) res.json("Bad Query")
        else console.log(req.query)
    },
}
