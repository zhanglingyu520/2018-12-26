/**
 * Created by WUWEI on 2018/11/13.
 */
import * as TYPES from '../action-types';
import {queryBanner,queryList} from '../../api/course';

let course={
    queryBanner(){

/*        return async dispatch=>{
           let bannerData=await queryBanner();
            dispatch({
                type:TYPES.COURSE_QUERY_BANNER,
                bannerData
            })
        };*/
        return{
            type:TYPES.COURSE_QUERY_BANNER,
            payload:queryBanner()
        }
    },
    queryList(payloads){
     /*  return async dispatch=>{
           let result=await queryList(payload);
           dispatch=>({
              type:TYPES.COURSE_QUERY_LIST,
              result
           });
       }*/
     let {limit=10,page=1,type='all',flag='push'}=payloads;
     return{
         type:TYPES.COURSE_QUERY_LIST,
         payload:queryList({limit,page,type})
     }
    }

};
export default course;