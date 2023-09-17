let express = require('express');
let app = express();
let hbs = require('hbs');
let path = require('path');

app.set('view engine','hbs');
app.set('views',path.join('../views'));
app.use(express.static(path.join('../public')));

app.get('/',(req, res) => {
    res.render('main');
})

app.listen(process.env.PORT || 6035);
console.log('Server is started at the port no 6035...');