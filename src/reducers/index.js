import { combineReducers } from 'redux';
import InputReducer from './InputReducer';
import CalcReducer from './CalcReducer';

export default combineReducers({
    input: InputReducer,
    calculate: CalcReducer
});
