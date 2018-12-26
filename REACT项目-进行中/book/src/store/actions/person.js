/**
 * Created by WUWEI on 2018/11/13.
 */
import * as TYPES from '../action-types';
import {queryInfo} from '../../api/person';
let person={
        queryBaseInfo(){
            return {
                type:TYPES.PERSON_QUERY_BASE,
                payload:queryInfo()
            }
        }
};
export default person;