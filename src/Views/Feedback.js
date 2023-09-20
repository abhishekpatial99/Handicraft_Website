import React from 'react'

export default function Feedback() {
  return (
    <>
    <table>
     <thead>
        <tr>
        <th>Sr. No</th>
        <th>User</th>
        <th>Feedback id</th>
        <th>Feedback</th>
        <th>Action</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Abhishek</td>
            <td>123</td>
            <td>5 star</td>
            <td><button>Update</button></td>
        </tr>
    </tbody>
</table>
    
    
    </>
  )
}
