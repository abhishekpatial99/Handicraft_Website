import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Additems() {
  return (
    <>
    <div className='colers'>
    <nav class="nav2">
        
         <NavLink to={'/admin/Dashboard'} ><input type="submit" value="Dashboard"/></NavLink>
            </nav>
    <div className='colorbg12 mt-3'>
            <div class="form-group col-sm-12">
              <h1>Add Items</h1>
            <label for="name">Product Id</label>
            <input type="text" class="form-control" id="name" name="name"/>
            <label for="name">Add State</label>
            <input type="text" class="form-control" id="name" name="name"/>
            <label for="name">Add Distt</label>
            <input type="text" class="form-control" id="name" name="name"/>
            <label for="name">Product Name</label>
            <input type="text" class="form-control" id="name" name="name"/>
            <label for="name">Discription</label>
            <input type="text" class="form-control" id="name" name="name"/>
            <label for="name">Image</label>
            <input type="file" class="form-control" id="name" name="name"/>
            <button><NavLink to={'/admin/dashboard'}>Add</NavLink></button>
          </div>
    
          </div>
    
    




    </div>
    
    </>
  )
}
