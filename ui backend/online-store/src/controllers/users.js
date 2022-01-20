 
import { fetchUsers, fetchUsersByid,addUser,updateUser,removeUser }from '../services/users.js'
import HttpError from '../utils/HttpError.js';
const getusers=( req, res ) => {
    let { sort, order, page, q,role } = req.query;

  // convert page to integer, and set a default of 1 if it is not passed / incorrect
  let pageInt = parseInt(page); // parseInt( 'hello' ) -> NaN, parseInt( undefined ) -> NaN

  if (isNaN(pageInt)) {
    pageInt = 1;
  }

  // if sort field is not passed, we assume it is sorted by name
  if (!sort) {
    sort = 'name';
  }

  // if sorting order is not passed, we assume it is sorted in ascending order
  if (!order) {
    order = 'asc';
  }
    console.log(res.local.claims)
    fetchUsers(sort, order, pageInt, q,role)
    
    .then(users =>{
        res.json(users);
    })
    .catch(err => {
      const httpError = new HttpError( err.message, 500 );
        next( httpError );
        
    });
  };

      //rout
      const getUsersById = (req, res,next) => {
        const { _id } = req.params;
        fetchUsersByid(_id)
          .then((user) => {
            if( !user ) {
              // 404 -> Not Found
              const httpError = new HttpError( 'user with given id does not exist', 404 );
              next( httpError );
              return;
          }
    
          res.json(user);
        })
        .catch((err) => {
          if( err.kind === 'ObjectId' ) {
              // 400 -> BAD REQUEST
              const httpError = new HttpError( 'Invalid user id', 400 );
              next( httpError );
          } else {
              // eg. DB connection error
              // 500 -> Internal Server Error
              const httpError = new HttpError( err.message, 500 );
              next( httpError );
          }
        });
    };
  
  
    const postUser = (req, res, next) => {
      const { body } = req;
      console.log( Object.keys( body ) );
    
      // check if the body is an empty object
      if( Object.keys( body ).length === 0 ) {
        const httpError = new HttpError( 'Request body is empty. Product details are missing.', 400 );
        next( httpError );
        return;
      }
    
      addUser( body )
        .then(user => {
          res.status( 201 ).json( user );
        })
        .catch(err => {
          const httpError = new HttpError( err.message, 400 );
          next( httpError );
        });
    };
    
    // PUT /products/:_id
    const putUser = ( req, res, next ) => {
      const { body } = req;
      const { _id } = req.params;
    
      // check if the body is an empty object
      if( Object.keys( body ).length === 0 ) {
        const httpError = new HttpError( 'Request body is empty. user details are missing.', 400 );
        next( httpError );
        return;
      }
    
      updateUser( _id, body )
        .then(user => {
          res.json( user );
        })
        .catch(err => {
          if( err.kind === 'ObjectId' ) {
            // 400 -> BAD REQUEST
            const httpError = new HttpError( 'Invalid user id', 400 );
            next( httpError );
          } else {
              // eg. DB connection error
              // 500 -> Internal Server Error
              const httpError = new HttpError( err.message, 500 );
              next( httpError );
          }
        });
    };
    
    const deleteUser = ( req, res, next ) => {
      const { _id } = req.params;
    
      removeUser( _id )
        .then(() => {
          res.status(204).json();
        })
        .catch(err => {
          if( err.kind === 'ObjectId' ) {
            // 400 -> BAD REQUEST
            const httpError = new HttpError( 'Invalid user id', 400 );
            next( httpError );
          } else {
              // eg. DB connection error
              // 500 -> Internal Server Error
              const httpError = new HttpError( err.message, 500 );
              next( httpError );
          }
        });
    };
     


   // res.json(fetchUsers());
   //res.send('we will sned list of user')
export{
    getusers,getUsersById,postUser,putUser,deleteUser
  //getUsersById
};