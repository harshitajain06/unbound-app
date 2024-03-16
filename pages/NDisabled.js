import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from 'next/script'


export default function NDisabled() {
  const [selectedOption, setSelectedOption] = useState(""); // State for selected option
  const router = useRouter();

  const handleButtonClick = (value) => {
    setSelectedOption(value);
    if (value === "Urban area") {
      router.push("/Urbanarea");
    } else if (value === "Rural area") {
      router.push("/Ruralarea");
    }
  };

  const handleGoBack = () => {
    router.back();
  };


  const NDisabledOptions = [
    { label: "Urban area", value: "Urban area" },
    { label: "Rural area", value: "Rural area" },
  ];

  return (
    <Layout NDisabled>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-lime-200 text-5xl text-center font-serif tracking-wide">
          Question 2
        </h1>

        <h1 className="text-cyan-200 font-serif text-2xl text-center tracking-wide">
          Where do you live?
        </h1>

        <div className="flex space-x-4 mt-4">
          {NDisabledOptions.map((option) => (
             <button
              key={option.value}
              className={` border-4  px-4 py-2 text-lime-200 hover:bg-zinc-800 hover:text-white transition duration-300 ${
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
