import { combineReducers } from "redux";
import showsReducer from './showsReducer';

const allReducers = combineReducers({
    account: showsReducer
});

export default allReducers;
