//请求接口数据
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8989";
//拦截响应的数据
axios.interceptors.response.use(function (response) {
    return response.data;
});



//7.获取轮播图的图片
export let getSliderImgs = ()=>{
    return axios.get("/sliders");
}

export  let getlistcy=()=>{
    return axios.get('/home1');
}

export  let getlogin=()=>{
    return axios.get('/login');
}
//
// export let cake =(id)=>{
//     return axios.get(`/car?id=${id}`)
// };
// export let removeCake =(id)=>{
//     return axios.delete(`/car?id=${id}`)
// }
// export let getInfo = (id)=>{
//     return axios.get(`/info?id=${id}`)
// };
// export let getInfo1 = (id)=>{
//     return axios.get(`/info1?id=${id}`)
// };