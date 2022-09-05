import { Student  } from "../models/Student.model.js";

const studentsController = {
     getStudent: (req, res) => {
        Student.find({}, function(err, students) {
            if (!err) { 
                res.json(students);
            }
            else {
                throw err;
            }
        });
    },
    
    createStudent:  (req, res) => {
            Student.create({
            name:  req.body.name,
            phone: req.body.phone,
            age: req.body.age
        }).then(() => {
            res.json('Вы успешно добавили студента.')
        }).catch((e) => {res.json(e.message)})
    },

    deleteStudent: (req, res) => {
        Student.findByIdAndRemove(req.params.id).then(() => {
            res.json("Студент удален")
        })

    },

    patchStudent: (req, res) => {
        Student.findByIdAndUpdate(req.params.id,{name: req.body.name, phone: req.body.phone, age: req.body.age} , (err, student) => {
            if(!err){
                res.json("Имя юзера " + student.name + " изменено на " + req.body.name );
            } else {
                throw err
            }
        })
    }
}


export{studentsController}