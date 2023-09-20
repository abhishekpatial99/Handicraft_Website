import React,{useState} from 'react'
import Navbar from './Navbar'


export default function Changepass() {
  const[email, setemail]=useState('')
const [password, setpassword]=useState('')
const collectData =async()=>{
  console.log(email,password)
  let result = await fetch('http://localhost:24104/',{
    method:'POST',
    body:JSON.stringify({email, password,}),
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
     <div class="backside">
      <div className='chan234'>
    <div class="col-sm-9 col-md-11">
        <div class="row">
          <div class="col-sm-6">
            <form class="mt-5 mx-5">
                <div>
                    <h2>Change Password</h2>
                </div>
              <div class="form-group">
                <label for="inputEmail">Email</label>
                <input type="email" class="form-control" id="inputEmail" value="Enter your E-mail" readonly value={email} onChange={(e) => setemail(e.target.value)}/>
              </div>
              <div class="form-group">
                <label for="inputnewpassword">New Password</label>
                <input type="text" class="form-control" id="inputnewpassword" placeholder="New Password" name="aPassword" value={password} onChange={(e) => setpassword(e.target.value)}/>
              </div>
              <button type="submit" class="btn btn-danger mr-4 mt-4" name="passupdate" onClick={collectData}>Update</button>
              <button type="reset" class="btn btn-secondary mt-4">Reset</button>
            </form>
          </div>
        </div>
      </div>
      </div>
      </div>
    
    </>
  )
}
