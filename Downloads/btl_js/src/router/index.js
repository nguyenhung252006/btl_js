const menuRouter = require ('./menuRouter.js')
const admRouter = require('./admRouter.js')
const admListController = require('./admListRouter.js')


function router(app) {
    app.use('/adm/list',admListController)

    app.use('/adm',admRouter)

    app.use('/menu',menuRouter)

    app.use('/', (req, res) => {
        res.render('home')
    })

}

module.exports = router