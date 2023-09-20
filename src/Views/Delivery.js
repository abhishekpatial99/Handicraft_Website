import React from 'react'

export default function Delivery() {
  return (
    <>
    <div class="col-sm-5 mt-5 jumbotron">
    <form action="" method="POST">
      <h5 class="text-center">Assign deliver Order </h5>
      <div class="form-group">
        <label for="request_id">Product ID</label>
        <input type="text" class="form-control" id="request_id" name="request_id" />
      </div>
      <div class="form-group">
        <label for="request_info">Product Info</label>
        <input type="text" class="form-control" id="request_info" name="request_info" />
      </div>
      <div class="form-group">
        <label for="requestdesc">Description</label>
        <input type="text" class="form-control" id="requestdesc" name="requestdesc" />
      </div>
      <div class="form-group">
        <label for="requestername">Name</label>
        <input type="text" class="form-control" id="requestername" name="requestername" />
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="address1">Address Line 1</label>
          <input type="text" class="form-control" id="address1" name="address1" />
        </div>
        <div class="form-group col-md-6">
          <label for="address2">Address Line 2</label>
          <input type="text" class="form-control" id="address2" name="address2" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="requestercity">City</label>
          <input type="text" class="form-control" id="requestercity" name="requestercity" />
        </div>
        <div class="form-group col-md-4">
          <label for="requesterstate">State</label>
          <input type="text" class="form-control" id="requesterstate" name="requesterstate" />
        </div>
        <div class="form-group col-md-4">
          <label for="requesterzip">Print</label>
          <input type="text" class="form-control" id="requesterzip" name="requesterzip" 
            onkeypress="isInputNumber(event)"/>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-8">
          <label for="requesteremail">Email</label>
          <input type="email" class="form-control" id="requesteremail" name="requesteremail" />
        </div>
        <div class="form-group col-md-4">
          <label for="requestermobile">Mobile</label>
          <input type="text" class="form-control" id="requestermobile" name="requestermobile" 
            onkeypress="isInputNumber(event)"/>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="assigntech">Assign to Deliver Agent</label>
          <input type="text" class="form-control" id="assigntech" name="assigntech"/>
        </div>
        <div class="form-group col-md-6">
          <label for="inputDate">Date</label>
          <input type="date" class="form-control" id="inputDate" name="inputdate"/>
        </div>
      </div>
      <div class="float-right">
        <button type="submit" class="btn btn-success" name="assign">Assign</button>
        <button type="reset" class="btn btn-secondary">Reset</button>
      </div>
    </form>
    </div>
    
    
    
    </>
  )
}
