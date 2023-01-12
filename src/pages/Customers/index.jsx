import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { crudAction } from '../../store/actions/crudaction';
import { favoritesAction } from '../../store/actions/favoritesactions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Customers() {
  let  crud=useSelector((state)=>state.crudReducer)
  let  favorites=useSelector((state)=>state.favoritesReducer)
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(crudAction.getAll())
  }, [])
   
const deleteCustomer=(id)=>{
   fetch(`https://northwind.vercel.app/api/customers/${id}`,{method:"DELETE"})
   .then(res=>res.json())
   .then(data=>dispatch(crudAction.getAll()))
   .then(()=>toast.success("customer deleted"))
}
const addFavorites=(item)=>{
  dispatch(favoritesAction.addFav(item))
}
  console.log(crud)
  return (
    <div>
      <ToastContainer />
       <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>CompanyName</th>
              <th>ContactName</th>
              <th>ContactTitle</th>
            </tr>
          </thead>
          <tbody>
              {
              crud && (
                crud.map((item,i)=> (
                  <tr key={i}>
                      <td>{item.id}</td>
                      <td>{item.companyName}</td>
                      <td>{item.contactName}</td>
                      <td>{item.contactTitle}</td>
                      <td><button className='deleteBTN' onClick={()=>deleteCustomer(item.id)}>Delete</button></td>
                      <td><button className='deleteBTN' onClick={()=>addFavorites(item)}>Favorites</button></td>
                  </tr>
                ))
              ) }
             
          </tbody>
        </table>
    </div>
  )
}

export default Customers
