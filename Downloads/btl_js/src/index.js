const express = require('express')
const { engine } = require('express-handlebars');
const path = require('path');
const app = express()
const port = 3000
const router = require('./router/index')


//dich jspn
app.use(express.urlencoded({ extended: true }))


//express-handlebars
app.engine('hbs', engine({
  extname: '.hbs', layoutsDir: false,
  helpers: {
    chuyenten: function (chinhanh) {
      if (chinhanh === 'HaNoi') return 'Hà Nội'
      if (chinhanh === 'HCM') return 'Hồ Chí Minh'
      return chinhanh
    },
    dinhdang: function(tien) {
      return Number(tien).toLocaleString('vi-VN')
    },
    chuyentenid: function (id_diachi) {
      if (id_diachi === 1) return 'Hà Nội'
      if (id_diachi === 2) return 'Hồ Chí Minh'
      return id_diachi}
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './views'));

//khai bao thu muc
app.use(express.static('src'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, '../src/app')))
//router
router(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})