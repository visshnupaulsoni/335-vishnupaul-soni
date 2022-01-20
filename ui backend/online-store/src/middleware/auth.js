import jwt from 'jsonwebtoken';
import HttpError from '../utils/HttpError.js';
const authenticate=(req,res,next) => {
    const Authorization =req.heder('Authorization');
    const token = Authorization.split(' ')[1];
    jwt.verify(token,process.env.JWT_SECRET,(err,claims)=>{
        if(err){
            const httpError =new HttpError('your token seem to invalid.',401);
            next(httpError);
            return;
        }
        res.locals.claims =claims;
        next();
    });

};
const authorize =(roles)=> {
    return(req,res,next) =>{
        if(!roles.includes(res.locals.claims.role)){
           const httpError= new HttpError('you do not have sufficient privillage',403);
        next(httpError);
        return;
        }
        next();
    };
};
export{
    authenticate,authorize
};