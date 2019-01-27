const Pet = require("./models");

module.exports = {
    index: (req, res) => {
        Pet.Pet.find()
            .then(results =>{
                console.log(results);
                res.json(results);
            })
            .catch(err=>{
                console.log(err);
            })
        
    },

    detail: (req, res) => {
        Pet.Pet.findById(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err))
    },

    create: (req, res) => {
        Pet.Pet.create(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    },

    update: (req, res) => {
        Pet.Pet.findByIdAndUpdate(req.params.id, req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    },

    destroy: (req,res) => {
        Pet.Pet.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    }
}