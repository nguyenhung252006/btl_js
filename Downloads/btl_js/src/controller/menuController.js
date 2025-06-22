class MenuController {
    show (req,res) {
        res.render("menu")
    }
}
module.exports = new MenuController