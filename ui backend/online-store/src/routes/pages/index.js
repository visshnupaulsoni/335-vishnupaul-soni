import express from 'express';
import { getHomepage} from '../../controllers/pages/index.js';
const router =express.Router();
router.get('/',getHomepage);
   // res.render('index');
//});
export default router;