import React, { useState } from 'react'
import Navbar from '../Navbar'


export default function Addselleritem() {
  const [sname,setsname]= useState('')
  const [dname,setdname]=useState('')
  const [pname,setpname]=useState('')
  const [pdop,setpdop]=useState('')
  const[pava,setpava]=useState('')
  const [poriginalcost,setporiginalcost]=useState('')
  const[psellingcost,setpsellingcost]=useState('')
  const[uploadimage,setuploadimage]=useState('')
  const collectData =async()=>{
    console.log(sname,pname,pdop,pava,poriginalcost,psellingcost,uploadimage)
    let result = await fetch('http://localhost:24004/',{
      method:'POST',
      body:JSON.stringify({sname,pname,pdop,pava,poriginalcost,psellingcost,uploadimage}),
      headers:{
        'Content-Type' :'application/json'
      }
    })
    result= await result.json()
  console.log(result);
  }

  return (
    <>
    <Navbar/>
    <div class="col-sm-6 mt-5  mx-auto jumbotron">

        <h3 class="text-center">Add New Product</h3>
        <form action="" method="POST">
          <div class="form-group">
            <label for="sname">State Name</label>
            <input type="text" title="Himachal Pradesh" class="form-control" id="sname" name="sname"
            value={sname} onChange={(e) => setsname(e.target.value)}/>
          </div>
          <div class="form-group">
            <label for="dname">Distt. Name</label>
            <input type="text" title="Hamirpur" class="form-control" id="dname" name="dname"
            value={dname} onChange={(e) => setdname(e.target.value)}/>
          </div>
          <div class="form-group">
            <label for="pname">Product Name</label>
            <input type="text" title="Phari Cap" class="form-control" id="pname" name="pname"
            value={pname} onChange={(e) => setpname(e.target.value)}/>
          </div>
          <div class="form-group">
            <label for="pdop">Date of Purchase</label>
            <input type="date" title="**/**/****" class="form-control" id="pdop" name="pdop"
            value={pdop} onChange={(e) => setpdop(e.target.value)}/>
          </div>
          <div class="form-group">
            <label for="pava">Available</label>
            <input type="text" class="form-control" id="pava" name="pava" 
            value={pava} onChange={(e) => setpava(e.target.value)}/>
          </div>
          
          <div class="form-group">
            <label for="poriginalcost">Original Cost Each</label>
            <input type="text" title="RS.1000" class="form-control" id="poriginalcost" name="poriginalcost"
            value={poriginalcost} onChange={(e) => setporiginalcost(e.target.value)}/>
          </div>
          <div class="form-group">
            <label for="psellingcost">Selling Cost Each</label>
            <input type="text" title="Rs.920" class="form-control" id="psellingcost" name="psellingcost" 
            value={psellingcost} onChange={(e) => setpsellingcost(e.target.value)}/>
          </div>
          <div class="form-group">
            <label for="uploadimage">Upload Image</label>
            <input type="file" src="#"  class="form-control" id="uploadimage" name="uploadimage" 
            value={uploadimage} onChange={(e) => setuploadimage(e.target.value)}/>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-danger" id="psubmit" name="psubmit"onClick={collectData}>Submit</button>
            <a href="#" class="btn btn-secondary">Close</a>
          </div>
        </form>
    </div> 
    </>
  )
}
