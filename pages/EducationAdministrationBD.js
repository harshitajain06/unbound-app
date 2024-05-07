// // pages/newpage.js
import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from 'next/script'


export default function EducationAdministrationBD() {
  const [textBoxValue, setTextBoxValue] = useState("");

  const handleTextBoxChange = (e) => {
    setTextBoxValue(e.target.value);
  };


  const handleGoBack = () => {
    router.back();
  };

  return (
    <Layout EducationAdministrationBD>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-cyan-20000 text-3xl ... font-serif ...absolute bottom-0 right-3 w-30 ...">
          RECOMMENDATIONS
        </h1>
        {/* 6 */}
        <p className="text-cyan-200"></p>

        <a href={"/Event_Manual_Labour"}>
        <buton>
          <p className="text-lime-200">Event Manual Labour</p>
        </buton>
        </a>

        <a href={"/Microfinance_Officer"}>
        <buton>
          <p className="text-lime-200">Microfinance Officer</p>
        </buton>
        </a>

        <a href={"/Construction_Labourer"}>
        <buton>
          <p className="text-lime-200">Construction Laborer</p>
        </buton>
        </a>

        <a href={"/Data_Entry_Clerk"}>
        <buton>
          <p className="text-lime-200">Data Entry Clerk</p>
        </buton>
        </a>
         

      </section>
    </Layout>
  );
}
// }
