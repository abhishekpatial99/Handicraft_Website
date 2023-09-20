import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Latestitem() {
  return (
    <>
    <nav class="nav2">
        <button title="logout">User</button>
        <NavLink to={'/admin/Dashboard'} ><input type="submit" value="Dashboard"/></NavLink>
    
        
        
            </nav>
            <div class="colorbg">
 <table className='table1'>
 <thead>
  <tr>
            
            <th className='table1'>Product Id</th>
            <th className='table1'>Product Name</th>
            <th className='table1'>Product Description</th>
            <th className='table1'>Total Cost</th>
            <th className='table1'>Selling price</th>
            <th className='table1'>Image</th>
            </tr>
        </thead>
        <tbody>
            <tr className='table1'>
            <td className='table1'>1</td>
            <td className='table1'>Phari Cap</td>
            <td className='table1'>Lorem ipsum dolor sit.</td>
            <td className='table1'>500</td>
            <td className='table1'>420</td>
            <td className='table1'>image098.jpg</td></tr>
        </tbody>
    </table>
    </div>
    </>
  )
}
