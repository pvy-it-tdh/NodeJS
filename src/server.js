require('dotenv').config();
const express = require('express');//commonjs
const path=require('path');
const configViewEngine=require('./config/viewEngine');
const webRoutes=require('./routes/web');
const connection=require('./config/database');

const app = express()//app express
const port = process.env.PORT; //port
const hostname=process.env.HOST_NAME;


// config req.body
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//config template engine
configViewEngine(app);

// Khai báo route
app.use('/',webRoutes)




// simple query
connection.query(
  'SELECT * FROM User',
  function(err, result,fields)
  {
    console.log(result);
  }
);
app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
