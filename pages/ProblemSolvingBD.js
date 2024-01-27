// // pages/newpage.js

import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";


import React, { useState } from 'react';
import Box from '../components/Box';



export default function ProblemSolvingBD() {
  const [textBoxValue, setTextBoxValue] = useState("");
  

  const handleTextBoxChange = (e) => {
    setTextBoxValue(e.target.value);
  };


  return (
    <Layout ProblemSolvingBD>
      <Head>
        <title>{siteTitle}</title>
        
      </Head>
      <section className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-cyan-200 text-4xl ... font-serif ...absolute bottom-0 right-3 w-30 ...">
          RECOMMENDATIONS
        </h1>
        {/* 6 */}
        <p className="text-cyan-200">
          </p>
      <Box>
        <p>Packaging assistants</p>
      </Box>
      <Box>
        <p>Janitorial Services Assistant</p>
      </Box>
      <Box>
        <p>Kitchen assistants</p>
      </Box>
      <Box>
        <p>Customer Service Representative</p>
      </Box>
      <Box>
        <p>Warehouse manager</p>
      </Box>

      </section>
      
    </Layout>
  );
}
// }