

const getHomepage=(req,res)=>{
    res.send('Hello World! & nodeJS')
}
const getThanhHang=(req,res)=>{
    res.send(' Phuvy') 
}
const getTest=(req,res)=>{
    res.render('sample.ejs')
}
module.exports={
    getHomepage,
    getThanhHang,
    getTest
}