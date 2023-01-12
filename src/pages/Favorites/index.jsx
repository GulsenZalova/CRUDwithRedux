import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { favoritesAction } from '../../store/actions/favoritesactions';
function Favorites() {
 const favorites=useSelector(state=>state.favoritesReducer)
 const dispatch=useDispatch()
  return (
    <div>
          <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>CompanyName</th>
              <th>ContactName</th>
              <th>ContactTitle</th>
              <th><button className='deleteBTN' onClick={()=>dispatch(favoritesAction.deleteAll())}>All Delete</button></th>
            </tr>
          </thead>
          <tbody>
              {/* {
              favorites && (
                favorites.map((item,i)=> (
                  <tr key={i}>
                      <td>{item.id}</td>
                      <td>{item.companyName}</td>
                      <td>{item.contactName}</td>
                      <td>{item.contactTitle}</td>
                      <td><button className='deleteBTN' onClick={()=>dispatch(deleteFavaorite(item))}>Delete</button></td>
                  </tr>
                ))
              ) } */}
             
          </tbody>
        </table>
    </div>
  )
}

export default Favorites
