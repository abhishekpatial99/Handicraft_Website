import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Assignworktodelivery() {
  
  return (
    <>
    <nav class="nav2">
        <button title="logout" >User</button>
         <NavLink to={'/admin/Dashboard'} ><input type="submit" value="Dashboard"/></NavLink>
    
        
        
            </nav>
    <div class="col-sm-12 mt-4 pt-2 jumbotron">
        <form action="" method="GET">
          <h5 class="text-center">Assign deliver Order </h5>
          <div class="form-group pt-1">
            <label for="product_id">Product ID</label>
            <input type="text" class="form-control" id="product_id" name="product_id"/>
          </div>
          <div class="form-group">
            <label for="product_info">Product Info</label>
            <input type="text" class="form-control" id="product_info" name="product_info" />
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <input type="text" class="form-control" id="description" name="description" />
          </div>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" name="name"/>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="address1">Address Line 1</label>
              <input type="text" class="form-control" id="address1" name="address1"/>
            </div>
            <div class="form-group col-md-6">
              <label for="address2">Address Line 2</label>
              <input type="text" class="form-control" id="address2" name="address2" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="city">City</label>
              <input type="text" class="form-control" id="city" name="city" />
            </div>
            <div class="form-group col-md-4">
              <label for="state">State</label>
              <input type="text" class="form-control" id="state" name="state"/>
            </div>
            <div class="form-group col-md-4">
              <label for="print">Print</label>
              <input type="text" class="form-control" id="print" name="print" 
                onkeypress="isInputNumber(event)"/>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-8">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" name="email" />
            </div>
            <div class="form-group col-md-4">
              <label for="mobile">Mobile</label>
              <input type="text" class="form-control" id="mobile" name="mobile" 
                onkeypress="isInputNumber(event)"/>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="assign">Assign to Deliver Agent</label>
              <input type="text" class="form-control" id="assign" name="assign"/>
            </div>
            <div class="form-group col-md-6">
              <label for="date">Date</label>
              <input type="date" class="form-control" id="date" name="date"/>
            </div>
          </div>
          <div class="float-right col-md-12">
            <button type="submit" class="btn btn-success" name="assign">Assign</button>
            <button type="submit" class="btn btn-secondary">Reset</button>
          </div>
        </form>
        </div>
    
    
    
    
    
    
    </>
  )
}
