import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import Navbar from './Navbar'


export default function Checkout() {
  const[firstname,setfirstname]=useState('')
  const [lastname,setlastname] =useState('')
  const[username,setusername]=useState('')
  const[email,setemail]=useState('')
  const[address,setaddress]=useState('')
  const[address2,setaddress2]=useState('')
  const[country,setcountry]=useState('')
  const[state,setstate]=useState('')
  const[pin,setpin]=useState('')
  const collectData =async()=>{
    console.log(firstname,lastname,username,email,address,address2,country,state,pin);
    let result=await fetch('http://localhost:24097/',{
        method:'POST',
        body:JSON.stringify({firstname,lastname,username,email,address,address2,country,state,pin}),
        headers:{
          'Content-Type' :'application/json'
        }
    })
    result = await result.json
    console.log(result);
  }

  return (
    <>
    <Navbar/>
    <div className="chec">
    <div className="container">
  <main>
    <div className="py-5 text-center">
      <h2>Checkout form</h2>
      <p className="lead"></p>
    </div>

    <div className="row g-5">
      <div className="col-md-5 col-lg-4 order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your cart</span>
          <span className="badge bg-primary rounded-pill">3</span>
        </h4>
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Phari Cap</h6>
              <small className="text-muted">Lorem ipsum dolor sit.</small>
            </div>
            <span className="text-muted">Rs.200</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Himachali Cap</h6>
              <small className="text-muted">Lorem ipsum dolor sit.</small>
            </div>
            <span className="text-muted">Rs.500</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Hamirpuri Janaat</h6>
              <small className="text-muted">Lorem ipsum dolor sit.</small>
            </div>
            <span className="text-muted">Rs.100</span>
          </li>
          <li className="list-group-item d-flex justify-content-between bg-light">
            <div className="text-success">
              <h6 className="my-0">Promo code</h6>
              <small>123****90</small>
            </div>
            <span className="text-success">-100Rs.</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (rupees)</span>
            <strong>Rs.700</strong>
          </li>
        </ul>

        <form className="card p-2">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Promo code"/>
            <button type="submit" className="btn btn-secondary">Redeem</button>
          </div>
        </form>
      </div>
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation">
          <div className="row g-3">
            <div className="col-sm-6">
              <label for="firstName" className="form-label">First name</label>
              <input type="text" className="form-control" id="firstName" placeholder="Abhishek" value={firstname} onChange={(e) => setfirstname(e.target.value)}required/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label for="lastName" className="form-label">Last name</label>
              <input type="text" className="form-control" id="lastName" placeholder="Patial" value={lastname} onChange={(e) => setlastname(e.target.value)} required/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div className="col-12">
              <label for="username" className="form-label">Username</label>
              <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input type="text" className="form-control" id="username" placeholder="Username"
                value={username} onChange={(e) => setusername(e.target.value)} required/>
              <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div className="col-12">
              <label for="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="abhishekpatial89@gmail.com"
              value={email} onChange={(e) => setemail(e.target.value)}/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="col-12">
              <label for="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" placeholder="Hamirpur" required
              value={address} onChange={(e) => setaddress(e.target.value)}/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="col-12">
              <label for="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
              <input type="text" className="form-control" id="address2" placeholder="Building No./street"
              value={address} onChange={(e) => setaddress(e.target.value)}/>
            </div>

            <div className="col-md-2">
              <label for="country" className="form-label">Country</label>
              <select className="form-select" id="country" required value={country} onChange={(e) => setcountry(e.target.value)}>
                <option value="">Choose...</option>
                <option>India</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div className="col-md-3">
              <label for="state" className="form-label">State</label>
              <select className="form-select" id="state" requiredvalue={state} onChange={(e) => setstate(e.target.value)}>
                <option value="">Choose...</option>
                <option>Himachal Pradesh</option>
                <option>Punjab</option>
                <option>Rajasthan</option>
                <option>Jammu & Kashmir </option>
                <option>Uttrakhand</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div className="col-md-4">
              <label for="pin" className="form-label">Pin Code</label>
              <input type="text" className="form-control" id="pin" placeholder="176045" required
              value={pin} onChange={(e) => setpin(e.target.value)}/>
              <div className="invalid-feedback">
                Pin Code required.
              </div>
            </div>
          </div>

          <hr className="my-4"/>

          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="same-address"/>
            <label className="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
          </div>

          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="save-info"/>
            <label className="form-check-label" for="save-info">Save this information for next time</label>
          </div>

          <hr className="my-4"/>

          <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={collectData}><NavLink to={'/Payment'}>Continue to checkout</NavLink> </button>
        </form>
        </div>
    </div>
  </main>
</div>
</div>
    </>
  )
}
