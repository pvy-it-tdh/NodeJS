const express=require('express');
const router=express.Router();
const {getHomepage,getThanhHang, getTest}=require('../controllers/homeController')


router.get('/',getHomepage);
  
  
  router.get('/thanhhang', getThanhHang)
  
  router.get('/test', getTest)
  module.exports=router;