const connection = require('../connection/connection.js')

class MenuController {

    show(req, res, next) {
        res.render("menu")
    }

    render(req, res, next) {
        const sql = `
            SELECT
                diachi.ten AS ten_diachi,
                diachi.chinhanh,
                menu.ten AS ten_mon,
                menu.gia,
                menu.mota,
                menu.hinhanh
                FROM menu
                JOIN diachi ON menu.id_diachi = diachi.id
                WHERE diachi.chinhanh = ?
            `
        const address = req.body.ten

        connection.query(sql, [address], (err, results) => {
            if (err) {
                return next(err)
            }
            res.render('menu', { data: results, chinhanh: address })
        })
    }

    filter(req, res, next) {
        const sql = `SELECT
                diachi.ten AS ten_diachi,
                diachi.chinhanh,
                menu.ten AS ten_mon,
                menu.gia,
                menu.mota,
                menu.hinhanh
                FROM menu
                JOIN diachi ON menu.id_diachi = diachi.id
                WHERE menu.mota LIKE ? AND diachi.chinhanh = ?`
        const mota = req.body.mota
        const address = req.body.ten
        connection.query(sql, [mota,address], (err, results) => {
            if (err) {
                return next(err)
            }
            res.render("menu-filter", { data: results,chinhanh: address })
        })
    }


}
module.exports = new MenuController