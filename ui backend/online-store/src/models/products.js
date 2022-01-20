import  mongoose  from 'mongoose';
import reviewSchema from './reviews.js';
const productSchema = new mongoose.Schema ({
    reviews:{
        type:[reviewSchema],
    },
name:{
    type:String,
    require:true,
    unique:true
},
code:{
    type:String,
    require:true,
    unique:true
},
realeaseDate:{
    type:Date,
    require:true,
    default:Date.now
},
description:{
    type:String,
    require:true
},
rating:{
    type:Number,
    require:true,
    min:0,
    default:4
},
imageUrl:{
    type:String,
    require:false
}
});
//registerthe model
mongoose.model('product',productSchema);