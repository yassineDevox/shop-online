const express = require('express');
const app = express();
const body = require('body-parser');

const mongoose = require('mongoose');
const Thing = require('./models/thing');




mongoose.connect('mongodb+srv://username:passwordYassPass123@cluster0.yavfl.mongodb.net/cluster0?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



app.use(body.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.post('/api/stuff', (req, res) => {
   
    console.log(req.body);
    delete req.body._id;
   
    const thing = new Thing({
      ...req.body
    });
   
    thing.save()
    .then(()=> res.status(201).json({message:"objet thing added successfuly"}))
    .catch((error)=> res.status(400).json({error}));
  });

  
app.get('/api/stuff', (req, res) => {

  Thing.find()
  .then((things)=>res.status(200).json(things))
  .catch((err)=>res.status(404).json({err}))

});

app.get('/api/stuff/:id',(req,res)=>{

  // console.log(req.params.id);
  Thing.findOne({_id:req.params.id})
  .then((thing)=>res.status(200).json(thing))
  .catch((error)=>res.status(404).json({error}))

});

app.put('/api/stuff/:id',(req,res)=>{
  
  Thing.updateOne({_id:req.params.id},{...req.body,_id:req.params.id})
  .then(()=>res.status(201).json({message:"thing updated successfully"}))
  .catch(err=>res.status(400).json({err}))

})

app.delete('/api/stuff/:id',(req,res)=>{
  Thing.deleteOne({_id:req.params.id})
  .then(()=> res.status(200).json({message:"Thing has been delete !"}))
  .catch((err)=>res.status(400).json({err}))
})

module.exports = app;
