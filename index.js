import mongoose from "mongoose";
import express from "express";
// import { studentsRouter } from "./routes/students.route.js";
import { studentsRouter } from "./routes/students.route.js";

const app = express();
app.use(express.json())
app.use(studentsRouter)

const port = 3000;

const start = async () => {
   try {
     await mongoose.connect("mongodb+srv://zelim:Ru95@cluster0.09gco.mongodb.net/test")
     console.log('Connected...')
     app.listen(port, () => {
     console.log('Server has been started..')
})
   } catch (error) {
     console.log('Возникла ошибка!=(')
   }
}

start();
