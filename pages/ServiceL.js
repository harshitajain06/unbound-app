// // pages/newpage.js

import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";


import React, { useState } from "react";
import Box from "../components/Box";

export default function ServiceL() {
  const [textBoxValue, setTextBoxValue] = useState("");

  const handleTextBoxChange = (e) => {
    setTextBoxValue(e.target.value);
  };

  return (
    <Layout ServiceL>
      <Head>
        <title>{siteTitle}</title>
        
      </Head>
      <section className="grid grid-cols-1">
        <h1 className="text-lime-200 text-3xl ... font-serif ...absolute bottom-0 right-3 w-30 ...">
          Resources & Reccomendations
        </h1>
        {/* 6 */}
        <p className="text-cyan-200"></p>
        <Box>
          <p>Nurses/Wardboy</p>
        </Box>
        <Box>
          <p>Masseuse</p>
        </Box>
        <Box>
          <p>Fast food service position</p>
        </Box>
        <Box>
          <p>Baby sitter</p>
        </Box>
        <Box>
          <p>Pet care taker</p>
        </Box>
        <Box>
          <p>Painter</p>
        </Box>
        <Box>
          <p>Cook</p>
        </Box>
        <Box>
          <p>Beauticians</p>
        </Box>
      </section>
      <div>
      <a href={"/"}>
          <button className="text-green-200 fixed top-3 left-6 z-50 p-4 text-2xl font-MONO transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... ">        

            Home
          </button>
        </a>
        </div>
    </Layout>
  );
}
// }
