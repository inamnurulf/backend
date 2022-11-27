const express = require('express')
const app = express()
const port = 4000
const missionsrouter = require('./src/routes/mission.js');
const bodyParser = require('body-parser');


app.use(bodyParser.json())//karena request berupa json
const mongoose = require('mongoose')


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTONS,PATCH,SENT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})
app.use('/', missionsrouter)

//connect to DB
mongoose.connect('mongodb+srv://teamproject:teamproject@teamproject.o3q3l2p.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    //listening port
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  })
  .catch((err) => {
    console.log(err)
  });

