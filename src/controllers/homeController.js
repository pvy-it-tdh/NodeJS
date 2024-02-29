const connection=require('../config/database')

const getHomepage=(req,res)=>{
    return res.render('home.ejs')
}
const getPhucVy=(req,res)=>{
    res.send(' Phuvy') 
}
const getTest=(req,res)=>{
    res.render('sample.ejs')
}

const postCreateUser=(req,res)=>
{
    res.send('create user')
}
module.exports={
    getHomepage,
    getPhucVy,
    getTest,
    postCreateUser
}