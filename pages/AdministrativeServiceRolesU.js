// // pages/newpage.js

import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import React, { useState } from "react";
import Box from "../components/Box";

export default function AdministrativeServiceRolesU() {
  const [textBoxValue, setTextBoxValue] = useState("");

  const handleTextBoxChange = (e) => {
    setTextBoxValue(e.target.value);
  };

  return (
    <Layout AdministrativeServiceRolesU>
      <Head>
        <title>{siteTitle}</title>
        
      </Head>
      <section className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-cyan-200 text-3xl ... font-serif ...absolute bottom-0 right-3 w-30 ...">
          RECOMMENDATIONS
        </h1>
        {/* 6 */}
        <p className="text-cyan-200"></p>
        <Box>
          <p>Customer Service Representative</p>
        </Box>
        <Box>
          <p>Delivery Driver</p>
        </Box>
        <Box>
          <p>Janitorial Services Assistant</p>
        </Box>
        <Box>
          <p>Data Entry Clerk</p>
        </Box>
      </section>
      
    </Layout>
  );
}
// }
