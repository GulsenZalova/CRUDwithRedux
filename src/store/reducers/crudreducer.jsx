
function crudReducer(state,action) {
    if(typeof state==="undefined"){
                return []
            }
            if( action.type==="ADD"){
                return [...state,action.payload]
            }
            if (action.type==="DELETE"){
                let deletedItem=state.filter((x)=>x.id!=action.payload.id)
                return [...deletedItem]
            }if(action.type==="getAll"){
                return [...action.payload]
            }if(action.type==="getPost"){
                return [...action.payload]
            }
}

export default crudReducer