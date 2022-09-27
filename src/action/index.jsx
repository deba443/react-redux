
export const edit=(id)=>{
    return(
        {
            type:'EDIT',
            payload:id
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