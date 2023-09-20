import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Selleritems() {
  return (
    <>
    
    <nav class="nav2">
        <button title="logout">User</button>
         <NavLink to={'/admin/Dashboard'} ><input type="submit" value="Dashboard"/></NavLink>
    
        
        
            </nav>
            <div class="colorbg">
            <table class="table1">
            <thead>
                <tr>
                    <th class="table1">S no.</th>
                    <th class="table1">State</th>
                    <th class="table1">Distt</th>
                    <th class="table1">Product Name</th>
                    <th class="table1">Date of Purchase</th>
                    <th class="table1">total</th>
                    <th class="table1">Discriptions</th>
                    <th class="table1">Original cost</th>
                    <th class="table1">selling cost</th>
                    <th class="table1">Add</th>
                    
        
                </tr>
            </thead>
                     <tbody>
                          <tr>
                            <td class="table1">1</td>
                            <td class="table1">Himachal Pradesh</td>
                            <td class="table1">Hamirpur </td>
                            <td class="table1">XYZ</td>
                            <td class="table1">**/**/****</td>
                            <td class="table1">500</td>
                            <td class="table1">Lorem ipsum dolor sit amet.</td>
                            <td class="table1">Rs. 55555</td>
                            <td class="table1">Rs.50000</td>
                         <td class="table1"><button class="Add">Add</button> 
                            <button class="delete">Reset</button></td>
                            
                          </tr>
                          <tr>
                            <td class="table1">2</td>
                            <td class="table1">Haryana</td>
                            <td class="table1">Panchkulla</td>
                            <td class="table1">ABC</td>
                            <td class="table1">**/**/****</td>
                            <td class="table1">100</td>
                            <td class="table1">Lorem ipsum dolor sit amet.</td>
                            <td class="table1">Rs. 55665</td>
                            <td class="table1">Rs.50000</td>
                            <td class="table1"><button class="Add">Add</button>
                                <button class="delete">Delete</button></td>
                          </tr>
                          <tr>
                            <td class="table1" >3</td>
                            <td class="table1">Leh</td>
                            <td class="table1">Leh</td>
                            <td class="table1">MNO</td>
                            <td class="table1">**/**/****</td>
                            <td class="table1">50</td>
                            <td class="table1">Lorem ipsum dolor sit amet.</td>
                            <td class="table1">Rs. 99995</td>
                            <td class="table1">Rs.90000</td>
                            <td class="table1"><button class="Add">Add</button>
                                <button class="delete">Delete</button></td>
                          </tr>
                        </tbody>
                      </table>
        </div>
        <div class="submit"> 
            <p>© Copyright Craft Shop</p>
        </div>
    
    
    </>
  )
}
