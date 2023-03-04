import express from "express";
import bodyParser from "body-parser";
import  Dotenv  from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
//import bookRouter from "./routes/bookRouter";
import  cors from 'cors';
import {readdirSync} from 'fs';

Dotenv.config();

const app=express();
//ap5IOuogIfvnABPW
//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

//routes
//app.use("/api",bookRouter)

//autoload routes
readdirSync('./routes').map((r)=>
app.use('/api',require(`./routes/${r}`)))

//db              
mongoose.connect('mongodb+srv://admin:ap5IOuogIfvnABPW@cluster0.qyxmr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>console.log('DB Connected'))
.catch((err)=>console.error('DB Connection is failed',err))

// listen
const port=3031||8000;
app.listen(port,()=>console.log(`sever is running on ${port}`))
