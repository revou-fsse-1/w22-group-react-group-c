import { useRouter } from "next/router";
import { isAuthenticated } from "../utils/auth";
import { ReactNode, useEffect } from "react";

// This is High Order Components (HOC)
interface PrivateLayoutProps {
  children: ReactNode;
}
const PrivateLayout = ({ children }: PrivateLayoutProps) => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && !isAuthenticated()) {
      // User is not authenticated, redirect to login page or access denied page
      router.push("/auth/login");
    }
  }, []);

  // User is authenticated, render the private route
  return children;
};

export default PrivateLayout;
