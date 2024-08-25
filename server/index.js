const express = require('express');
const cors = require('cors');


const app = express();
const firebaseRoute = require('./src/routes/firebaseRoute');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send("<h1>This is only for testing</h1>")
})


app.use("/api",firebaseRoute);

app.listen(8000,()=>console.log(`server running at http://localhost:8000`));