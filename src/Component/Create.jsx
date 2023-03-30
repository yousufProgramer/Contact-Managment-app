import React from 'react'
import './Style/Create.css'
import { FcBusinessContact } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { UserContext } from './UserProvider';
import { useState } from 'react';
import { CreateHeader } from './CreateHeader';
import { NavBar } from './NavBar';
export const Create = () => {
  const [user,setUser] = useContext(UserContext)
  const [error,setError] = useState(false)
  const[name,setName] = useState('')
  const[id,setId] = useState('')
  const [Email, setEmail] = useState('')
  const [Mobile, setNumber] = useState('')
  const[company,setCompany] = useState('')
  const [Position,setPosition] = useState('')

   const handleID = (e)=>{
    
    setId(e.target.value)
   }

  const handleName = (e)=>{
     setName(e.target.value)
  }

  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }

  const handleNumber = (e)=>{
     setNumber(e.target.value)
  }
  
  const handleCompany = (e)=>{
    setCompany(e.target.value)
  }

  const handleposition = (e)=>{
       setPosition(e.target.value)
  } 

  const Addcreate = (e) => {
    e.preventDefault()
    if(id.length == 0 || name.length == 0 || Email.length == 0 || Mobile.length == 0 || company.length == 0 || Position.length == 0){
      setError(true)
    }else{
      setUser([...user,{id,name,Email,Mobile,company,Position}])
    } 
      setId('')
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
         <label className='my-2' htmlFor="id">Id: </label>
         <input type="number" 
            className='form-control ' 
            placeholder='Enter your id' 
            id='id'
            value={id}
            onChange = {handleID}
            />
             {id.length <= 0 ? <i>ID Cannot be Empty </i> : ''}<br/>
             <label className='my-2' htmlFor="id">Name: </label>
            <input type="text" 
            className='form-control ' 
            placeholder='Enter your name' 
            id='name'
            value={name}
            onChange = {handleName}
            />
            {name.length <= 0 ? <i>Name Cannot be Empty </i> : ''}<br/>
            <label className='my-2' htmlFor="email">Email: </label>
            <input type="email" 
            className='form-control '
             placeholder='Enter your email' 
            id='email'
            value={Email}
            onChange = {handleEmail}
            />
            {Email.length <= 0 ? <i>Email Cannot be Empty</i> : ' '}<br/>
             <label className='my-2' htmlFor="number">Phone Number: </label>
            <input type="number"
             className='form-control ' 
             placeholder='Enter your number'    
            id='number'
            value={Mobile}
            onChange = {handleNumber}
            />
             {Mobile.length <= 0 ? <i>Mobile Cannot be Empty</i> : ' '}<br/>
            <label className='my-2' htmlFor="company">Company Name: </label>
            <input type="text"
             className='form-control ' 
             placeholder='Enter your company name'    
            id='company'
            value={company}
            onChange = {handleCompany}
            />
            {company.length <= 0 ? <i>Company Cannot be Empty</i> : ' '}<br/>
            <label className='my-2' htmlFor="position">Position Name: </label>
            <input type="text"
             className='form-control ' 
             placeholder='Enter your position'    
            id='position'
            value={Position}
            onChange = {handleposition}
            />
           {Position.length <= 0 ? <i>Position Cannot be Empty</i> : ' '}<br/>
         <Button  className='m-2' variant="primary" type="submit">
          Create
          </Button>

          <Link to= '/'><Button className='m-2' variant="primary" type="submit">
         Home
          </Button></Link>

         </form>

      </div>
    </div>
  )
}
