import React from 'react'
import './Style/Create.css'
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { UserContext } from './UserProvider';
import { useState } from 'react';
import { CreateHeader } from './CreateHeader';
import { NavBar } from './NavBar';
export const Edit = () => {

  const [user,setUser] = useContext(UserContext)
  const {id} = useParams();

  const users = user.filter((user)=> user.id == id)

  const[name,setName] = useState(users[0].name)
  const [Email, setEmail] = useState(users[0].Email)
  const [Mobile, setNumber] = useState(users[0].Mobile)
  const[company,setCompany] = useState(users[0].company)
  const [Position,setPosition] = useState(users[0].Position)

  const handleName = (e)=>{
     setName(e.target.value)
     const edit_name = name;
     users[0].name = edit_name
  }

  const handleEmail = (e)=>{
    setEmail(e.target.value)
    const edit_email = Email;
    users[0].Email = edit_email
  }

  const handleNumber = (e)=>{
     setNumber(e.target.value)
     const edit_mobile = Mobile;
     users[0].Mobile = edit_mobile
  }
  
  const handleCompany = (e)=>{
    setCompany(e.target.value)
    const edit_company = company;
     users[0].company = edit_company
  }

  const handleposition = (e)=>{
       setPosition(e.target.value)
       const edit_position = Position;
       users[0].Position = edit_position;
  } 

  const Addcreate = (e) => {
    e.preventDefault()
      setUser(user)
      setEmail('')
      setName('')
      setEmail('')
      setNumber('')
      setCompany('')
      setPosition('')
  }
 
  return (
    <div >
       <NavBar />
        <div className='container mt-3'>
          <CreateHeader />

         <form onSubmit={Addcreate} className = 'w-25 form'>
       
             <label className='my-2' htmlFor="id">Name: </label>
            <input type="text" 
            className='form-control ' 
           
            id='name'
            value={name}
            onChange = {handleName}
            />

            <label className='my-2' htmlFor="email">Email: </label>
            <input type="email" 
            className='form-control '
           
            id='email'
            value={Email}
            onChange = {handleEmail}
            />

             <label className='my-2' htmlFor="number">Phone Number: </label>
            <input type="number"
             className='form-control ' 
                 
            id='number'
            value={Mobile}
            onChange = {handleNumber}
            />

            <label className='my-2' htmlFor="company">Company Name: </label>
            <input type="text"
             className='form-control ' 
                
            id='company'
            value={company}
            onChange = {handleCompany}
            />
            
            <label className='my-2' htmlFor="position">Position Name: </label>
            <input type="text"
             className='form-control ' 
                
            id='position'
            value={Position}
            onChange = {handleposition}
            />
            <Link to= '/'>
         <Button className='m-2' variant="primary" type="submit">
          Save
          </Button>

          <Button className='m-2' variant="primary" type="submit">
         Home
          </Button>
          </Link>
         </form>

      </div>
    </div>
  )
}
