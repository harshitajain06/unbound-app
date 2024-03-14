// // pages/newpage.js

import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";

import React, { useState } from "react";
import Box from "../components/Box";

export default function SocialEducationalRolesU() {
  const [textBoxValue, setTextBoxValue] = useState("");

  const handleTextBoxChange = (e) => {
    setTextBoxValue(e.target.value);
  };

  return (
    <Layout SocialEducationalRolesU>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-cyan-200 text-3xl ... font-serif ...absolute bottom-0 right-3 w-30 ...">
          RECOMMENDATIONS
        </h1>
        {/* 6 */}
        <p className="text-cyan-200"></p>

        <a href={"/Teacher"}>
        <button className="text-cyan-200 text-xxl font-serif h-8  mt-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
          <p className="text-lime-200">Teacher</p>
        </button>
        </a>

        <a href={"/NGO_Worker"}>
        <button className="text-cyan-200 text-xxl font-serif h-8  mt-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
          <p className="text-lime-200">Working in NGOs</p>
        </button>
        </a>

        <a href={"/Community_O_C"}>
        <button className="text-cyan-200 text-xxl font-serif h-8  mt-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
          <p className="text-lime-200">Community Outreach Coordinator</p>
        </button>
        </a>
      </section>
    </Layout>
  );
}
// }
