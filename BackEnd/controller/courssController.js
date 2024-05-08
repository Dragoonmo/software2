const { DATE, where }=require("sequelize")
const models=require("../models")
const validateor=require('fastest-validator')
const date = require('date-and-time')
const vaccien=require("../models/vaccien")
const db=require("../dbb/db")

function show_all_courss(req,res) {
    if(req.session.username){
    const sql=' SELECT * from courses WHERE courses.owner=?'
    db.query(sql,[req.session.username], (err, result) => {
        if (err) return res.json(err)
        return res.json({result,valid:true}) + console.log()
    }
    )
}
else 
return res.json({valid:false})
}
function show_all_courss_ad(req,res) {
    const sql='SELECT * from courses WHERE owner=? '
    db.query(sql,[req.session.username], (err, result) => {
        if (err) return res.json(err)
        return res.json({result,valid:true})
    }
    )
}

function add_courss(req,res) { 
    if(req.session.username){
console.log(req.body.Name)
console.log(req.body.Additional_details)
console.log(req.body.Years)
sql ="insert into courses (name,year,Additional_details,owner) values ('"+ req.body.Name+"','"+ req.body.Years+"','"+ req.body.Additional_details+"','"+req.session.username+"')"
db.query(sql,(error,result)=>{
    if(error){console.log(error)}
    else{
        res.json({valid:true,result})
        
    }
})
}
else return res.json({valid:false})
}
function destroy_cours(req,res) { //tested
   
        const sql = "delete from courses where id =?"
        const id = req.params.id
        db.query(sql, [id], (err, result) => {
            if (err){ return res.json(err)}
            else {
                res.json({result,valid:true})
            }
        })
    
}

function show_courss_id(req,res){
    if(req.session.username){
    const id = req.params.id;
    const sql='SELECT * from courses WHERE courses.id=? '
   
    db.query(sql,[id],(err, result) => {
        if (result.length==0) return res.json({value:true})
        else{
        
            return res.json({result ,valid:true})
    
    }
    })
}
else return res.json({valid:false})
}


function show_all__req(req,res) {
    const sql='SELECT * from courses WHERE courses.owner=? AND id not in  (select courss_id_f from follow_t ) '
    db.query(sql,[req.session.username], (err, result) => {
        if (err) return res.json(err)
        return res.json({result,valid:true})
    }
    )
}
function show_av_courss(req,res){
    sql='select * from courss_det'
    db.query(sql,(error,result)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result})
            
        }
    })
}
function add_new_coursss(req,res){
    sql ="insert into courss_det (name_cours) values ('"+ req.body.Course+"')"
    db.query(sql,(error,result)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result})
        }
    })


}
module.exports={
    add_courss: add_courss,
    destroy_cours: destroy_cours,
    show_all_courss: show_all_courss,
    show_courss_id:show_courss_id,
    show_all_courss_ad:show_all_courss_ad,
    show_all__req:show_all__req,
    show_av_courss,
    add_new_coursss
    
}