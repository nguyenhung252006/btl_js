const express = require('express')
const { engine } = require('express-handlebars');
const path = require('path');
const app = express()
const port = 3000



//express-handlebars
app.engine('hbs', engine({ extname: '.hbs', layoutsDir: false }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './views'));



app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})