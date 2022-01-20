import mongoose  from 'mongoose';
const userSchema =new mongoose.Schema({


    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        require:true

    },
    role:{
        type:String,
        requires:true,
        enum:['customer','admin'],
        default:'customer'

    }

});
mongoose.model('user',userSchema)