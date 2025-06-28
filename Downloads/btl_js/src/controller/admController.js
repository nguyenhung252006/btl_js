const connection = require('../connection/connection.js')

class AdmController {
    show(req, res, next) {
        res.render("adm")
    }
    add(req, res, next) {
        const { ten, chinhanh, mota, gia, hinhanh } = req.body
        const sql = `INSERT INTO menu (ten,id_diachi,mota,gia,hinhanh) VALUE (?, ?, ?, ?, ?)`
        connection.execute(sql, [ten, chinhanh,mota,gia, hinhanh], (err, results) => {
            if (err) {
                next(err)
                return res.status(500).send("Lỗi khi thêm món")
            }
            res.redirect("/adm/list")
        })
    }
}

module.exports = new AdmController