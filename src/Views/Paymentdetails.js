import React from 'react'

export default function Paymentdetails() {
  return (
    <>
     <nav class="nav2">
        <button title="logout">User</button>
        <a href="dashboard.html" ><input type="submit" value="Dashboard"/></a>
    
        
        
            </nav>
    <table class="bd">
        <thead class="bd1">
            <tr>
                <th >S no.</th>
                <th>userName</th>
                <th>Address</th>
                <th>Payment option</th>
                <th>Google payment</th>
                <th>Credit card</th>
                <th>Debit card</th>
                </tr>\
            </thead>
            <tbody class="bd2">
                <tr>
                <td>1</td>
                <td>Abhishek Patial</td>
                <td>hamirpur hp</td>
                <td>Credit Card</td>
                <td>None</td>
                <td>Yes</td>
                <td>
                    None
                </td>
            </tr>
            </tbody>
        </table>
    
    
    
    </>
  )
}
