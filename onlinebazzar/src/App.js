
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from "./pages/admin/AdminDashboard/AdminDashboard";
import UserProfile from "./pages/users/UserProfile/UserProfile";
import AdminProductEdit from "./pages/admin/AdminProductEdit/AdminProductEdit";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Cart from "./pages/cart/Cart";
import Order from "./pages/orders/Order";
import AdminOrders from "./pages/admin/AdminOrders/Adminorders";

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/product/details/:id" element={<ProductDetails/>}/>

        
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        {/* admin Routes */}
        <Route path="/admin-dashboard" element={<AdminDashboard/>}></Route>
        <Route path="/admin/product/edit/:id" element={<AdminProductEdit/>}></Route>

         {/* orders */}
        <Route path="/admin/order" element={<AdminOrders/>}></Route>

        {/* user Routes */}
        <Route path="/UserProfile" element={<UserProfile/>}/>

        {/* About */}
        <Route path="/about" element={<About />} />
    {/* cart */}
        <Route path="/cart" element={<Cart/>}></Route>

   
 {/* orders */}
    <Route path="/order" element={<Order/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;