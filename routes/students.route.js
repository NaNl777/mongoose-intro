import { Router } from "express";
import {studentsController} from '../controllers/students.controller.js';

const studentsRouter = Router();

studentsRouter.get('/students', studentsController.getStudent)

studentsRouter.delete('/students/:id', studentsController.deleteStudent)

studentsRouter.patch('/students/:id',studentsController.patchStudent)

studentsRouter.post('/students', studentsController.createStudent)

export {studentsRouter}