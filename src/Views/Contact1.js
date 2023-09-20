import React, { useEffect, useState } from 'react'

export default function Contact1({userData}) {
    const [data,setdata] = useState([])
  
    useEffect(()=>{
      fetch("http://localhost:24105/list",{
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

<input type="submit" value="Dashboard"/>


    </nav>
    <div class="colorbg">
    <table class="table1">
    <thead>
        <tr>
            <th class="table1">Name</th> 
            <th class="table1">Subject</th>
            <th class="table1">Email</th>
            <th class="table1">How can help you</th>
        
        </tr>
    </thead>
             <tbody>
                  {data.map((i)=>{
                    return(
                      <tr>
                        <td className='table1'>{i.name}</td>
                        <td className='table1'>{i.subject}</td>
                        <td className='table1'>{i.Email}</td>
                        <td className='table1'>{i.how}</td>
                        
                      </tr>

                    )
                  })}
                  </tbody>
                  </table>
</div>
<div class="submit">
    <p>© Copyright Craft Shop</p>
</div>
    
   
    </>
  )
}
