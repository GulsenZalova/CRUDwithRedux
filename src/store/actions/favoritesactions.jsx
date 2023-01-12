export const favoritesAction={
    addFav:(payload)=>{
        return {type:"ADDFAV",payload}
    },
    deleteFavaorite:(payload)=>{
        return {type:"DELETE",payload}
    },
    deleteAll:(payload)=>{
        return {type:"DELETEALL",payload}
    }
}