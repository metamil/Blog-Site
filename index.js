const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const BlogPost = require('./models/BlogPost')
const fileUpload = require('express-fileupload')

app.use(fileUpload())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.use(express.static('public'))

const url = "mongodb://127.0.0.1/mydatabase"

mongoose.connect(url,{})
    .then(result => console.log("Connected"))
    .catch(err => console.log(err))


app.listen(5000, () => {
    console.log('App listening on port 5000')
})


/*app.get('/',(req,res)=>{

   // res.sendFile(path.resolve(__dirname, 'pages/index.html'))
   res.render('index');
     
})*/

app.get('/',async (req,res)=>{
    const blogposts = await BlogPost.find({})
    res.render('index',{
            blogposts
    });
    console.log(blogposts)
    })

app.get('/create',(req,res)=>{

    //res.sendFile(path.resolve(__dirname, 'pages/about.html'))
    res.render('create')
})

app.get('/contact',(req,res)=>{
      // res.sendFile(path.resolve(__dirname,'pages/contact.html'))
      res.render('contact')
})

app.get('/post/:id',async (req,res)=>{

      const blogpost = await BlogPost.findById(req.params.id)

      res.render('post',{
          blogpost
      })


})

app.get('/post/new',(req,res)=>{
     res.render('about');
})

app.post("/posts/store",(req,res) => {
        console.log(req.body)

        BlogPost.create(req.body)
        .then(result => console.log(result))
        .catch(err => console.log(err))

        res.redirect('/');
})


    

/**app.post('/posts/store', (req,res)=>{
    let image = req.files.image;
    image.mv(path.resolve(__dirname,'public/img',image.name),async (error)=>{
    await BlogPost.create(req.body)
    res.redirect('/')
    })
    })**/
    




