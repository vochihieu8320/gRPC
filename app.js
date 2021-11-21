const express = require('express');
const db = require('./src/db/db');
const routes = require('./src/http_server/route/index');

const app = express();
app.use(
    express.urlencoded({
      extended: true
    })
  )
app.use(express.json())
//connect db


const port = process.env.http_server_port || 4000
routes(app);
app.listen(port, ()=>{
    console.log(`http server listen at http://localhost:${port}`);
})

