 import { combineReducers, createStore } from "redux";
import { employeeReducer, singleEmployeeData } from "./DelEdi";
import { composeWithDevTools} from 'redux-devtools-extension'

 const mainReducer=combineReducers({
    employee:employeeReducer,
    singleEmployeeData,
 })


 const store=createStore(mainReducer,composeWithDevTools())
 export default store;
 