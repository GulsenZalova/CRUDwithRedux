function favoritesReducer(state,action){
    if(typeof state==="undefined"){
        return []
    }
    if(typeof state==="ADDFAV"){
        return [...state,action.payload]
    }
    if(typeof state==="DELETE"){
        let deletedFavorite=state.filter((x)=>x.id!==action.payload.id)
        return [...deletedFavorite]
    }
    if(typeof state==="DELETEALL"){
        return []
    }

}
export default favoritesReducer