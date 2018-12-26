// let express=require('express'),
//     bodyParser=require('body-parser'),//body-parser解析表单元素提交的数据
//     session=require('express-session'),//express-session内置了cookie-parser
//     FileStore=require('session-file-store')(session),
//     path=require('path');
// let app=express();
// app.use(bodyParser.urlencoded({extended:false}));//解析成类似name='xue'&age='8'这种格式
// app.use(bodyParser.json());//解析成对象{name:'xue',age:8}
// //一.通过中间件对模板进行设置
// //1.模板的文件夹
// app.set('views',path.join(__dirname,'public'));
// //2.设置模板的后缀 html
// app.set('view engine','vue');
// //3.用ejs渲染后缀是html的模板
// app.engine('vue',require('ejs').__express);
//
// //二.处理静态资源(js,css,image等)
// app.use(express.static(path.join(__dirname,'public')));
//
// //三.使用session中间件,req.session 获取
// app.use(session({
//     name:"sKey",//session数据保存在cookie里的key
//     secret: 'xue',//设置cookie的密钥
//     store: new FileStore,//使用session-file-store中间件就是new
//     saveUninitialized: false,// 是否自动保存未初始化的会话，建议false
//     resave: false,// 是否每次都重新保存会话，建议false
//     cookie: {
//         maxAge: 100 * 1000  // 有效期，单位是毫秒
//     }
// }))
// //四.处理路由中间件
// //判断用户有没有登录,通过loginUser来判断,第一次登录时把用户名保存在req.session.loginUser里
// app.get("/",(req,res)=>{
//     console.log(333);
//     let loginUser=req.session.loginUser;
//     //let isLogin=!!loginUser;//!!相当于转成布尔类型
//     //把对象传给personCenter这个模板
//     /*res.render('login',{
//         isLogin,
//         name:loginUser||""
//     });*/
//     console.log(loginUser);
//     if(loginUser){
//         console.log(3);
//     }
// });
// let users=require('./users');
// function findUser(name,pwd){//客户端提交过来的用户名和密码
//     let user=users.find((item)=>{
//         /*console.log(item);
//         console.log(item.name == name && item.password==pwd);*/
//         return item.name==name && item.password==pwd
//     });
//     //console.log(user);
//     return user
// }
// app.post("/login",(req,res)=>{
//     //把找到的用户名保存在req.session.loginUser里
//
//     let myUser=findUser(req.body.name,req.body.password);
//     req.session.loginUser=myUser.name;
//     console.log(11,path);
//     res.sendFile('MessageCenter.vue',{root:path.join(__dirname,'/src/components')})//{}里是message.html的详细路径
// });
// app.post("/message-center",(req,res)=>{
//     //把找到的用户名保存在req.session.loginUser里
//
//     let myUser=findUser(req.body.name,req.body.password);
//     req.session.loginUser=myUser.name;
//     console.log(11,path);
//     res.sendFile('MessageCenter.vue',{root:path.join(__dirname,'/src/components')})//{}里是message.html的详细路径
// });
// /*app.get('/logout',(req,res)=>{
//     //要消除session,cookie,跳转到根目录上
//     //可以直接用这种方式清除req.session.loginUser=null
//     //但是这里session保存在了本地,所以用req.session.destroy清除
//     req.session.destroy((err)=>{
//         if(err){
//             res.send({msg:'退出失败'});
//             return
//         }
//         res.clearCookie('sKey');//这个算是session-file-store的bug,没有清除cookie所以要手动清除
//         res.redirect('/');//自动跳转到/的接口走里面的逻辑
//     })
// })*/
// app.listen(8180,()=>{
//     console.log('8180 is ready');
// })
