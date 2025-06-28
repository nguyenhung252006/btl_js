const connection = require('../connection/connection')

class admListController {
    show(req,res,next) {
        res.render("adm-list")
    }

    render(req,res,next){
        const sql = `SELECT ten, gia, mota, id_diachi FROM menu`
        connection.query(sql,(err,results) => {
            if(err){
                return next(err)
            }
            res.render('adm-list', {data: results})
        })
    }
}

module.exports = new admListController