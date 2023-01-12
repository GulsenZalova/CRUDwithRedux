import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { crudAction } from '../../store/actions/crudaction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AddCustomer() {

  const dispatch = useDispatch()
  const [newCustomer, setNewCustomer] = useState({
    companyName: "",
    contactName: "",
    contactTitle: ""
  })

  const addValues = (e) => {
    // console.log(e.target.value)
    // console.log(e.target.name)
    const name = e.target.name
    const value = e.target.value
    setNewCustomer({
      ...newCustomer,
      [name]: value
    })
    // console.log(newCustomer)
  }

  const addCuctomer = (e) => {
    e.preventDefault()
    // console.log("add:" ,newCustomer)
    dispatch(crudAction.getAdd(newCustomer))
    toast.success("customer added")
  }

  return (
    <>
      <div className='container'>
        <ToastContainer />
        <form onSubmit={addCuctomer} className="form">
          <label htmlFor="companyName">CompanyName</label>
          <input type="text" id='companyName' name='companyName' onChange={addValues} />
          <label htmlFor="contactName" >ContactName</label>
          <input type="text" id='contactName' name='contactName' onChange={addValues} />
          <label htmlFor="contactTitle" >ContactTitle</label>
          <input type="text" id='contactTitle' name='contactTitle' onChange={addValues} />
          <button className='addBTN' >Add</button>
        </form>
      </div>
    </>
  )
}

export default AddCustomer