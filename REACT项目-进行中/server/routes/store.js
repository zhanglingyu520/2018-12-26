const express =require('express'),
    route=express.Router(),
    {writeFile} = require('../utils/promiseFS'),
    STORE_PATH='./json/store.json',
    utils=require('../utils/utils');


//=>增加购物车
route.post('/add',(req,res)=>{
    let personID=req.session.personID,
        {courseID}=req.body;//传递的课程ID。我就是要把这个
    courseID=parseFloat(courseID);

    //=>已登录状态下，把信息直接存储到JSON中即可
    if(personID){
        utils.ADD_STORE(req,res,courseID).then(()=>{
            res.send({code:0,msg:'OK!'});
        }).catch(()=>{
            res.send({code:1,msg:'NO!'})
        });
        return;

    }
    //=>未登录状态下，临时存储到SESSION中，等到下一次登录成功，直接把信息存储到文件中（并且清除SESSION中的信息）
    !req.session.storeList?req.session.storeList=[]:null;
    req.session.storeList.push(courseID);
    res.send({code:0,msg:'OK!'});
});
route.post('/remove',(req,res)=>{
    let personID=req.session.personID,
        {courseID=0}=req.body;
    courseID=parseFloat(courseID);route.post('/add',(req,res)=>{})
    if(personID){
        req.storeDATA=req.storeDATA.filter(item=>{
            return parseFloat(item.courseID)==courseID;
        });
        writeFile(STORE_PATH,req.storeDATA).then(()=>{res.send({code:0,msg:'OK!'})}).catch(()=>{res.send({code:1,msg:'NO!'})});
        return;
    }
    !req.session.storeList?req.session.storeList=[]:null;
    req.session.storeList=req.session.storeList.filter(item=>{
        return parseFloat(item.courseID)==courseID;
    });
    res.send({code:0,msg:'OK!'});

});
route.post('/info',(req,res)=>{
    let state=parseFloat(req.query.state) || 0,
        personID=req.session.personID,
        storeList=[];
    if(personID){
        req.storeDATA.forEach(item=>{
            if(parseFloat(item.personID)===personID&&parseFloat(item.state)===state){}
        });
    }else{}
    let data=[];
    storeList.forEach(({courseID,storeID}={})=>{
        let item=req.courseDATA.find(item=>parseFloat(item.id)===courseID);
        item.storeID=storeID;
        data.push(item);
    });
    res.send({'msg':'OK!','code':0});
});
route.post('/pay',(req,res)=>{
    let {storeID}=req.body,
        personID=req.session.personID,
        isUpdate=false;
        if(personID){}
    res.send({code:1,msg:'NO LOGIN'});


});

module.exports=route;