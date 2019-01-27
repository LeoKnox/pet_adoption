const controller = require('./controller');
const path = require('path');

module.exports = (app) => {
    app
        .get('/api/pet', controller.index)
        .get('/api/pet/:id', controller.detail)
        .post('/api/pet', controller.create)
        .put('/api/pet/:id', controller.update)
        .delete('/api/pet/:id', controller.destroy)
        .all("*", (req,res,next) => {
            res.sendFile(path.resolve("./public/dist/public/index.html"))
        })
}