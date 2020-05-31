const express = require('express')
const router = express.Router()
const Book = require('../models/bookEntity')

router.get('/', async(req, res) =>{

    try{
        const books = await Book.find()
        res.json(books)
        console.log('Get request')
        res.send('Get request')
    }catch (err)
    {
        res.send('Error'+ err)
    }
   
})

router.get('/:id', async(req,res) => {
    try{
           const book = await Book.findById(req.params.id)
           res.json(book)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.post('/', async(req, res) =>{

    const book = new Book({
        title:req.body.title,
        author:req.body.author,
        year:req.body.year

    })

    try{
      
        const bookOne = await book.save()
        res.json(bookOne)
    }catch (err)
    {
        res.send('Error'+ err)
    }
})
router.patch('/:id',async(req,res)=> {
    try{
        const book = await Book.findById(req.params.id) 
        book.author = req.body.author
        const a1 = await book.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

    
})
router.delete('/:id',async(req,res)=> {
    try{
        const book = await Book.findById(req.params.id) 
        book.author = req.body.author
        const a1 = await book.remove()
        res.json('Removed')   
    }catch(err){
        res.send('Error')
    }

    
})
module.exports = router
