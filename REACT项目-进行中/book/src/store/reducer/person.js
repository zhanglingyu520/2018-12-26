/**
 * Created by WUWEI on 2018/11/13.
 */
import * as TYPES from '../action-types';
let INIT_STATE={
    baseInfo:null
};
export default function person(state=INIT_STATE,action){
     state=JSON.parse(JSON.stringify(state));
    let payload={};
    switch (action.type){
        case TYPES.PERSON_QUERY_BASE:
            payload=action.payload;
            if(parseFloat(payload.code)===0){
                state.baseInfo=payload.data;
            }else{
              return  null;
            }

         // parseFloat(payload.code)===0 ? state.baseInfo=payload.code:null;
            break;
    };
    return state;
};