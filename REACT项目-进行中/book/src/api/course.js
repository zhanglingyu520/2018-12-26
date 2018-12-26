/**
 * Created by WUWEI on 2018/12/18.
 */
import axios from './index';
export function queryBanner(){
    return axios.get('/course/banner');
}
//=>获取课程列表信息
export function queryList(payloads){
    return axios.get('/course/list',{
        params:payloads
    });

}