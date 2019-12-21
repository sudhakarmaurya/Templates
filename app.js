///THIS FILE IS MY SERVER

const express = require('express')
const app = express()
const port = 3000

app.set('view engine','pug')
app.set('views','./templates')

app.get('/',function(req, res){
    res.render('index.pug',{pageTitile:"PUG"})
})

app.get('/page2',function(req, res){
    res.render('./html_layout/page2.pug',{pageTitile:"PUG"})
})
// app.get('/page2',function(req, res){
//     res.send('page2')
// })
app.get('/page2/page3',function(req, res){
    res.send('now I am on page 3')
})

app.listen(port, (function() { return console.log(`Example app listening on port ${port}!`)}))
