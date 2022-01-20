import mongoose from "mongoose";
import config from '../utils/config.js';

const user= mongoose.model('user');
const fetchUsers =(sort, order, page, q,role)=>{
    
    const skipClause = (page - 1) * config.PAGE_SIZE;
    const filterClause = {};
    if(role){
        filterClause.role = role;
    }
    if (q) {
        filterClause.description = {
            $regex: q,
            $options: 'i'//ignore case
        }
    }

    console.log(filterClause);
    const sortClause = {
        [sort]: order == 'desc' ? -1 : 1
    };
    return user
    .find()
   . Select('-password')
   .sort(sortClause) .skip(skipClause).limit(config.PAGE_SIZE);

};
const fetchUsersByid = (_id) => {

    return user.findById(_id)

};


const addUser = ( User ) => {
    return user.create( User );
  };
  
  const updateUser = ( _id, newUserDetails ) => {
    return user.findByIdAndUpdate( _id, newUserDetails, { new: true } );
};

const removeUser = ( _id ) => {
  return user.findByIdAndRemove( _id );
};


export{
    fetchUsers,fetchUsersByid,addUser,updateUser,removeUser
};