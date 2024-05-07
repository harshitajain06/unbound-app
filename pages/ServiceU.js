import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router"; import React, { useState } from "react";
import Script from 'next/script'


export default function ServiceU() {
  const [selectedOption, setSelectedOption] = useState(""); // State for selected option
  const router = useRouter();

  const handleButtonClick = (selectedValue) => {
    setSelectedOption(selectedValue);
    if (selectedValue === "Service and Care Roles") {
      router.push("/ServiceCareRolesU");
    } else if (selectedValue === "Technical and Skilled Roles") {
      router.push("/TechnicalSkilledRolesU");
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  const  serviceUOptions = [
    { label: "Service and Care Roles", value: "Service and Care Roles" },
    { label: "Technical and Skilled Roles", value: "Technical and Skilled Roles" },
  ];

  return (
    <Layout ServiceU>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-lime-200 text-5xl text-center tracking-wide pb-8">
          Question 4
        </h1>

        <h1 className="text-cyan-200 font-serif text-2xl text-center tracking-wide">
          Which from these do you prefer?
        </h1>

        <div className="flex flex-wrap gap-4">
          {serviceUOptions.map((option) => (
            <button
              key={option.value}
              className={` border-4 p-2 text-lime-200 ${
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
