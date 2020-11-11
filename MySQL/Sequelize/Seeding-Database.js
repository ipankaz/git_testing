const {db,Course,Center,Batch,Season,Teacher} = require('./Assossiation.js');

const seed = async()=>{
    try{
 db.sync({alter:true})
 .then(()=>{
     console.log("Data Inserted");
 })
 await Center.bulkCreate([
     {id:'01',name:'Pitampura Center',city:'New Delhi'},
     {id:'02',name:'Jahangirpur center',city:'New Delhi'},
     {id:'03',name:'Dehradun center',city:'Dehradun'},
     {id:'04',name:'Panipat Center',city:'Panipat'},
     {id:'05',name:'Sonipat Center',city:'Sonipat'},
 ],
 {
     ignoreDuplicates:true
 })
 await Season.bulkCreate([
     {id:'01',name:'Summer'},
     {id:'02',name:'Fall'},
     {id:'03',name:'Winter'},
     {id:'04',name:'Spring'},
 ],{
     ignoreDuplicates:true
 })
 await Course.bulkCreate([
     {id:'01',name:'Web Development'},
     {id:'02',name:'Android Development'},
     {id:'03',name:'Machine Learning'},
     {id:'04',name:'Deep Learning'},
 ],{
     ignoreDuplicates:true
 })
    }
    catch(err){
        console.error(err);
    }
}

seed()

module.exports={
    seed
}