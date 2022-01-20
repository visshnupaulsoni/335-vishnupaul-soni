
import express from 'express';
import { getproductpage } from '../../controllers/pages/products.js';

const router = express.Router();

router.get( '/', getproductpage)


export default router;