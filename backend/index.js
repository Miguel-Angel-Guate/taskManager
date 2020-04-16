const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const mongoose = require('./db/mongoose');

/* Route*/

//list Routes


/*
+get/lists
*purpose: Get all lists
*/

app.get('/lists', (req, res) => {
      // we want to return an array of all lthe lists of dataase
});
/** post /lists
 * purpose: create a lists
 * 
*/

app.post('/lists', (req, res) =>{
//HERE I CREATE A NEW LIST and return the lists which include the Id


});
/**
 * 
*/
app.patch('/lists/:id', (req, res) =>{
//to update the list here with the id on the url

})

app.delete('/lists/:id', (req, res) =>{
       //to delete the list here with the id on the url
       
       })




app.use(express.json());
app.listen(PORT,()=>console.log('server running on port '+PORT))
