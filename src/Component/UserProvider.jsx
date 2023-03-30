import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const UserContext = createContext()
const UseContext = (props) => {
    const [user,setUser] = useState([

        {
         id:1,
         name :'Yousuf Ahmed',
         Mobile : '018240272**',
         Email : 'yousuf@gmail.com',
         company : 'It Company',
         Position : 'React Developer',
        },

        {
             id:2,
             name :'Sumon Ahmed',           
             Mobile : '018240272**',
             Email : 'sumon@gmail.com',
             company : 'software Company',
             Position : 'Php Developer',
            },


    ])
   
  return (
    <div>
        <UserContext.Provider value={[user,setUser]}>
            {props.children}
        </UserContext.Provider>
    </div>
  )
}

export default UseContext