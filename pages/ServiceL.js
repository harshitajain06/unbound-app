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
      <section className="flex flex-col items-center justify-center w-full h-full">
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
      
    </Layout>
  );
}
// }
