
export const employeeReducer=(state=[],action)=>{
    // console.log(state,action)
    switch(action.type){
        case 'DELETE':{
            state=[...state.filter((user)=>action.payload != user.id)]
            return state
            
        }
        case 'EDIT':{
            let user;
            user=state.filter((user)=>action.payload == user.id)
        }
        case 'ADD':{
            // console.log('add action data',action,state)
            state=[...state,action.payload]
            return state
        }
        // default:return state
    }
    return state
}