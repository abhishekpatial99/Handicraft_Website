import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Alldistt() {
  return (
    <>
    <nav class="nav2">
       
       <NavLink to={'/admin/Dashboard'} ><input type="submit" value="Dashboard"/></NavLink>
  
      
      
          </nav>
   

      <div class="colorbg2 form-group col-sm-12">
      
      <table class="table1">
      <thead>
          <tr>
              <th class="table1">S no.</th>
              <th class="table1">State</th>
              <th class="table1">District</th>
              <th class="table1">Actions</th>
          </tr>
      </thead>
               <tbody>
                    <tr>
                      <td class="table1">1</td>
                      <td class="table1">HIMACHAL PRADESH</td>
                      <td class="table1">Hamirpur</td>
                      <td class="table1"><button class="delete">Delete</button>
                          <button class="edit">Edit</button></td>
                    </tr>
                    <tr>
                      <td class="table1">2</td>
                      <td class="table1">HIMACHAL PRADESH</td>
                      <td class="table1">kullu</td>
                      <td class="table1"><button class="delete">Delete</button>
                          <button class="edit"> Edit</button></td>
                    </tr>
                    <tr>
                      <td class="table1">3</td>
                      <td class="table1">HIMACHAL PRADESH</td> 
                      <td class="table1">Chamba</td>
                      <td class="table1"><button class="delete">Delete</button>
                          <button class="edit"><a href="update-state.html" >Edit</a></button></td>
                    </tr>
                    <tr>
                      <td class="table1">4</td>
                      <td class="table1">HIMACHAL PRADESH</td>
                      <td class="table1">kinnaur</td>
                      <td class="table1"><button class="delete">Delete</button>
                          <button class="edit"><a href="update-state.html" >Edit</a></button></td>
                    </tr>
                    <tr>
                      <td class="table1">5</td>
                      <td class="table1">PUNJAB</td>
                      <td class="table1">Mohali</td>
                      <td class="table1"><button class="delete">Delete</button>
                          <button class="edit"><a href="update-state.html" >Edit</a></button></td>
                    </tr>
                    <tr>
                      <td class="table1">6</td>
                      <td class="table1">PUNJAB</td>
                      <td class="table1">Mohali</td>
                      <td class="table1"><button class="delete">Delete</button>
                          <button class="edit"><a href="update-state.html" >Edit</a></button></td>
                    </tr>
                    <tr>
                      <td class="table1">7</td>
                      <td class="table1">PUNJAB</td>
                      <td class="table1">Mohali</td>
                      <td class="table1"><button class="delete">Delete</button>
                          <button class="edit"><a href="update-state.html" >Edit</a></button></td>
                    </tr>
                    <tr>
                      <td class="table1">8</td>
                      <td class="table1">PUNJAB</td>
                      <td class="table1">Mohali</td>
                      <td class="table1"><button class="delete">Delete</button>
                          <button class="edit"><a href="update-state.html" >Edit</a></button></td>
                    </tr>
                    <tr>
                      <td class="table1" >9</td>
                      <td class="table1">JAMMU KASHMIR</td>
                      <td class="table1">Jammu</td>
                      <td class="table1"><button class="delete">Delete</button>
                          <button class="edit"><a href="update-state.html" >Edit</a></button></td>
                    </tr>
                    <tr>
                      <td class="table1" >10</td>
                      <td class="table1">JAMMU KASHMIR</td>
                      <td class="table1">kashmir</td>
                      <td class="table1"><button class="delete">Delete</button>
                          <button class="edit"><a href="update-state.html" >Edit</a></button></td>
                    </tr>
                  </tbody>
                </table>
  </div>
  </>
  )
}
