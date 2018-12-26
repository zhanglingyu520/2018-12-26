/**
 * Created by WUWEI on 2018/11/13.
 */
import * as TYPES from '../action-types';
let INIT_STATE={
    bannerData:[],
    courseDATA:{
        total:1,
        limit:10,
        page:1,
        data:[]
    }
};
export default function course(state=INIT_STATE,action){
     state=JSON.parse(JSON.stringify(state));
    switch (action.type){
        //获取轮播图数据
        case TYPES.COURSE_QUERY_BANNER:
            let {code,data}=action.payload;
            if(parseFloat(code) === 0){
                state.bannerData=data;
            }
            break;

        //=>获取课程列表信息
        case TYPES.COURSE_QUERY_LIST:

           // let {code,data}=action.payload;

    };
    return state;




};
/*
  limit/page/total/ 每一次从服务器获取信息后都要更新
 * 1、第一次获取数据或者点击加载更多获取其他页的数据，都是把最新获取的数据追加到courseData.data中，limit/page/total可以更换
*
* 2、点击筛选的时候，应该是把获取的数据信息，替换courseData
*
*
* =>DISPATCH派发的时候，还需要传递一个标识：flag=push/replace ,代表是追加还是替换的根据，根据标识完成相应的操作
*
* 3、在nREDUX容器中还需要记录一个信息，当前课程类型：ALL/REACT/VUE...由此更新标题信息
*
* */