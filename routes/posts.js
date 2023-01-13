const express = require('express');
const router = express.Router();


const Post = require('../model/Post');


//get all post
router.get('/', async (req,res) => {
   try {
     //find -> this a method that gets all the data
     const posts = await Post.find()
     res.json(posts)
   } catch (err) {
    res.status(400).json({msg:err})
   }
})

//save a post
router.post('/', async (req,res) => {
   const post = new Post({
     title:req.body.title,
     description:req.body.description,
   });

   try {
    const savedPost = await post.save()
    res.status(200).json(savedPost)
   } catch (err) {
    res.json({message: err})
   }
})

//get a specific post
router.get('/:id', async (req,res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.json(post)
    } catch (err) {
        res.status(400).json({msg:err})
    }
})


//update a specific post 
router.put('/:id', async (req,res) => {
    try {
        const updatedPost = await Post.updateOne(
            {_id : req.params.id},
            {$set : {
                title:req.body.title,
                description:req.body.description,
            }}
        )
        res.status(200).json(updatedPost)
    } catch (err) {
        res.status(400).json({msg:err})
    }
})

//delete a post

router.delete('/:id', async (req,res) => {
   
    try {
        const deletePost = await Post.deleteOne({ _id : req.params.id})
        res.json(deletePost)
    } catch (err) {
        res.status(400).json({msg:err})
    }
})



module.exports = router
