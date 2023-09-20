import React from 'react'

export default function Soldproduct() {
  return (
    <>
<div class="backside">
    
    <h2 class="bg-dark text-white p-2 mt-4" >Sold Product Details</h2>
  <table class="table" >
    <thead>
      <tr>
        <th scope="col">Customer ID</th>
        <th scope="col">Customer Name</th>
        <th scope="col">Address</th>
        <th scope="col">Product Name</th>
        <th scope="col">Quantity</th>
        <th scope="col">Price Each</th>
        <th scope="col">Total</th>
        <th scope="col">Date</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td scope="col">1111111</td>
            <td scope="col">Abhishek</td>
            <td scope="col">Hamirpur</td>
            <td scope="col">Phari cap</td>
            <td scope="col">1</td>
            <td scope="col">20</td>
            <td scope="col">20</td>
            <td scope="col">11/11/2023</td>
          </tr>
    </tbody>
    </table>
  </div>
    </>
  )
}
