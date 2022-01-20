import { fetchProducts, fetchProductById 
  ,addProduct,updateproduct,removeProduct,addReview,fetchReviews} from '../services/products.js';

  import HttpError from '../utils/HttpError.js';
  const getproducts = (req, res,next) => {
  //console.log(sort,order,minPrice,minRating,page);

  //convert page to integer ,add spassed/incorrect

  let { sort, order, minPrice, minRating, page, q } = req.query;

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

  fetchProducts(sort, order, pageInt, minPrice, minRating, q)

    .then((products) => {
      res.json(products);
    })
    .catch(err => {
      const httpError =new HttpError (err.message,500);
      next (httpError);
    });
};
const getproductById = (req, res,next) => {
  const { _id } = req.params;
  fetchProductById(_id)
    .then((product) => {
      if(!product)  {
        const httpError =new HttpError('product with given id does not exist',404);
        next(httpError);
        return;
      }
      res.json(product);
    })
    .catch((err) => {
      if(err.kind === 'ObjectId'){
        const httpError =new HttpError('Invali product id',400);
        next(httpError);
      }else{
        const httpError=new HttpError(err.message,500);
        next(httpError);
      }
    });
  };
//router.getproducts=( req, res ) => {
//  res.send( 'We will send the list of products' );
//};
//post /products

const postproducts=(req,res,next)=> {
  const {body}=req;
  console.log(Object.keys(body));
  if(Object.keys(body).length === 0){
    const httpError = new HttpError('Request body is Empty.product details are missing.',400);
    next(httpError);
    return;
  }
 // res.json({
   // message:'wait i will add..'
  //});
  addProduct(body)
  .then(product => {
    res.status(201).json(product);
  })
  .catch(err => {
    const httpError =new HttpError (err.message,400);
    next(httpError);
    //res.json(err.message);
  });
  
};
//put /product/:id
const putproduct = (req,res,next) => {
  const { body } =req;
  const {_id }=req.params;
  //check if the body is an empty object.
  if(Object.keys(body).length === 0){
    const httpError = new HttpError('Request body is Empty.product details are missing.',400);
    next(httpError);
    return;
  }
 
  updateproduct(_id, body)
  .then(product => {
    res.json(product);
  })
  .catch(err => {
    if(err.kind === 'ObjectId'){
      const httpError =new HttpError('invalid  product id',400);
      next(httpError);
    }else{ //DB connection error 
      //internal server error
      const httpError =new HttpError(err.message,500);
      next(httpError);
    }
    //res.json(err.message);
  });
  
};
const deleteproduct = (req,res,next) =>{
  const { _id }=req.params;

  removeProduct(_id)
  .then(()=>{
    res.status(204).json();
  })
  .catch(err => {
    if(err.kind === 'ObjectId') {
      const httpError =new HttpError('invalid  product id',400);
      next(httpError);
    }else{
      const httpError =new HttpError(err.message,500);
      next(httpError);
    }
    //res.json(err.message);
  });
  
};
//post /:_id/reviews
const postReview =(req,res,next) => {
  const {_id} = req.params;
  const {body}= req;
  if(Object.keys(body).length === 0){
    const httpError = new HttpError('Request body is Empty.review details are missing.', 400);
    next(httpError);
    return;
  }
 // res.json({
   // message:'wait i will add..'
  //});
  addReview(_id,body)
  .then(product => {
    res.status(201).json(product);
  })
  .catch(err => {
    const httpError =new HttpError (err.message,400);
    next(httpError);
    //res.json(err.message);
  });
  
};
const getReviews=(req,res,next) => {
  const{_id}=req.parms;
  fetchReviews(_id)
  .then((reviews) =>{
    res.json(reviews);
  })
.catch((err) => {
  const httpError=new HttpError(err.message,500);
  next(httpError);
});
}

export{
  getproducts,getproductById,postproducts,putproduct,
  deleteproduct,postReview,getReviews
}