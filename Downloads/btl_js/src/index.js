const express = require('express')
const { engine } = require('express-handlebars');
const path = require('path');
const app = express()
const port = 3000
const router = require('./router/index')



//express-handlebars
app.engine('hbs', engine({ extname: '.hbs', layoutsDir: false }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './views'));

//khai bao thu muc
app.use(express.static(path.join(__dirname, 'public')));
app.use('/react', express.static(path.join(__dirname, 'views/react/dist')));

//router
router(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})