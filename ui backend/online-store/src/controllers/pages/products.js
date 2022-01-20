import { fetchProducts } from "../../services/products.js";

const getproductpage=(req,res,next) => {
    fetchProducts()
    .then(products => {
        res.render('products',{
            products:products
        });


    });
    };
export { 
    getproductpage
};