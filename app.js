const express = require('express');
const app = express();
const body = require('body-parser');

const mongoose = require('mongoose');
const Thing = require('./models/thing');
const thing = require('./models/thing');




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

  app.post('/api/stuff', (req, res, next) => {
   
    console.log(req.body);
    delete req.body._id;
   
    const thing = new Thing({
      ...req.body
    });
   
    thing.save()
    .then(()=> res.status(201).json({message:"objet thing added successfuly"}))
    .catch((error)=> res.status(400).json({error}));
  });

  
app.get('/api/stuff', (req, res, next) => {

  Thing.find()
  .then((things)=>res.status(200).json(things))
  .catch((err)=>res.status(404).json({err}))

});

app.get('/api/stuff/:id',(req,res,next)=>{

  // console.log(req.params.id);
  thing.findOne({_id:req.params.id})
  .then((thing)=>res.status(200).json(thing))
  .catch((error)=>res.status(404).json({error}))
  
});

module.exports = app;
