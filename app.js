// app.js
// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generatePassword = require('./generate_password')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//localhost
app.get('/', (req, res) => {
  res.render('index')

})

app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(options)
  res.render('index', { password: password, options: options })
})
//JavaScript ES6 中，當物件的屬性名稱和屬性要帶入的變數名稱相同時，可以簡寫出屬性名稱就好 { password, options }

app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}`)
})