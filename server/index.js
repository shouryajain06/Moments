import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
const app = express();
app.use(bodyParser.json({limit : "30mb", extended : true}));
app.use(cors());
app.use(bodyParser.urlencoded({limit :"30mb", extended : true}));

dotenv.config();
//Routes Setup
app.use('/posts', postRoutes);
app.use('/users', userRoutes)
app.get('/', (req,res)=>{
    res.send('Hello to memories');
})
     

//heroku will automatically populate env.PORT
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser : true, 
    useUnifiedTopology : true,
})
.then(()=>app.listen(PORT, ()=>console.log(`SERVER RUNNING ON PORT http://localhost:${PORT}`)))
.catch(ERR=>{
    console.log(ERR.message);
})

