// // pages/newpage.js

import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from 'next/script'


export default function TechnicalSkilledRolesU() {
  const [textBoxValue, setTextBoxValue] = useState("");

  const handleTextBoxChange = (e) => {
    setTextBoxValue(e.target.value);
  };


  const handleGoBack = () => {
    router.back();
  };

  return (
    <Layout TechnicalSkilledRolesU>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-cyan-200 text-3xl ... font-serif ...absolute bottom-0 right-3 w-30 ...">
          RECOMMENDATIONS
        </h1>
        {/* 6 */}
        <p className="text-cyan-200"></p>

        <a href={"/Driver"}>
        <button className="text-lime-200 text-xl font-serif mt-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300 ...">
          <p className="text-lime-200">Driving</p>
        </button>
        </a>

        <a href={"/Beautician"}>
        <button className="text-lime-200 text-xl font-serif mt-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300 ...">
          <p className="text-lime-200">Beauticians</p>
        </button>
        </a>

        <a href={"/Cook"}>
        <button className="text-lime-200 text-xl font-serif mt-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300 ...">
          <p className="text-lime-200">Cook</p>
        </button>
        </a>

        <a href={"/Painter"}>
        <button className="text-lime-200 text-xl font-serif mt-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300 ...">
          <p className="text-lime-200">Painter</p>
        </button>
        </a>

        <a href={"/masseuse"}>
        <button className="text-lime-200 text-xl font-serif mt-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300 ...">
          <p className="text-lime-200">Masseuse</p>
        </button>
        </a>
         
      </section>
    </Layout>
  );
}
// }
