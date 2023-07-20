import Navbar from "./Navbar";
import FooterComponent from "./Footer";
import LoginNavbar from "./LoginNavbar";
import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    // Check if the token exists in the localStorage
    const token = localStorage.getItem("token");
    setHasToken(!!token); // Set hasToken to true if the token exists
  }, []);
  return (
    <>
      {hasToken ? <LoginNavbar /> : <Navbar />}
      {children}
      <FooterComponent />
    </>
  );
}
