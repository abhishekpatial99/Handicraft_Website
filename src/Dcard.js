import React from 'react'
import { NavLink} from 'react-router-dom'
import Googlepay from './Googlepay'
export default function Dcard() {
  return (
    <>
     <div className="bg-light">
    <div className="paymt2">
        <h1>CraftShop</h1>
        <hr className="my-4"/>
    <h6 className="mb-1">Payment</h6>

          <div className="my-1">
            <div className="form-check">
            
              <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required/>
              <label className="form-check-label" for="debit"><NavLink to={''}>Debit card</NavLink></label>
            </div>
          </div>

          <div className="row gy-3">
            <div className="col-md-4">
              <label for="cc-name" className="form-label">Name on card</label>
              <input type="text" className="form-control" id="cc-name" placeholder="Abhishek Patial" required/>
              <small className="text-muted">Full name as displayed on card</small>
              <div className="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div className="col-md-5">
              <label for="cc-number" className="form-label">Debit card number</label>
              <input type="text" className="form-control" id="cc-number" placeholder="491889878978" required/>
              <div className="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div className="col-md-3">
              <label for="cc-expiration" className="form-label">Expiration</label>
              <input type="text" className="form-control" id="cc-expiration" placeholder="08/25" required/>
              <div className="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div className="col-md-3">
              <label for="cc-cvv" className="form-label">CVV</label>
              <input type="text" className="form-control" id="cc-cvv" placeholder="045" required/>
              <div className="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>
          <hr className="my-4"/>

          <button className="w-100 btn btn-primary btn-lg" type="submit">Submit</button>
        </div>
    </div>
    
    
    
    </>
  )
}
