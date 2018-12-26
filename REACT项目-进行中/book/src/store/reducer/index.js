import {combineReducers} from 'redux';
import person from './person';
import course from './course';

export default combineReducers({
	person,
	course
});
// let reducer=combineReducers({
// 	person,
// 	course
// });
// export default reducer;