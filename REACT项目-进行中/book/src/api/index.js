/*
*真实的REACT/ VUE项目中，我们会把所有向服务器发送具体请求的操作写在API 中（不写在组件内部，方便请求处理的统一管理）
  *
  * INDEX:是把AXIOS或者FETCH等进行初始处理或者二次封装的地方
  * */
import axios from 'axios';
import Qs from 'qs';

axios.defaults.baseURL='http://localhost:8080';
axios.defaults.withCredentials=true;//=>允许跨域（并允许携带COOKIE）
axios.defaults.transformRequest=(data={})=>Qs.stringify(data);//=>把POST/PUT请求主体传递给服务器的内容统一处理为x-www-url-encode格式
axios.interceptors.response.use(result=>result.data);//=>相应拦截器：把服务器返回的信息中相应主体内容拦截返回，以后再then中获取的结果及时主体内容
export default axios;