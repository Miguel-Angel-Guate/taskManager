// this file will  connect the logic to the mongodb 
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TaskManager', {
       useNewUrlParser: true,
       useUnifiedTopology:true,   
       useFindAndModify:false
})
.then(()=> console.log('welcome mongoose to my oficce'))
.catch((erro) => console.log(error))


module.exports = {mongoose}
