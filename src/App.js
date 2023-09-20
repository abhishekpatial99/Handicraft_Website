import logo from './logo.svg';
import './App.css';
import { Form, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Home from './Home';
import About from './About';
import Service from './Service';
import Viewmore from './Viewmore';
import Login from './Login';
import Location from './Location'
import Contact from './Contact';
import Register from './Register';
import Addselleritem from './Seller/Addselleritem';
import Login1 from './Seller/Login1'
import Register1 from './Seller/Register1'
import Showmore from './Showmore';
import Checkout from './Checkout';
import Payment from './Payment';
import Dcard from './Dcard';
import Googlepay from './Googlepay';
import Login2 from '../src/Views/Login2';
import Dashboard from '../src/Views/Dashboard';
import Changepass from './Changepass';
import Alluser from './Views/Alluser';
import Order from './Views/Order';
import Contact1 from './Views/Contact1';
import Assignworktodelivery from './Views/Assignworktodelivery';
import Selleritems from './Views/Selleritems';
import Allseller from './Views/Allseller';
import Latestitem from './Views/Latestitem';
import Addstate from './Views/Addstate';
import Allstate from './Views/Allstate';
import Adddistt from './Views/Adddistt';
import Alldistt from './Views/Alldistt';
import Additems from './Views/Additems';
import Allitems from './Views/Allitems'
import Changepass21 from './Views/Changepass21';





function App() {
  //const mystate = useSelector((state)=>
//state.changethenumber
  
  //)
  //const dispatch = useDispatch();
 
    
  

  return (
    <>
    {/*<form>
      <button onClick={()=>dispatch(Decrement())}>-</button>
      <input type="text" name="" id="" value={mystate}/>
      <button onClick={()=>dispatch(increment())}>+</button>
  </form>*/}

 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/service' element={<Service/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/viewmore' element={<Viewmore/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/location' element={<Location/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/showmore' element={<Showmore/>}/>
  <Route path='/seller/addselleritem' element={<Addselleritem/>}/>
  <Route path='/seller' element={<Login1/>}/>
  <Route path='/seller/register' element={<Register1/>}/> 
  <Route path='/checkout' element={<Checkout/>}/>
  <Route path='/payment' element={<Payment/>}/>
  <Route path='/dcard' element={<Dcard/>}/>
  <Route path='/Googlepay' element={<Googlepay/>}/>
  <Route path ='/admin' element={<Login2/>}/>
  <Route path ='/admin/dashboard' element={<Dashboard/>}/>
  <Route path='Changepass' element={<Changepass/>}/>
  <Route path ='/Alluser' element={<Alluser/>}/>
  <Route path='/Order' element={<Order/>}/>
 <Route path ='/admin/contact' element={<Contact1/>}/>
 <Route path='/admin/dashboard/Allseller' element={<Allseller/>}/>
 <Route path ='/assignworktodeliver' element={<Assignworktodelivery/>}/>
<Route path='/admin/dashboard/Selleritems' element={<Selleritems/>}/>
<Route path='/Latestitem' element={<Latestitem/>}/>
<Route path='/Addstate' element={<Addstate/>}/>
<Route path='Allstate' element={<Allstate/>}/>
<Route path='Adddistt' element={<Adddistt/>}/>
<Route path='Alldistt' element={<Alldistt/>}/>
<Route path='Additems' element={<Additems/>}/>
<Route path='Allitems' element={<Allitems/>}/>
<Route path='admin/Dashboard/Changepass' element={<Changepass21/>}/>
</Routes>
 </>
  );
}

export default App;