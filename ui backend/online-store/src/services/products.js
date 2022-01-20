
import mongoose from 'mongoose';
import config from '../utils/config.js';

//const mongoose =require('mongoose');
const product = mongoose.model('product');
const fetchProducts = (sort, order, page, minPrice, minRating, q) => {
    const skipClause = (page - 1) * config.PAGE_SIZE;
    const filterClause = {};

    if (minPrice) {
        filterClause.price = {
            $gte: minPrice
        };
    }
    if (minRating) {
        filterClause.rating = {
            $gte: minRating
        };
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
    return product.find(filterClause)
    .select('name code releaseDate description price ranting image Url')
    .sort(sortClause)
        .skip(skipClause)
        .limit(config.PAGE_SIZE);

};
const fetchProductById = (_id) => {
    return product.findById(_id)
};
const addProduct = (prod) => {
    return product.create (prod);
};
const updateproduct = (_id,newProductDetails) => {
    return product.findByIdAndUpdate(_id,
        newProductDetails,{new:true,runValidators:true});
};
const removeProduct=(_id) => {
    return product.findByIdAndDelete(_id);
};
const addReview=(_id,review) => {
    return product.findByIdAndUpdate(_id,{
        $push:{
            reviews:review
        }
    },
    {
        new:true,
        runValidators:true
    }
    );
};


const fetchReviews =(_id)=>{
    return product
    .findById(_id)
    .select('reviews')
    .then(productReviews =>productReviews.reviews)
}
export {
    fetchProducts,
    fetchProductById,addProduct,updateproduct,
    removeProduct,addReview,fetchReviews
};