import React from 'react'
import { useState,useEffect } from 'react'

export default function Changepass21({userData}) {
    const [data,setdata] = useState([])
  
useEffect(()=>{
  fetch("http://localhost:24104/list",{
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
    
    <div class="colorbg">
    <table class="table1">
    <thead>
        <tr>
          
            
            <th className="table1">Email</th>
            <th className="table1">Password</th>
            
        </tr>
    </thead>
             <tbody>
             {data.map((i)=>{
                    return(
                      <tr>
                  <td className='table1'>{i.email}</td>
                  <td className='table1'>{i.password}</td>
</tr>
 )
})}
                </tbody>

</table>
</div>   
    
    
    
    
    </>
  )
}
