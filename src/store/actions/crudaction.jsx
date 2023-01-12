export const crudAction = {
    add: () => {
        return { type: "ADD" }
    },
    delete: () => {
        return { type: "DELETE" }
    },
    getAll: () => {
        return async (dispatch) => {
            fetch('https://northwind.vercel.app/api/customers')
                .then(res => res.json())
                .then(data => {
                    dispatch({type:'getAll', payload: data})
                })
        }
    },
    getAdd:(payload)=>{
        return async (dispatch)=>{
            fetch('https://northwind.vercel.app/api/customers',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(payload),
        })
            .then(()=>
                {dispatch({type:'getPost', payload: data})})
        }
    }
}