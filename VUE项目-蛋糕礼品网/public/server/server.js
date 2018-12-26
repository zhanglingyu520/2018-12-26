let http = require('http');
let fs = require('fs');
let url = require('url');
let sliders = require('./sliders');
let home1 = require('./home1');
let sliderscy= require('./sliderscy');
function read(cb) { //用来读取数据的
    fs.readFile('./cake.json','utf8',function (err,data) {
        if(err || data.length === 0){
            cb([]); // 如果有错误 或者文件没长度 就是空数组
        }else{
            cb(JSON.parse(data)); // 将读出来的内容转化成对象
        }
    })
}
function read1(cb) { //用来读取数据的
    fs.readFile('./coffee.json','utf8',function (err,data) {
        if(err || data.length === 0){
            cb([]); // 如果有错误 或者文件没长度 就是空数组
        }else{
            cb(JSON.parse(data)); // 将读出来的内容转化成对象
        }
    })
}
function read2(cb) { //用来读取数据的
    fs.readFile('./iceCream.json','utf8',function (err,data) {
        if(err || data.length === 0){
            cb([]); // 如果有错误 或者文件没长度 就是空数组
        }else{
            cb(JSON.parse(data)); // 将读出来的内容转化成对象
        }
    })
}
function read3(cb) { //用来读取数据的
    fs.readFile('./gift.json','utf8',function (err,data) {
        if(err || data.length === 0){
            cb([]); // 如果有错误 或者文件没长度 就是空数组
        }else{
            cb(JSON.parse(data)); // 将读出来的内容转化成对象
        }
    })
}
function read4(cb) {
    fs.readFile('./pic.json','utf8',function (err,data) {
        if(err || data.length === 0){
            cb([]); // 如果有错误 或者文件没长度 就是空数组
        }else{
            cb(JSON.parse(data)); // 将读出来的内容转化成对象
        }
    })
}
function read5(cb) {
    fs.readFile('./book.json','utf8',function (err,data) {
        if(err || data.length === 0){
            cb([]); // 如果有错误 或者文件没长度 就是空数组
        }else{
            cb(JSON.parse(data)); // 将读出来的内容转化成对象
        }
    })
}
function write(data,cb) {
    fs.writeFile("./book.json",JSON.stringify(data),"utf-8",(err)=>{
        if(err){cb({code:0,msg:"写入失败"})}
        cb();
    })
}
let ary = [];
http.createServer((req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1');
    if(req.method=="OPTIONS") return res.end();/*让options请求快速返回*/
    let {pathname,query} = url.parse(req.url,true); // true把query转化成对象
    if(pathname === '/sliders'){
        res.setHeader('Content-Type','application/json;charset=utf8');
        return res.end(JSON.stringify(sliders));
    }
    if(pathname === '/home1'){
        res.setHeader('Content-Type','application/json;charset=utf8');
        return res.end(JSON.stringify(home1));
    }
    if(pathname === '/sliderscy'){
        res.setHeader('Content-Type','application/json;charset=utf8');
        return res.end(JSON.stringify(sliderscy));
    }
    if(pathname==='/cake'){
        read(function (cakes) {
            cakes = cakes.slice(0,12);
            res.setHeader('Content-Type','application/json;charset=utf8');
            res.end(JSON.stringify(cakes));
        });
        return
    }
    if(pathname==='/coffee'){
        read1(function (coffees) {
            res.setHeader('Content-Type','application/json;charset=utf8');
            res.end(JSON.stringify(coffees));
            // console.log(coffees);
        });
        return
    }
    if(pathname==='/gift'){
        read3(function (gifts) {
            res.setHeader('Content-Type','application/json;charset=utf8');
            res.end(JSON.stringify(gifts));
        });
        return
    }
    if(pathname==='/iceCream'){
        read2(function (iceCreams) {
            res.setHeader('Content-Type','application/json;charset=utf8');
            res.end(JSON.stringify(iceCreams));
        });
        return
    }
    if(pathname==='/info'){
        let id = parseInt(query.id);
        if (req.method=="GET"){
            if(!isNaN(id)){ // 查询一个
                read(function (cakes) {
                    let cake = cakes.find(item=>item.id===id);
                    res.setHeader('Content-Type','application/json;charset=utf8');
                    res.end(JSON.stringify(cake));
                })
            }
        }
        return
    }
    if(pathname==='/info1'){
        let id = parseInt(query.id);
        let str = null;
        if (req.method=="GET"){
            if(!isNaN(id)){ // 查询一个
                read4(function (pic) {
                    let pic1 = pic.find(item=>item.pic_id===id);
                    res.setHeader('Content-Type','application/json;charset=utf8');
                    res.end(JSON.stringify(pic1));
                })
            }
        }
        return;
    }
   /* if (pathname==="parts"){
        read(function (cakes) {
            cakes = cakes.slice(12,cakes.length+1);
            res.setHeader('Content-Type','application/json;charset=utf8');
            res.end(JSON.stringify(cakes));
        });
        return
    }*/
    if (pathname==="/car"){
        let id = parseInt(query.id);
        if (req.method=="GET"){
            if(!isNaN(id)&&id){ // 查询一个
                read(function (cakes) {
                    let cake = cakes.find(item=>item.id===id);
                    ary.push(cake);
                    if (ary.length>1){
                        for (var i = 0;i<ary.length-1;i++){
                            for (var j = i+1;j<ary.length;j++){
                                if (ary[i].id===ary[j].id){
                                    ary.splice(j,1);
                                    ++ary[i].number
                                }
                            }
                        }
                    }
                    write(ary,function () {
                            res.setHeader('Content-Type','application/json;charset=utf8');
                            res.end(JSON.stringify(ary));
                    })
                });
            }else{
                read5(function (cakes) {
                    res.setHeader('Content-Type','application/json;charset=utf8');
                    res.end(JSON.stringify(cakes));
                });
            }
        }else if (req.method=="DELETE"){
            read5(function (cakes) {
                if (!isNaN(id)&&id){

                    cakes = cakes.filter(item=>{
                        return item.id != id
                    });
                    ary = [];
                    write(cakes,function () {
                        res.end(JSON.stringify({cakes})); // 删除返回空对象
                    });
                }else {

                    cakes.splice(0,ary.length+1);
                    console.log(cakes);
                    ary = [];
                    write(cakes,function () {
                        res.end(JSON.stringify({cakes})); // 删除返回空对象
                    });
                }
            });
        }else if(req.method=='PUT'){
            if(id){// 获取了当前要修改的id
                /*let str = '';
                req.on('data',chunk=>{
                    str+=chunk;
                });
                req.on('end',()=>{
                    let book = JSON.parse(str);//book要改成什么样子
                    console.log(book);*/
                console.log(3,query.num);
                    if (query.num==1){
                        console.log(1,query.num);
                        read5(function (books) {
                            books=books.map(item=>{
                                if(item.id === id){ // 找到id相同的那一本书
                                    --item.number
                                }
                                return item; // 其他书正常返回即可
                            });
                            write(books,function () { // 将数据写回json中
                                res.end(JSON.stringify(books));
                            })
                        });
                    }else {
                        console.log(2);
                        read5(function (books) {
                            books=books.map(item=>{
                                if(item.id === id){ // 找到id相同的那一本书
                                    ++item.number
                                }
                                return item; // 其他书正常返回即可
                            });
                            write(books,function () { // 将数据写回json中
                                res.end(JSON.stringify(books));
                            })
                        });
                    }

                //})
            }
        }
        return
    }
}).listen(8080,()=>{
    console.log("8080");
});
