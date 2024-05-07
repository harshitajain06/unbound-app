// // pages/Urbanarea.js
import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from 'next/script'


export default function Urbanarea() {
  const [selectedOption, setSelectedOption] = useState(""); // State for selected option
  const router = useRouter();

  const handleButtonClick = (selectedValue) => {
    setSelectedOption(selectedValue);
    if (selectedValue === "Technical") {
      router.push("/TechnicalU");
    } else if (selectedValue === "Service") {
      router.push("/ServiceU");
    } else if (selectedValue === "Problem Solving") {
      router.push("/ProblemSolvingU");
    } else if (selectedValue === "Sales and Marketing") {
      router.push("/SalesMarketingU");
    } else if (selectedValue === "Education and Administration") {
      router.push("/EducationAdministrationU");
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  const  urbanareaOptions = [
    { label: "Technical", value: "Technical" },
    { label: "Service", value: "Service" },
    { label: "Problem Solving", value: "Problem Solving" },
    { label: "Sales and Marketing", value: "Sales and Marketing" },
    { label: "Education and Administration", value: "Education and Administration" },
  ];

  return (
    <Layout Urbanarea>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-lime-200 text-5xl text-center tracking-wide pb-8">
          Question 3
        </h1>

        <h1 className="text-cyan-200 font-serif text-2xl text-center tracking-wide">
          Which skill are you interested in?
        </h1>

        <div className="grid grid-cols-2 gap-4 mt-4">
          {urbanareaOptions.map((option) => (
            <button
              key={option.value}
              className={`border-4 p-2 text-lime-200 ${
                selectedOption === option.value ? "bg-zinc-800 text-white" : ""
              }`}
              onClick={() => handleButtonClick(option.value)}
            >
              {option.label}
            </button>
          ))}
           
        </div>
      </section>
    </Layout>
  );
}
