 import { combineReducers, createStore } from "redux";
import { employeeReducer } from "./DelEdi";
import { composeWithDevTools} from 'redux-devtools-extension'

 const mainReducer=combineReducers({
    employee:employeeReducer,
 })

// const mainReducer=combineReducers({
//     delEdi
// })

//  const commonData={
//     employee:{
//         items:[
//             {
//                 name:'deba',email:'debaprasad443@gmail.com',title:'frontend-devloper',role:'user'

//             }
//         ]
//     }
//  }
 const store=createStore(mainReducer,composeWithDevTools())
 export default store;
 