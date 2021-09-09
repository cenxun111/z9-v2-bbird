const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        // required: true,
        trim: true,
        maxlength: 25
    },
    website:{
        type:String,
        default:"http://www.bbirdsy.xyz/"
    },
    avatar:{
        type:String,
        default:"https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png"
    },
    username:{
        type:String,
        required:true,
        unique:true,
        trim: true,
        unique: true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email",
          ],
    },
    about:{
        type:String,
        default:'',
        maxlenght:200
    },
    password:{
        type:String,
        required:true
    },
    // following:{
    //     type:
    // }
},
    {timestamps:true}
);

module.exports = mongoose.model("User",userSchema)