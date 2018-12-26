const express =require('express'),
    route=express.Router(),
    {writeFile}=require('../utils/promiseFS'),
    PERSONAL_PATH='./json/personal.json',
    utils=require('../utils/utils');
//=>把临时存储在SESSION中的STORE 信息，增加到JSON 文件中（登陆后）
function add_temp_store(req,res){
    let storeList=req.session.storeList || [];
    if(storeList.length===0) return;
    storeList.map(item=>{
        return utils.ADD_STORE(req,res,parseFloat(item));
    });
    Promise.all(storeList).then(()=>{
        console.log(storeList);
    });
    req.session.storeList=[];


}

route.post('/login',(req,res)=>{
    let {name,password}=req.body || {};
    password=password.substr(4,24).split('').reverse().join('');
    //=>req.personalDATA之前读取的PERSONAL中的信息：登陆校验就是把用户传递的信息到总数据中查找，找到就代表登陆成功...
    const item=req.personalDATA.find(item=>{
        return (item.name==name || item.email==name ||item.phone==name) && item.password===password;
    });
    if(item){
        //=>登陆成功:把当前登陆用户的ID 存储到SESSION上（如果SESSION上有用户信息就代表登陆成功）
        req.session.personID=parseFloat(item.id);
        add_temp_store(req,res);
        res.send({code:0,msg:'OK!'});
        return;
    }
    res.send({code:1,msg:'NO55'});
});
route.get('/login',(req,res)=>{
    const personID=req.session.personID;
    if(personID){
           res.send({code:0,msg:'OK!'});
           return;
    }
    res.send({code:1,msg:'NO!'})
});
route.post('/register',(req,res)=>{
    //=>先准备一套新用户数据模型
    let personInfo={
        id:req.personalDATA.length ===0?1:(parseFloat(req.personalDATA[req.personalDATA.length-1].id)+1),
        name:'',
        email:'',
        phone:'',
        password:'8376ac810bb9f231d28fcf1f',
    };
    req.body.password=req.body.password.substr(4,24).split('').reverse().join('');
        personInfo={...personInfo,...req.body};
    req.personalDATA.push(personInfo);
        writeFile(PERSONAL_PATH,req.personalDATA).then(()=>{
            req.session.personID=parseFloat(personInfo.id);
            add_temp_store(req,res);
            res.send({code:0,msg:'OK!'})}).catch(()=>{res.send({code:1,msg:'NO!'})});
});
route.get('/info',(req,res)=>{
    const personID=req.session.personID;
    if(personID){
        let personInfo=req.personalDATA.find(item=>{
            return parseFloat(item.id)==personID;
        });
        personInfo.password=null;
        res.send({code:0,msg:'OK!',data:personInfo});
    };
    res.send({code:1,msg:'NO!',data:null});
});
route.get('/out',(req,res)=>{
    //退出登陆
    req.session.personID=null;
    res.send({code:0,msg:'OK!'});
});
module.exports=route;

