// // pages/newpage.js

import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import React, { useState } from "react";
import Box from "../components/Box";

export default function EducationAdministrationL() {
  const [textBoxValue, setTextBoxValue] = useState("");

  const handleTextBoxChange = (e) => {
    setTextBoxValue(e.target.value);
  };

  return (
    <Layout EducationAdministrationL>
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
          <p>Corporate Jobs</p>
        </Box>
        <Box>
          <p>Working in NGOs</p>
        </Box>
        <Box>
          <p>Office Assistant</p>
        </Box>
        <Box>
          <p>Community Outreach Coordinator</p>
        </Box>
        <Box>
          <p>Front Desk Receptionist:</p>
        </Box>
        <Box>
          <p>Teacher</p>
        </Box>
        <Box>
          <p>Library Assistant</p>
        </Box>
      </section>
      
    </Layout>
  );
}
// }
