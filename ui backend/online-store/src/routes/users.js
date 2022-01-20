import express from 'express';
import { getusers,getUsersById,postUser,putUser,deleteUser } from '../controllers/users.js';
import { authenticate,authorize } from '../middleware/auth.js';

// create a router
const router = express.Router();
router.get('/',authenticate,authorize([admin]),getusers);

router.get( '/', getusers);
router.get( '/:_id', getUsersById);
router.post(   '/'    , postUser );
router.put(    '/:_id', putUser );
router.delete( '/:_id', deleteUser );



   // res.send( 'We will send the list of products' );

   export default router;
