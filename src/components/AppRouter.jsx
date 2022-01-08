import React from "react";
import { Route, Routes } from "react-router-dom";
import Details from "../pages/Details";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/country/:name' element={<Details />} />
         <Route path='*' element={<NotFound />} />
      </Routes>
   )
}

export default AppRouter
