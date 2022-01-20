import mongoose from 'mongoose';

//create the models
import '../models/products.js';
import '../models/user.js';

const connectionStr = `mongodb://0.0.0.0:27017/online-store?readPreference=primary`;
//connect() returns apromise object
mongoose
.connect(connectionStr)
.then(() => {
    console.log(`connected to the DB`);
})
.catch(err =>{
    console.log(err.message);
});
