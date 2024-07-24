import express from 'express';
import connectDB from './db/connectdb.js';
import web from './routes/web.js'
const app = express();
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017"


// json
app.use(express.json())

connectDB(DATABASE_URL)


// load
app.use('/student',web)
app.listen(port,()=>{
    console.log(`server listening on ${port}`);
})