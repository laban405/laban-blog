'use client'
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { Navbar } from "./Navbar";



const Layout = ({ children }) => {
    const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div style={{ height: 50, width: 150 }} />
    );
  }
  return (
    <div className="">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout
