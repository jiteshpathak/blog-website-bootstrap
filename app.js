const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")


const app = express()

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    // Assuming posts is an array to store blog posts
    res.render('index');
});
const port = 3000

app.listen(port, ()=> console.log(`Server listening on port ${port}!`))