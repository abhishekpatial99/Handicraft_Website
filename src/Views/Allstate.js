import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Allstate() {
  return (
    <>
     <nav class="nav2">
       
       <NavLink to={'/admin/Dashboard'} ><input type="submit" value="Dashboard"/></NavLink>
  
      
      
          </nav>
    <div class="colorbg">
    <table class="table1">
    <thead>
        <tr>
            <th class="table1">S no.</th>
            <th class="table1">State</th>
            <th class="table1">Actions</th>
        </tr>
    </thead>
             <tbody>
                  <tr>
                    <td class="table1">1</td>
                    <td class="table1">HIMACHAL PRADESH</td>
                    <td class="table1"><button class="delete">Delete</button>
                        <button class="edit"><a href="update-state.html" >Edit</a></button></td>
                  </tr>
                  <tr>
                    <td class="table1">2</td>
                    <td class="table1">PUNJAB</td>
                    <td class="table1"><button class="delete">Delete</button>
                        <button class="edit"><a href="update-state.html" >Edit</a></button></td>
                  </tr>
                  <tr>
                    <td class="table1" >3</td>
                    <td class="table1">JAMMU KASHMIR</td>
                    <td class="table1"><button class="delete">Delete</button>
                        <button class="edit"><a href="update-state.html" >Edit</a></button></td>
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
