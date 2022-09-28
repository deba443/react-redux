
export const employeeReducer=(state=[],action)=>{
    // console.log(state,action)
    switch(action.type){
        case 'DELETE':{
            state=[...state.filter((user)=>action.payload != user.id)]
            return state
            
        }
        case 'EDIT':{
            for(let i=0;i<state.length;i++){
                if(state[i].id===action.payload.id){
                    state[i]=action.payload
                    break
                }
            }
            return state
        }
        case 'ADD':{
            state=[...state,action.payload]
            return state
        }
        // default:return state
    }
    return state
}
export const singleEmployeeData=(state=[],action)=>{
    // console.log(state,state[0])
    switch(action.type){
        case 'UPDATE':{
            state=[action.payload]
            // console.log(state)
            return state

        }
        case 'CLEANUP':{
            state=[]
            return state
        }
    }
    return state

}