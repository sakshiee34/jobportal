import mongoose from 'mongoose';

const userschema = new mongoose.Schema({
    profilepic: { type: String },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: Number },
    resume: { type: String },
    higherdegree: { type: String },
    skills: [],
    experience: { type: String },
    currentcompany: { type: String },
    currentrole: { type: String },
    noticeperiod: { type: Number },
    prefferedlocation: { type: String },
    currentlocation: { type: String },
    currentctc: { type: Number },
    expectedctc: { type: Number },
    isadmin: { type: Boolean, default: false },
    createAt: { type: Date, default: Date.now },
    updateteAt: { type: Date, default: Date.now },
})

const usermodel = mongoose.model("users", userschema);
export default usermodel