const { json }=require("body-parser");
const models=require("../models");
const bcryptjs=require("bcryptjs");
const db=require("../dbb/db")
const singup_teacher=(req,res) => {
    models.user_info.findOne({ where: { email: req.body.email } }).then((result) => {
            if (result) {
                res.json({
                    message: "email alrady exist ",
                });
            } else {
                bcryptjs.genSalt(10,(err,salt) => {
                    bcryptjs.hash(req.body.password,salt,function (err,hash) {
                        const user={
                            first_name: req.body.first_name,
                            last_name: req.body.last_name,
                            email: req.body.email,
                            phone: req.body.phone,
                            password: hash,
                            rolee: "doc",
                            age: req.body.age,
                            gender: req.body.gender,
                        };
                        models.user_info.create(user).then((result) => {
                                    user_id= result.id
                                    address= req.body.address
                                    bsc= req.body.Nationality
                                    university= req.body.university
                                    deatalis= req.body.previous_work
                                    url_bsc= req.file.filename
                                
                                var sql= "insert into teachers (user_id,address,nation,university,deatalis,url_bsc) values ('" + user_id + "','" + address + "','" + bsc + "','" + university + "','" + deatalis + "','" + url_bsc + "')"
                                db.query(sql,(error,resss)=>{
                                    if(error){console.log(error)}
                                    else{
                                        return res.json({
                                                        valid:true,
                                                        Login: true,
                                                        username: req.session.username,
                                                    });
                                    }
                                })
                            })
                            .catch((error) => {
                                console.log(error+"fsdfs")
                                res.status(500).json({
                                    message: "somthing wrong1111"+error,
                                });
                            });
                    });
                });
            }
        })
        .catch((error) => {
            console.log(error+"sfsdf")
            res.status(500).json({
                message: "somthing wrong 500"+error,
            });
        });
};
const singup_user=(req,res) => {
    models.user_info.findOne({ where: {email:req.body.Email} }).then((result) => {
            if (result) {
                return res.json({
                    message: "email user alrady exist ",
                });
            } else {
                bcryptjs.genSalt(10,(err,salt) => {
                    bcryptjs.hash(req.body.Password,salt,function (err,hash) {
                        const user={
                            first_name: req.body.First_name,
                            last_name: req.body.Last_name,
                            email: req.body.Email,
                            phone: req.body.Phone,
                            password: hash,
                            rolee: "user",
                            age: req.body.Age,
                            gender: req.body.Gender,
                        };
                        models.user_info.create(user).then((result) => {
                                req.session.username=user.email;
                                return res.json({
                                    Login: true,
                                    username: req.session.username,
                                });
                            })
                            .catch((error) => {
                                console.log(err+"after add")
                                return res.json({
                                    valid: false,
                                });
                            });
                    });
                });
            }
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                message: "somthing wrong",
            });
        });
};
function login(req,res) {
    models.user_info.findOne({ where: { email: req.body.email } })
        .then((user) => {
            // a.push(user.first_name)
            if (user==null) {
                return res.json({
                    message: "this email is not exist",
                });
            } else if (user.rolee=="doc") {
                bcryptjs.compare(
                    req.body.password,
                    user.password,
                    function (err,result) {
                        if (result) {
                            req.session.roleee='doc'
                            req.session.username=req.body.email;
                            
                            return res.json({ Login: true, username: req.session.username ,roleee:true});
                        } else {
                            return res.json({
                                message: "incorrect password",
                            });
                        }
                    }
                );
            } else if ((user.rolee="user")) {
                bcryptjs.compare(req.body.password,user.password,function (err,result) {
                        if (result) {
                            sql='select * from courses where owner=?'
                            db.query(sql,[user.email],(err,resu)=>{
                                if (err)console.log(err)
                                // console.log(resu)
                                tips(resu)
                            })
                            // notifcation(user.email)
                            // req.session.roleee='user'
                            req.session.username=user.email;
                            return res.json({ Login: true,username: req.session.username ,roleee:false});

                        } else {
                            return res.status(401).json({
                                message: "incorrect password",
                            });
                        }
                    }
                );
            } else return res.json({ Login: false });
        })
        .catch((error) => {
            return res.json({
                message: "somthing wrong"+error,
            });
        });
}

function logout(req,res) {
    req.session.destroy()    
    res.status(200).json({ message: "ok is done" });
}

function show_users(req,res) {
    models.user_info
        .findAll()
        .then((data) => {
            res.status(200).json({ data });
        })
        .catch((err) => res.status(404).json({ err }));
}

const home_owner=(req,res) => {
    if (req.session.username&&!req.session.roleee) {
        models.user_info.findOne({ where: { email: req.session.username } }).then((resp) => {
            sql='select * from courses where owner=?'
            db.query(sql,[req.session.username],(err, result) => {
                if (err) return res.json(err)
                else {
                var sqll='select * from problims LIMIT 3'
                db.query(sqll,(err, resultt) =>{
                    
                    if (err)return res.json(err)
                    else{
                        sql='select* from tip_gen limit 3'
                        db.query(sql,(err,resulttt)=>{
                            if (err) console.log(err)
                            else{
                                return res.json({valid:true,username:resp.first_name,result,resultt,resulttt,resultttt:"you have new notifications"}) 
                        }
                        })
                }})
                }
            })
            }
            )
            .catch((err) => {
                return res.json({ valid: false });
            });
    } else {
        return res.json({ valid: false });
    }
};

const tips =(courss)=>{
var sqll='delete from tip_gen' 
db.query(sqll,(err,result)=>{
    courss.map((u,i)=>{
        var sql='select * from tip'
        db.query(sql,[u.type],(err,result)=>{
            if (err) console.log(err)
            result.map((uu,i)=>{
                
                    var f="the tip for day is " + uu.tip 
                    var sql= "INSERT tip_gen (gen_tip) VALUES('" + f + "')"
                    db.query(sql,(err,result)=>{
                        if(err)console.log(err)
                        return true 
                    })
                
        })
    }
        )
        
        
})
})
}

module.exports={
    singup_user: singup_user,
    login: login,
    show_users: show_users,
    logout: logout,
    singup_teacher: singup_teacher,
    home_owner: home_owner,
};
