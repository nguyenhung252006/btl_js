const connection = require('../connection/connection')

class admListController {
    show(req, res, next) {
        res.render("adm-list")
    }

    render(req, res, next) {
        const sql = `SELECT ten, gia, mota, id_diachi FROM menu`
        connection.query(sql, (err, results) => {
            if (err) {
                return next(err)
            }
            res.render('adm-list', { data: results })
        })
    }

    delete(req, res, next) {
        const sql = `DELETE FROM menu Where ten = ? AND id_diachi = ?`
        const { ten, id } = req.params

        connection.query(sql, [ten, id], (err, results) => {
            if (err) {
                next(err)
                res.status(500)
            }
            res.redirect('/adm/list')
        })

    }
}

module.exports = new admListController