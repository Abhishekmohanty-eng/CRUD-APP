const express=require('express')
const app=express()

const route=require('./routes/router')

const bodyparser=require('body-parser')
const multer=require('multer')
 app.use(bodyparser.json())
 app.use(bodyparser.urlencoded({extended:true}))
 app.use(multer().any())

const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://ABHI:1rgLK1SKF60O1lEF@cluster0.skx8q.mongodb.net/crud-app',{ useNewUrlParser: true })
    .then(() => console.log('MongoDB is connected!!'))
    .catch(err => console.log(err))


app.use('/',route)

app.listen(process.env.PORT || 3044, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});