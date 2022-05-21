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

function App() {
  return (
    <div className='lg:px-12'>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/dashbord' element={
          <RequireAuth>
            <Dashbord></Dashbord>
          </RequireAuth>
        }>
          <Route index element={<AddProducts></AddProducts>}></Route>
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>

      </Routes>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
