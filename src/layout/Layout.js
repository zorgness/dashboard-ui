import React from "react";
import Navigation from "../components/Navigation";

const Layout = ({ children }) => {
  return (
    <div className="d-flex">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
