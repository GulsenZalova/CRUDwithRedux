import Customers from './pages/Customers'
import AddCustomer from './pages/AddCustomer'
import Favorites from './pages/Favorites'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <header>
         <nav>
          <ul>
            <li><Link className='link' to={"/"}>Customers</Link></li>
            <li><Link className='link' to={"/addcustomers"}>AddCustomer</Link></li>
            <li><Link className='link' to={"/addfavorites"}>AddFavorites</Link></li>
          </ul>
         </nav>
      </header>
    <Routes>
      <Route path='/' element={<Customers/>}></Route>
      <Route path='/addcustomers' element={<AddCustomer/>}></Route>
      <Route path='/addfavorites' element={<Favorites/>}></Route>
    </Routes>

    </div>
  )
}

export default App
