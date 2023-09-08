import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Cart from "../pages/Cart";


const WebRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/cart" element={<Cart/>}  />
    </Routes>
  );
};

export default WebRouting;
