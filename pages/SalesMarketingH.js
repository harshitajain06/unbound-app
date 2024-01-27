// // pages/newpage.js

import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";


import React, { useState } from "react";
import Box from "../components/Box";

export default function SalesMarketingH() {
  const [textBoxValue, setTextBoxValue] = useState("");

  const handleTextBoxChange = (e) => {
    setTextBoxValue(e.target.value);
  };

  return (
    <Layout SalesMarketinH>
      <Head>
        <title>{siteTitle}</title>
        
      </Head>
      <section className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-cyan-20000 text-4xl ... font-serif ...absolute bottom-0 right-3 w-30 ...">
          RECCOMENDATIONS
        </h1>
        {/* 6 */}
        <p className="text-cyan-200"></p>
        <Box>
          <p>Data Entry Clerk</p>
        </Box>
        <Box>
          <p>Microfinance Officer</p>
        </Box>
        <Box>
          <p>Event manual labor</p>
        </Box>
      </section>
      
    </Layout>
  );
}
// }
