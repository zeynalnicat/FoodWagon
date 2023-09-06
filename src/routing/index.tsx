import { Route, Routes } from "react-router";
import Home from "../pages/Home";


const WebRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}  />
    </Routes>
  );
};

export default WebRouting;
