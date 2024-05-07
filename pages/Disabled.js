import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from 'next/script'


export default function Disabled() {
  const [selectedOption, setSelectedOption] = useState(""); // State for selected option
  const router = useRouter();

  const handleButtonClick = (value) => {
    setSelectedOption(value);
    if (value === "hand movements") {
      router.push("/HandMovements");
    } else if (value === "Leg Functionality") {
      router.push("/LegFunctionality");
    } else if (value === "Blind/Deaf") {
      router.push("/BlindDeaf");
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  const  DisabledOptions = [
    { label: "hand movements", value: "hand movements" },
    { label: "Leg Functionality", value: "Leg Functionality" },
    { label: "Blind/Deaf", value: "Blind/Deaf" },
  ];

  return (
    <Layout Disabled>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-lime-200 text-5xl text-center tracking-wide pb-8">
          Question 2
        </h1>

        <h1 className="text-cyan-200 font-serif text-2xl text-center tracking-wide">
          What mobility challenges do you face?
        </h1>

        <div className="flex space-x-4 mt-4">
          {DisabledOptions.map((option) => (
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
