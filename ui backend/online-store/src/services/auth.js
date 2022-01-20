import mongoose  from 'mongoose';
const User =mongoose.model('user');
const getUserByCredentials = (credentials) => {
    return User.findOne(credentials);

};
export {
    getUserByCredentials
};