import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Dashbord from './Components/Pages/Dashbord/Dashbord';
import Blogs from './Components/Pages/Blog/Blogs';
import Login from './Components/Login/Login';
import Footer from './Components/Shared/Footer';
import Signup from './Components/Login/Signup';
import AddProducts from './Components/Pages/Dashbord/AddProducts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Components/Login/RequireAuth';
import PurchacsTools from './Components/Pages/Home/PurchacsTools';
import MyProfile from './Components/Pages/Dashbord/MyProfile';
import MyOrders from './Components/Pages/Dashbord/MyOrders';
import ManageOrders from './Components/Pages/Dashbord/ManageOrders';
import AllUsers from './Components/Pages/Dashbord/AllUsers';
import RequireAdmin from './Components/Hooks/RequireAdmin';
import ManageProducts from './Components/Pages/Dashbord/ManageProducts';
import AddReview from './Components/Pages/Dashbord/AddReview';
import ManageReview from './Components/Pages/Dashbord/ManageReview';
import NotFound from './Components/Shared/NotFound';
import Payment from './Components/Pages/Dashbord/Payment';
import Potfolio from './Components/Pages/Protfolio/Potfolio';
import RequireUser from './Components/Hooks/RequireUser';
import UpdateProduct from './Components/Pages/Dashbord/UpdateProduct'

function App() {
  return (
    <div >
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase/:id' element={
          <RequireUser>
            <PurchacsTools></PurchacsTools>
            </RequireUser>
        }></Route>
        <Route path='/dashbord' element={
          <RequireAuth>
            <Dashbord></Dashbord>
          </RequireAuth>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='payment/:orderid' element={<Payment></Payment>} />
          <Route path='addproducts' element={
            <RequireAdmin>
              <AddProducts></AddProducts>
            </RequireAdmin>
          }></Route>
          <Route path='updateproducts/:productId' element={
            <RequireAdmin>
              <UpdateProduct></UpdateProduct>
            </RequireAdmin>
          }></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='myorders' element={
            <RequireUser>
              <MyOrders></MyOrders>
            </RequireUser>
          }></Route>
          <Route path='addreview' element={
            <RequireUser>
              <AddReview></AddReview>
            </RequireUser>
          }></Route>
          <Route path='manageAllorders' element={
            <RequireAdmin>
              <ManageOrders></ManageOrders>
            </RequireAdmin>
          }></Route>
          <Route path='makeAdmin' element={
            <RequireAdmin>
              <AllUsers></AllUsers>
            </RequireAdmin>
          }></Route>
          <Route path='manageProducts' element={
            <RequireAdmin>
              <ManageProducts></ManageProducts>
            </RequireAdmin>
          }></Route>
          <Route path='manageReview' element={
            <RequireAdmin>
              <ManageReview></ManageReview>
            </RequireAdmin>
          }></Route>
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/potfolio' element={<Potfolio></Potfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
