import * as React from "react";
import Navbar from "./Navbar";
import FooterComponent from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <Navbar />
      {children}
      <FooterComponent />
    </>
  );
}
