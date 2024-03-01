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
    // console.log(req.body)
    let email=req.body.Mail;
    let name=req.body.myname;
    let city=req.body.City;
    // console.log("email:",email,"name:",name,"city:",city)
    connection.query(
       ` INSERT INTO 
        User (email, name, city)
        VALUES(?,?,?)`,
        [email,name,city],
        function(err,result){
            console.log(result);
            res.send('created user succeed!')
        }
    );
}
module.exports={
    getHomepage,
    getPhucVy,
    getTest,
    postCreateUser
}