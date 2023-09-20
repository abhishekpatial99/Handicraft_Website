import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Alluser({userData}) {
  const [data,setdata] = useState([])
  
useEffect(()=>{
  fetch("http://localhost:24112/list",{
    method:"GET",
  
})
.then((res)=>res.json())
.then((data)=>{
  console.log(data,"userData")
  setdata(data.data)
})
},[])

  return (
    <>
    <nav class="nav2">
        <button title="logout">User</button>
        <NavLink to={'/admin/Dashboard'} ><input type="submit" value="Dashboard"/></NavLink>
    
        
        
            </nav>
    <div class="colorbg">
    <table class="table1">
    <thead>
        <tr>
            <th class="table1">First Name</th>
            <th class="table1">Last Name</th>
            <th class="table1">Email</th>
            <th class="table1">Contact</th>
            <th class="table1">Password</th>
            <th class="table1">Confirm Password</th>
            <th class="table1">Address</th>
            <th class="table1">Zip</th>
        </tr>
    </thead>
             <tbody>
                  {data.map((i)=>{
                    return(
                      <tr>
                        <td class="table1">{i.firstName}</td>
                        <td class="table1">{i.lastName}</td>
                        <td class="table1">{i.email}</td>
                        <td class="table1">{i.contact}</td>
                        <td class="table1">{i.password}</td>
                        <td class="table1">{i.confirmpassword}</td>
                        <td class="table1" >{i.address}</td>
                        <td class="table1">{i.zip}</td>
                      </tr>

                    )
                  })}
                 
                </tbody>
              </table>
            
</div>

    
    
    </>
  )
}
