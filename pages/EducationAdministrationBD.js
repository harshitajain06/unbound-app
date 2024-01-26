// // pages/newpage.js

import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import React, { useState } from 'react';
import Box from '../components/Box';



export default function EducationAdministrationBD() {
  const [textBoxValue, setTextBoxValue] = useState("");
  

  const handleTextBoxChange = (e) => {
    setTextBoxValue(e.target.value);
  };


  return (
    <Layout EducationAdministrationBD>
      <Head>
        <title>{siteTitle}</title>
        
      </Head>
      <section className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-lime-20000 text-3xl ... font-serif ...absolute bottom-0 right-3 w-30 ...">
          Resources & Reccomendations
        </h1>
        {/* 6 */}
        <p className="text-cyan-200"></p>
        <Box>
          <p>Event Manual Labour</p>
        </Box>
        <Box>
          <p>Microfinance Officer</p>
        </Box>
        <Box>
          <p>Construction Laborer</p>
        </Box>
        <Box>
          <p>Data Entry Clerk</p>
        </Box>
        </section>
        
        </Layout>
);
}
// }