import Navbar from "@/components/Navbar";
import "./globals.css";
import React from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";




export const metadata = {
  title: "Birnet",
  description: "Birnet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
     <Navbar/>
     <Hero/>
 
        {children}
      
<Footer/>
      </body>
    </html>
  );
}
