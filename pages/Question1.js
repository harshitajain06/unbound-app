import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";

 export default function Question1() {
  const [selectedOption, setSelectedOption] = useState(""); // State for selected option
  const router = useRouter();

  const handleButtonClick = (value) => {
    setSelectedOption(value);
    if (value === "Disabled") {
      router.push("/Disabled");
    } else if (value === "Not Disabled") {
      router.push("/NDisabled");
    }
  };

  const handleGoBack = () => {
    router.back();
  };


  const Question1Options = [
    { label: "Yes", value: "Disabled" },
    { label: "No", value: "Not Disabled" },
  ];

  return (
    <Layout Question1>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-lime-200 text-5xl ... font-serif  text-center  tracking-wide .. pb-8 ...">
          Question 1
        </h1>

        <h1 className="text-cyan-200 font-serif text-2xl text-center tracking-wide ..">
          Do you have any mobility challenges?
        </h1>

        <div className="flex space-x-4 mt-4">
          {Question1Options.map((option) => (
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
