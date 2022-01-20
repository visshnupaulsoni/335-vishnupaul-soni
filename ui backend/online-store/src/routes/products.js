
import express from 'express';
import { 
   getproducts ,getproductById,
   postproducts,putproduct,deleteproduct,postReview,
   getReviews
} from '../controllers/products.js';
import {authenticate,authorize} from '../middleware/auth.js';
// create a router
const router = express.Router();

router.get( '/', getproducts);

router.get( '/:_id', getproductById);
router.post( '/', postproducts);
router.post('/',authenticate,authorize(['adimin']),postproducts);
router.post('/:_id',authenticate,authorize(['adimin']),putproduct);
router.post('/:_id',authenticate,authorize(['adimin']),deleteproduct);

router.put( '/:_id', putproduct);
router.delete('/:_id',deleteproduct);
router.get('/:_id/reviews',getReviews);
router.post('/:_id/reviews',authenticate,authorize(['customer']),postReview);


   // res.send( 'We will send the list of products' );

// Send a message when client requests for /users
//router.get( '/users', ( req, res ) => {
//    res.send( 'We will send the list of users' );
//});

// module.exports = router

// exporting single item in ES2015 export syntax
export default router;