import { Route, Routes } from "react-router";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Forum from "../pages/Forum";
import AboutUs from "../pages/AboutUs";
import Team from "../pages/Team";
import Careers from "../pages/Careers";
import Blog from "../pages/Blog";
import NotFound from "../pages/NotFound";
import { Suspense, lazy } from "react";
import Loading from "../components/Loading";
const HomePage = lazy(() => import("../pages/Home"));

const WebRouting = () => {
  return (
    <Suspense fallback={<Loading/>}>
    <Routes>
      <Route path="/" element={<HomePage/>}  />
      <Route path="/cart" element={<Cart/>}  />
      <Route path="/login" element={<Login/>}  />
      <Route path="/form" element={<Forum/>}  />
      <Route path="/about-us" element={<AboutUs/>}  />
      <Route path="/team" element={<Team/>}  />
      <Route path="/careers" element={<Careers/>}  />
      <Route path="/blog" element={<Blog/>}  />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </Suspense>
  );
};

export default WebRouting;
