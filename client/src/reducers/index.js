import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducers';
import leaderReducers from './leaderReducers';
import memberReducer from './memberReducer';
import adminReducer from './adminReducer';

export default combineReducers({
    form:formReducer,
    auth:authReducer,
    leader:leaderReducers,
    member:memberReducer,
    admin:adminReducer
});