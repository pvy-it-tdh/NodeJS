const express=require('express');
const router=express.Router();
const {getHomepage, getTest, getPhucVy,postCreateUser,getCreate,getUpdatePage}=require('../controllers/homeController')


  router.get('/',getHomepage);
  router.get('/thanhhang', getPhucVy);
  router.get('/test', getTest);
  router.post('/create-user',postCreateUser);
  router.get('/create',getCreate)
  router.get('/update/:id',getUpdatePage)
  module.exports=router;