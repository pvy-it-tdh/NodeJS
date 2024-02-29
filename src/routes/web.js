const express=require('express');
const router=express.Router();
const {getHomepage, getTest, getPhucVy,postCreateUser}=require('../controllers/homeController')


router.get('/',getHomepage);
  
  
  router.get('/thanhhang', getPhucVy);
  
  router.get('/test', getTest);
  router.post('/create-user',postCreateUser);
  module.exports=router;