const express = require('express');
const app = express();
const mongoose = require('./db/mongoose');


//load in the mongoose models
// const {  List } = require('./db/models/list.model');
// const { Task } = require('./db/models/task.model')
const { List, Task } = require('./db/models');

app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
      res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
      next();
});

const PORT = process.env.PORT || 3000;


app.use(express.json());



/* Route*/

//list Routes


/*
+get/lists
*purpose: Get all lists
*/

app.get('/lists', (req, res) => {
      // we want to return an array of all lthe lists of dataase
      List.find().then((lists) => {
            res.send(lists);
      }).catch((e) => {
            res.send(e)
      });
})
/** post /lists
 * purpose: create a lists
 * 
*/

app.post('/lists', (req, res) =>{
//HERE I CREATE A NEW LIST and return the lists which include the Id
let title = req.body.title;

let newList = new List({ 
      title
      });
      newList.save().then((listDoc) =>{
            //the full list docuemnt is returned (incl id)
      res.send(listDoc);

      })


});
/**
 * 
*/
app.patch('/lists/:id', (req, res) =>{
//to update the list here with the id on the url
List.findByIdAndUpdate({ _id: req.params.id }, {
      $set: req.body
}).then(()=>{
      res.sendStatus(200);
})


})

app.delete('/lists/:id', (req, res) =>{
       //to delete the list here with the id on the url
       List.findOneAndRemove({
             _id: req.params.id
       }).then((removedListDoc) =>{
             res.send(removedListDoc)
       })
       
       })

/**
 * crud of task
*/
//get Tasks
app.get('/lists/:listId/tasks', (req, res) =>{
      Task.find({
            _listId: req.params.listId
      }).then((tasks)=>{
            res.send(tasks);
      })
})

/**
 * task post
*/
app.post('/lists/:listId/tasks', (req, res) => {

      let newTask = new Task({
            title: req.body.title,
            _listId: req.params.listId
      })
      newTask.save().then((newTaskDoc) => {
            res.send(newTaskDoc);
      })

})


app.listen(PORT, () => {console.log(`the server is running on port ${PORT}`)})