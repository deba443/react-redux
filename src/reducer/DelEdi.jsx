
const delEdi=(state=[],action)=>{
    switch(action.type){
        case 'del':return state.push(action.data)
        case 'edit':return state.push(action)
        case 'add':return
    }
}
export default delEdi