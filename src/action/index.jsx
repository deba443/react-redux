
export const edit=(data)=>{
    return(
        {
            type:'EDIT',
            // payload:id,
            payload:data
        }
    )
}

export const delet=(id)=>{
    return(
        {
            type:'DELETE',
            payload:id

        }
    )
};
export const add=(data)=>{
    return(
        {
            type:'ADD',
            payload:data
        }
    )
}
export const update=(data)=>{
    return(
        {
            type:'UPDATE',
            payload:data
        }
    )
}
export const cleanup=()=>{
    return(
        {
            type:'CLEANUP'
        }
    )
}