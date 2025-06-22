const menuRouter = require ('./menuRouter.js')


function router(app) {

    app.use('/menu',menuRouter)

    app.use('/', (req, res) => {
        res.render('home')
    })

}

module.exports = router