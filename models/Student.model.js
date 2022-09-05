import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    name: String,
    phone: String, 
    age: Number
});

const Student = mongoose.model('Student', studentSchema);

export {Student}