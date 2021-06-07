const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');

let today = new Date();

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

let currentDate = today.toLocaleDateString("en-US", options);

app.use(bodyParser.urlencoded({extended:true}));

let datas = [];

app.post('/', (req, res) => {
    let data = null;
    if(req.body.task != "") {
        data = req.body.task
    }
    datas.push(data);
    res.redirect('/');
})

app.get('/', (req, res) => {
    res.render('index', {
        currentDate : currentDate,
        data : datas
    })
})



app.listen(3000, () => {});
