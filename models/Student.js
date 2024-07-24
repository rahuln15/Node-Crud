import mongoose from "mongoose";


const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true
    },
    fees:{
        type:mongoose.Decimal128,
        required: true,
        validate:(value)=>value>=5000.5
    }
})

const StudentModel = mongoose.model("Student",StudentSchema)

export default StudentModel;