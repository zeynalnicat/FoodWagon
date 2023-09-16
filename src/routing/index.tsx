import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";


const WebRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/cart" element={<Cart/>}  />
      <Route path="/login" element={<Login/>}  />
    </Routes>
  );
};

export default WebRouting;
