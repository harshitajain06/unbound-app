import Head from "next/head";
import Image from "next/image";
import { siteTitle } from "../components/Layout"; // Removed the named import for Layout
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

// Renamed Layout component to avoid conflict with named import
const CustomLayout = ({ children }) => {
  return (

    <div className="flex min-h-screen items-center justify-between bg-neutral-900 p-8 md:p-24 bg-neutral-900 relative">
      {children}
   




      <a href={"/"}>
        <button className="text-green-200 fixed top-3 left-6 z-50 p-4 text-2xl font-MONO">
          Home
        </button>
      </a>
    </div>
  );
};


export default CustomLayout; // Changed the export to use the new name

