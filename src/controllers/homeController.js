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

const postCreateUser= async(req,res)=>{

    let email=req.body.Mail;
    let name=req.body.myname;
    let city=req.body.City;
    let [results,fields]= await connection.query(
        `INSERT INTO User (email, name, city) VALUES(?,?,?)`, [email,name,city] 
    );
    console.log(results)
    res.send('created user succeed')
}


const getCreate=(req,res)=>{
    res.render('create.ejs')
}       
module.exports={
    getHomepage,
    getPhucVy,
    getTest,
    postCreateUser,
    getCreate
}