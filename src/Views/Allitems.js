import React from 'react'
import Additems from './Additems'
import { NavLink } from 'react-router-dom'

export default function Allitems() {
  return (
    <>
    <nav class="nav2">
       
       <NavLink to={'/admin/Dashboard'} ><input type="submit" value="Dashboard"/></NavLink>
  
      
      
          </nav>
    <div className='iuh'>
    
<div class="colorbg">
<table class="table1">
<thead>
    <tr>
        <th class="table1">S no.</th>
        <th class="table1">State</th>
        <th>District</th>
        <th>Items</th>
        <th>Amount</th>
        <th class="table1">Actions</th>
    </tr>
</thead>
         <tbody>
              <tr>
                <td class="table1">1</td>
                <td class="table1">HIMACHAL PRADESH</td>
                <td class="table1">Hamirpur</td>
                <td class="table1">Phari Cap</td>
                <td class="table1">1500</td>
                <td class="table1"><button class="delete">Delete</button>
                    <button class="edit">< >Add</></button></td>
              </tr>
              <tr>
                <td class="table1">2</td>
                <td class="table1">HIMACHAL PRADESH</td>
                <td class="table1">kullu</td>
                <td class="table1">Phari Cap</td>
                <td class="table1">1500</td>
                <td class="table1"><button class="delete">Delete</button>
                    <button class="edit"><a href="update-state.html" >Add</a></button></td>
              </tr>
              <tr>
                <td class="table1">3</td>
                <td class="table1">HIMACHAL PRADESH</td>
                <td class="table1">Chamba</td>
                <td class="table1">Phari Cap</td>
                <td class="table1">1500</td>
                <td class="table1"><button class="delete">Delete</button>
                    <button class="edit"><a href="update-state.html" >Add</a></button></td>
              </tr>
              <tr>
                <td class="table1">4</td>
                <td class="table1">HIMACHAL PRADESH</td>
                <td class="table1">kinnaur</td>
                <td class="table1">Phari Cap</td>
                <td class="table1">1500</td>
                <td class="table1"><button class="delete">Delete</button>
                    <button class="edit"><a href="update-state.html" >Add</a></button></td>
              </tr>
              <tr>
                <td class="table1">5</td>
                <td class="table1">PUNJAB</td>
                <td class="table1">Mohali</td>
                <td class="table1">Phulkari</td>
                <td class="table1">1500</td>
                <td class="table1"><button class="delete">Delete</button>
                    <button class="edit"><a href="update-state.html" >Add</a></button></td>
              </tr>
              <tr>
                <td class="table1">6</td>
                <td class="table1">PUNJAB</td>
                <td class="table1">Mohali</td>
                <td class="table1">Phulkari</td>
                <td class="table1">1500</td>
                <td class="table1"><button class="delete">Delete</button>
                    <button class="edit"><a href="update-state.html" >Add</a></button></td>
              </tr>
              <tr>
                <td class="table1">7</td>
                <td class="table1">PUNJAB</td>
                <td class="table1">Mohali</td>
                <td class="table1">Phulkari</td>
                <td class="table1">1500</td>
                <td class="table1"><button class="delete">Delete</button>
                    <button class="edit"><a href="update-state.html" >Add</a></button></td>
              </tr>
              <tr>
                <td class="table1">8</td>
                <td class="table1">PUNJAB</td>
                <td class="table1">Mohali</td>
                <td class="table1">Phulkari</td>
                <td class="table1">1500</td>
                <td class="table1"><button class="delete">Delete</button>
                    <button class="edit"><a href="update-state.html" >Add</a></button></td>
              </tr>
              <tr>
                <td class="table1" >9</td>
                <td class="table1">JAMMU KASHMIR</td>
                <td class="table1">Jammu</td>
                <td class="table1">Phulkari</td>
                <td class="table1">1500</td>
                <td class="table1"><button class="delete">Delete</button>
                    <button class="edit"><a href="update-state.html" >Add</a></button></td>
              </tr>
              <tr>
                <td class="table1" >10</td>
                <td class="table1">JAMMU KASHMIR</td>
                <td class="table1">kashmir</td>
                <td class="table1">Phasmina</td>
                <td class="table1">15000</td>
                <td class="table1"><button class="delete">Delete</button>
                    <button class="edit"><NavLink to={Additems} >Add</NavLink></button></td>
              </tr>
            </tbody>
          </table>
</div>
</div>
    
    
    </>
  )
}
