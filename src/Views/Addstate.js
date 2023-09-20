import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Addstate() {
  return (
    <>
  
  <div className='colers'>
    <nav class="nav2">
        
         <NavLink to={'/admin/Dashboard'} ><input type="submit" value="Dashboard"/></NavLink>
            </nav>
    <div className='colorbg1 '>
            <div class="form-group col-sm-12">
            <label for="name">Add State</label>
            <input type="text" class="form-control" id="name" name="name"/>
            <button><NavLink to={'/admin/dashboard'}>Add</NavLink></button>
          </div>
    
          </div>
    
    </div>
    </>
  )
}
