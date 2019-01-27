const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/item_db', (err)=>{
    console.log("-- connect to db");
    if(err) {
        console.log(err);
    }
});
    const SkillSchema = new mongoose.Schema({
        skills: [{type:String}]
    })

    const PetSchema= mongoose.Schema ({
        name: {type:String, minlength:[3, "Name more then 2 characters"]},
        type: {type:String, minlength:[3, "Type more then 2 characters"]},
        description: {type:String, minlength:[3, "Description more then 2 characters"]},
        skills: [{type:String}]
    }, {timestamps: true})

    module.exports = {Pet:mongoose.model('Pet', PetSchema), Skills:mongoose.model('Skills', SkillSchema)};