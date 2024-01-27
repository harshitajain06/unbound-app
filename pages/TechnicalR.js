// // pages/Question1.js

import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";

import { useRouter } from "next/router";
import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

export default function TechnicalR() {
  // const [textBoxValue, setTextBoxValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState(""); // State for dropdown value
  const router = useRouter();

  // const handleTextBoxChange = (e) => {
  //   setTextBoxValue(e.target.value);
  // };

  const handleDropdownChange = (selectedOption) => {
    setDropdownValue(selectedOption);
  };

  const TechnicalROptions = [
    {
      label: "Technical and Manual Roles",
      value: "Technical and Manual Roles",
    },
    {
      label: "Service and Management Roles",
      value: "Service and Management Roles",
    },
  ];

  const handleSubmit = () => {
    if (dropdownValue === "Technical and Manual Roles") {
      router.push("/TechnicalManualRoles");
    } else if (dropdownValue === "Service and Management Roles") {
      router.push("/ServiceManagementRoles");
    }
  };

  return (
    <Layout TechnicalR>
      <Head>
        <title>{siteTitle}</title>
        
      </Head>
      <section className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-lime-200 text-5xl text-center  tracking-wide ..  pb-8 ...pb-8 ...pb-8 ...pb-8 ...">
          Question 4
        </h1>
       

        <h1 class="text-cyan-200 font-serif text-2xl text-centre tracking wide .. ">
          Which from these do you prefer?
        </h1>
        <Dropdown options={TechnicalROptions} onChange={handleDropdownChange} />
        <button
          className="text-lime-200ext-3xl ... inset-x-0 bottom-10 h-16 ... transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
          onClick={handleSubmit}
        >
          NEXT
        </button>

      </section>
      
    </Layout>
  );
}
