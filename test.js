const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')
const express = require('express')
const app = express();


const url = "mongodb://127.0.0.1/mydatabase"

mongoose.connect(url,{})
    .then(result => console.log("Connected"))
    .catch(err => console.log(err))


   /** * BlogPost.create({
        title: 'The Coder',
        body: 'If you have been here a long time, you might remember when I went on ITV Tonight to',
        rating : '4.5/5.0'
       
        })
        .then(result => console.log(result))
        .catch(err => console.log(err))

        BlogPost.find({})
        .then(result => console.log(result))
        .catch(err => console.log(err))**/

       /**  BlogPost.find({title:'The Coder'})
        .then(result => console.log(result))
        .catch(err => console.log(err))**/

    /**BlogPost.findByIdAndUpdate('6451f59acc8de21bce875a9f',
    {
          title : "The Programmer"
    })
    .then(result => console.log(result))
    .catch(err => console.log(err))***/
  
   /**  BlogPost.findByIdAndDelete('6451f59acc8de21bce875a9f')
    .then(result => console.log("Deleted"))
    .catch(err=> console.log(err))**/
            

app.listen(9000,()=>{
      console.log("app listenting at 9000")
})



<!DOCTYPE html>
<html lang="en">
    <%- include('layouts/header');-%>
    <body>
        <!-- Navigation-->
        <%- include('layouts/navbar');-%>
        <!-- Page Header-->
        <header class="masthead" style="background-image: url('/assets/img/contact-bg.jpg')">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="page-heading">
                            <h1></h1>
                            <span class="subheading">Have questions? I have answers.</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Main Content-->
        <!-- Main Content -->
<div class="container"> 
    <div class="row">
    <div class="col-lg-8 col-md-10 mx-auto">
    <form action="/posts/store" method="POST">
    <div class="control-group">
    <div class="form-group floating-label-form-group controls">
    <label>Title</label>
    <input type="text" class="form-control" placeholder="Title"
    id="title" name='title' >
    </div>
    </div>
    <div class="control-group">
    <div class="form-group floating-label-form-group controls">
    <label>Description</label>
    <textarea rows="5" class="form-control"
    id="body" name='body' ></textarea>
    </div>
    </div>
    
    <br>
    <div class="form-group">
    <button type="submit" class="btn btn-primary"
    id="sendMessageButton">Send</button>
    </div>
    </form>
    </div>
    </div>
    </div>
    
       
                                    
        <!-- Footer-->
      
        <%- include('layouts/footer');-%>
        <%- include('layouts/scripts');-%>
    </body>
</html>
