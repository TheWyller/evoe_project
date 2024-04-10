import { Route, Routes } from "react-router-dom";
import CreateSupporters from "../pages/CreateSupporters";

import Home from "../pages/Home";
import Login from "../pages/Login";
import MySupporters from "../pages/MySupporters";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/SignUp";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MySupporters />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/new-supporters" element={<CreateSupporters />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AllRoutes;
