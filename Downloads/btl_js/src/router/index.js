const menuRouter = require ('./menuRouter.js')
const admRouter = require('./admRouter.js')
const admListRouter = require('./admListRouter.js')


function router(app) {
    app.use('/adm/list',admListRouter)

    app.use('/adm',admRouter)

    app.use('/menu',menuRouter)

    app.use('/', (req, res) => {
        res.render('home')
    })

}

module.exports = router