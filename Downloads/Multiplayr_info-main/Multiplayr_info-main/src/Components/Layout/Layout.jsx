import React, { useEffect } from "react";
import Header from "../Header/Header";
// import Feature from '../Feature/Feature'
import { Outlet } from "react-router-dom";
import { Contact } from "../../Components";
import { Scroller } from "../Common";

function Layout() {
  return (
    <>
      <Header />
      {/* <Feature/> */}
      <Outlet />
      <Scroller />
      <Contact />
    </>
  );
}

export default Layout;
