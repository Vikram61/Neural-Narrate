import express, { json } from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import connectDB from "./configs/db.js";
import router from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express()
config()

//Middlwares
app.use(cors({    origin: 'https://neural-narrate-client.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true }))
app.use(json())

await connectDB()
//Routes
app.get('/',(req,res)=>res.send("API is working"))
app.use('/api/admin',router)
app.use('/api/blog',blogRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))