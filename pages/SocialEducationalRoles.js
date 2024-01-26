// // pages/newpage.js

import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";


import React, { useState } from "react";
import Box from "../components/Box";

export default function SocialEducationalRoles() {
  const [textBoxValue, setTextBoxValue] = useState("");

  const handleTextBoxChange = (e) => {
    setTextBoxValue(e.target.value);
  };

  return (
    <Layout SocialEducationalRoles>
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
          <p>teacher</p>
        </Box>
        <Box>
          <p>Working in NGOs</p>
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
