import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
function Favorites() {
 const favorites=useSelector(state=>state.favoritesReducer)
  return (
    <div>
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
              {/* {
              favorites && (
                favorites.map((item,i)=> (
                  <tr key={i}>
                      <td>{item.id}</td>
                      <td>{item.companyName}</td>
                      <td>{item.contactName}</td>
                      <td>{item.contactTitle}</td>
                      <td><button className='deleteBTN' onClick={()=>deleteCustomer(item.id)}>Delete</button></td>
                      <td><button className='deleteBTN' onClick={()=>addFavorites(item)}>Favorites</button></td>
                  </tr>
                ))
              ) } */}
             
          </tbody>
        </table>
    </div>
  )
}

export default Favorites
