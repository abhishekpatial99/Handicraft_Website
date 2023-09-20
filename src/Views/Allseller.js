import React,{useState,useEffect} from 'react'

export default function Allseller({userData}) {
  const [data,setdata] = useState([])
  
useEffect(()=>{
  fetch("http://localhost:24111/sell",{
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

<input type="submit" value="Home"/>


    </nav>
    <div class="colorbg">
    <table class="table1">
    <thead>
        <tr>
            
            <th className="table1">First Name</th>
            <th className="table1">Last Name</th>
            <th className="table1">Email</th>
            <th className="table1">Phone No.</th>
            <th className="table1">Password</th>
            <th className="table1">Address</th>
            <th className='table1'>Zip</th>
        </tr>
    </thead>
             <tbody>
             {data.map((i)=>{
                    return(
                  <tr>
                    <td className="table1">{i.fname}</td>
                    <td className="table1">{i.lname}</td>
                    <td className="table1">{i.email}</td>
                    <td className="table1">{i.contact}</td>
                    <td className="table1">{i.address}</td>
                    <td className="table1">{i.password}</td>
                    <td className="table1">{i.confirmpassword}</td>
                    <td className='table1'>{i.zip}</td>
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
