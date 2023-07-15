import Layout from "@/layout/Layout";
import Navbar from "@/layout/Navbar";
import "@/styles/globals.css";
// import "tw-elements/dist/css/tw-elements.min.css";
import { ThemeProvider } from "@material-tailwind/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
