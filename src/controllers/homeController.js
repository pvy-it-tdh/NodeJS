const connection=require('../config/database')
const{getAllUsers}= require('../services/CRUDService')
const getHomepage= async(req,res)=>{
    let results= await getAllUsers();
    return res.render('home.ejs', {listUsers:results})
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
const getUpdatePage= async(req,res)=>{
    const userId=req.params.id;
    let [results, fields]=await connection.query('select * from User')
    console.log(">> req params: ", req.params.id,userId)
    res.render('edit.ejs')
}     
module.exports={
    getHomepage,
    getPhucVy,
    getTest,
    postCreateUser,
    getCreate,
    getUpdatePage
}