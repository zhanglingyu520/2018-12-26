import Vue from "vue";
import Router from "vue-router";
import Gift from "./components/Gift.vue";
import Car from "./components/Car.vue";
// import Car from "./components/Car.vue";
import Detail from "./components/Detail.vue";
import MessageCenter from "./components/MessageCenter";
import Register from "./components/Register";
import Login from "./components/Login";
import PassportLost from "./components/PassportLost";
import Home from "./components/Home.vue";
import Cake from "./components/Cake.vue";
import Coffee from "./components/Coffee.vue";
import IceCream from "./components/IceCream.vue";
import Card from "./components/Card.vue";
// import Card from "./components/Card.vue";
//四.处理路由中间件
//判断用户有没有登录,通过loginUser来判断,第一次登录时把用户名保存在req.session.loginUser里

Vue.use(Router);
//引入组件
/*import Home from "./components/Home.vue";
import List from "./components/List.vue";
import Detail from "./components/Detail.vue";
import Add from "./components/Add.vue";*/
//代码分割按需加载
let routes = [
    {path:"/home",component:Home},
    {path: "/cake", component: Cake},
    {path: "/coffee", component: Coffee},
    {path: "/iceCream", component: IceCream},
    {path: "/gift", component: Gift},
    {
        path: "/register",
        name: "register",
        component: Register
    },
    {
        path: "/message-center",
        name: "message-center",
        component: MessageCenter
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path:"/car/:id",
        name:"car",
        component:Car
    },
    {path:"/detail/:id",component:Detail,name:"detail"},
    //{path:"/detail/:id",component:Detail,name:"detail"},
    {
        path: "/passport-lost",
        name: "passport-lost",
        component: PassportLost
    },

   {path:"/card",component:Card,name:"card"},
    {path:"*",redirect:"/home"}
];
let router = new Router({
    routes
});
export default router;
